import { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header';
import CodeTool from '@rxpm/editor-js-code';
import SimpleImage from "@editorjs/simple-image";
import CodeBox from '@bomdi/codebox'
import Hyperlink from 'editorjs-hyperlink';
import { IoMdClose } from "react-icons/io";
import { useUserStore } from '@/store/store';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const DEFAULT_INITIAL_DATA =  {
  "time": new Date().getTime(),
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "This is my awesome editor!",
        "level": 1
      }
    },
  ]
}

const WritingEditor = () => {
  const [isPreview, setIsPreview] = useState(false);
  const ejInstance = useRef();
  const [content, setContent] = useState(null);

  const {Username} = useUserStore();


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [isPremium, setIsPremium] = useState(false);

  const initEditor = () => {
    const editor = new EditorJS({
       holder: 'editorjs',
       onReady: () => {
         ejInstance.current = editor;
       },
       autofocus: true,
       data: DEFAULT_INITIAL_DATA,
       onChange: async () => {
         let content = await editor.saver.save();

         console.log(content);
         setContent(content)

       },
       tools: { 
        header: Header,
        image: SimpleImage,
        
        code: {
          class: CodeBox,
          config: {
            themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css',
            themeName: 'atom-one-dark',
            useDefaultTheme: 'light'
          }
        },

        hyperlink: {
          class: Hyperlink,
          config: {
            shortcut: 'CMD+L',
            target: '_blank',
            rel: 'nofollow',
            availableTargets: ['_blank', '_self'],
            availableRels: ['author', 'noreferrer'],
            validate: false,
          }
        },
      },
     });
   };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const postArticle = async() => {
    const savedData = await ejInstance.current.save();
    console.log(savedData);
    const data = {
      title,
      description,
      tags,
      isPremium,
      ...savedData,
      author: Username
    }
    console.log(data);

    const req = await axios.post("/api/articles/add-article", data);
    const response = req.data;

    if (response.type == "success") {
      toast.success(response.message);
    }
    else {
      toast.error(response.message);
    }
  }

  return (
    <div>
      <div id="editorjs"></div>
      <button onClick={() => setIsPreview(!isPreview)}>{isPreview ? 'Edit' : 'Preview'}</button>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('articleSettings').showModal()}>Post</button>
<dialog id="articleSettings" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Article Settings!</h3>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Article Title:</span>
  </div>
  <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control">
  <div className="label">
    <span className="label-text">Article Description</span>
  </div>
  <textarea value={description} onChange={e=>setDescription(e.target.value)} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Is Premium?</span>
  </div>
  <select value={isPremium} onChange={e=>setIsPremium(e.target.value)} className="select select-bordered">
    <option value={true} selected>Yes</option>
    <option value={false}>No</option>
  </select>
 
</label>


<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Article Tags</span>
    <button onClick={()=> {
      setTags([...tags, tag]);
      setTag("");
    }} className="btn text-white btn-sm btn-primary label-text-alt">Add Tag</button>
  </div>
  <input type="text" value={tag} onChange={e=>setTag(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>
<div className="my-3 flex flex-wrap gap-2">

{
  tags.map((tag,index)=> {
    return <span key={index} className="badge badge-primary">{tag} <IoMdClose className='ml-3' onClick={()=> {
      setTags(tags.filter(t=>t!==tag));
    }} /></span>
  })

}
  </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
        <button onClick={postArticle} className="btn btn-primary mx-3">Post</button>
      </form>
    </div>
  </div>
</dialog>
      {isPreview && content && <div dangerouslySetInnerHTML={{__html: content}} />}
    </div>
  );
   
} 

export default WritingEditor;

