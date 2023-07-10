import Votes from "./Votes";
import Comments from "./Comments";
import React, { useState } from "react";

function VideoInfo({ video }) {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      video.comments.filter((comments) => {
      return comments.comment.match(searchInput);
  });
  }

  const [showComments, setCommentState] = useState(true);

  function handleComments() {
    setCommentState(!showComments);

    if (showComments === true) {
    }
  }
  const commentDisplay = video.comments.map((comments) => (
    <Comments key={comments.id} {...comments} />
  ));

  // console.log(video)
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
      />
      <p>{video.title}</p>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes} />
      <button onClick={handleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <div><input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} /></div>
      
      <div>{showComments ? commentDisplay : ""}</div>
    </div>
  );
}

export default VideoInfo;
