"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/css/premium.css";
import { useUserStore } from "@/store/store";
import HiddenContent from "@/components/HiddenContent";
import CommentCard from "@/components/CommentCard";
import { toast } from "react-hot-toast";
import { FaRegBookmark } from "react-icons/fa";
export default function page({ params }: any) {

  const {IsPremium, Username} = useUserStore();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([])
  const { slug } = params;
  const [article, setArticle] = useState({
    title: "",
    description: "",
    author: "",
    time: "",
    tags: [],
  });
  const [date, setDate] = useState("");
  const [parsedContent, setParsedContent] = useState([]);

  const addBookmark = async() => {
    const data = {
      articleId: slug,
      username: Username
    }

    try {
      
    const re = await axios.post("/api/bookmark/add-bookmark", data);
    const response = re.data;
    if (response.type == "success") {
      toast.success(response.message);
    }
    else {
      toast.error(response.message);
    }

    }

    catch(error:any){
      console.log(error)
      toast.error(error.response.data.message);
    }
  }

  const getArticle = async () => {
    const response = await axios.post(`/api/articles/get-single-article`, {
      articleId: slug,
    });

    const res = response.data;

    if (res.type === "success") {
      setArticle(res.article);
      console.log(res.article);
      const date = new Date(res.article.time);
      setDate(date.toDateString());
      console.log(res.article.blocks);
  

      var html = "";
      res.article.blocks.forEach(function (block: any) {
        switch (block.type) {
          case "header":
            html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
            break;
          case "paragraph":
            html += `<p>${block.data.text}</p>`;
            break;
          case "delimiter":
            html += "<hr />";
            break;
          case "image":
            html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
            break;
          case "list":
            html += "<ul>";
            block.data.items.forEach(function (li) {
              html += `<li>${li}</li>`;
            });
            html += "</ul>";
            break;
          default:
            console.log("Unknown block type", block.type);
            console.log(block);
            break;
        }
      });

      console.log(html)
      setParsedContent(html)
    }
  };

  const comment2 = {
    username: "psycho",
    body: "Test"

  }

  const addComment = async() => {
    const data = {
      username: Username,
      articleId: slug,
      body: comment
    }

    const req = await axios.post("/api/comment/add-comment", data)

    if(req.data.type == "success"){
      toast.success(req.data.message);
      let newComment = {
        username: Username,
        body: comment,
        articleId: slug
      };
      setComment("")
      setComments([...comments, newComment])
    }
    else {
      toast.error(req.data.message)
    }
  }


  const getComments = async() =>{
    const req = await axios.post("/api/comment/get-comments", {articleId: slug})

    console.log(req.data)
    if (req.data.type = "success") {
      setComments(req.data.comments);
    }
    else {
      toast.error(req.data.message);
    }
  }
  useEffect(() => {
    getArticle();
    getComments();
  }, []);

  return (
    <>
    <div className="p-10 px-[300px]">
      <h1 className="text-4xl font-bold">{article.title}</h1>

      <img
        className="my-5 rounded-2xl"
        src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="flex items-center">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/daa984189878f63e7f33625a799feb14b1ee4495_full.jpg" />
          </div>
        </div>

        <div className="my-7 ml-5">
          <h1 className="text-2xl font-bold">{article.author}</h1>
          <p>Published on: {date}</p>
        </div>
      </div>
      {
  article.isPremium && IsPremium ? (
    <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
  ) : (
    <div className="premium-content">
      <HiddenContent />
    </div>
  )
}
      {
        article.isPremium && !IsPremium?(
          <div className="premium-overlay">
    <p>This is premium content. Please upgrade to access.</p>
</div>
        ):null
      }
      <div className="divider"></div>

      <div className="flex justify-between items-center">
        <div className="my-3 flex flex-wrap gap-2">
          {article.tags.map((tag, index) => {
            return (
              <span key={index} className="badge badge-primary">
                {tag}
              </span>
            );
          })}
        </div>

        <div className='flex justify-center items-center'>
          <FaRegBookmark onClick={addBookmark} style={{
            cursor: "pointer"
          }} className='text-2xl mx-3'/>
      
        </div>
      </div>

      <div className="divider"></div>


<div className="flex justify-between items-center">
      <h1 className="text-center font-bold text-3xl my-5">Discussions ({comments.length})</h1>
      <button onClick={()=>document.getElementById('newComment').showModal()} className="btn btn-sm btn-primary">New Comment</button>
</div>

      <div className="flex justify-center items-center flex-col">
        
        {
          comments.map((comment,index)=> {
            return (
              <CommentCard comment={comment} key={index}/>
            )
          })
        }


      </div>
    </div>
    <dialog id="newComment" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">New Comment!</h3>
    <label className="form-control">
  <div className="label">
    <span className="label-text">Write your comment:</span>
  </div>
  <textarea value={comment} onChange={e=>setComment(e.target.value)} className="textarea textarea-bordered h-24" placeholder="Comment"></textarea>

</label>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
        <button onClick={addComment} className="btn mx-3 btn-primary">Add Comment</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
}
