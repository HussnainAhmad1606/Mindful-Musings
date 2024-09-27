import { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header';
import CodeTool from '@rxpm/editor-js-code';
import SimpleImage from "@editorjs/simple-image";
import CodeBox from '@bomdi/codebox'
import Hyperlink from 'editorjs-hyperlink';
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
  const [isPreview, setIsPreview] = useState(false)
  const ejInstance = useRef();
  const [content, setContent] = useState(null);
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

  return (
    <div>
      <div id="editorjs"></div>
      <button onClick={() => setIsPreview(!isPreview)}>{isPreview ? 'Edit' : 'Preview'}</button>
      {isPreview && content && <div dangerouslySetInnerHTML={{__html: content}} />}
    </div>
  );
   
} 

export default WritingEditor;

