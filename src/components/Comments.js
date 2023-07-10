import React, { useState } from "react";

function Comments({ user, comment }) {
  const [upVotes, changeUpVotes] = useState(0);

  function handleUpVotes() {
    changeUpVotes(upVotes + 1);
  }

  const [downVotes, changeDownVotes] = useState(0);

  function handleDownVotes() {
    changeDownVotes(downVotes + 1);
  }

  return (
    <div>
      <div>
        <h4>{user}</h4>
        <h5>{comment}</h5>
        <button onClick={handleUpVotes}> {upVotes} 👍 </button>
        <button onClick={handleDownVotes}> {downVotes} 👎 </button>
      </div>
    </div>
  );
}

export default Comments;
