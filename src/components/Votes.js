import { useState } from "react";

function Votes({ upvotes, downvotes }) {
  const [upVotes, changeUpVotes] = useState(upvotes);

  function handleUpVotes() {
    changeUpVotes(upVotes + 1);
  }

  const [downVotes, changeDownVotes] = useState(downvotes);

  function handleDownVotes() {
    changeDownVotes(downVotes + 1);
  }
  return (
    <div>
      <button onClick={handleUpVotes}> {upVotes} 👍 </button>
      <button onClick={handleDownVotes}> {downVotes} 👎 </button>
    </div>
  );
}

export default Votes;
