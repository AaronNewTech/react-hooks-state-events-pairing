import { useState } from "react";

function Votes({ video }) {
  const initUpVotes = video.upvotes;
  const initDownVotes = video.downvotes;

  const [upVotes, changeUpVotes] = useState(initUpVotes);

  function handleUpVotes() {
    changeUpVotes(upVotes + 1);
  }

  const [downVotes, changeDownVotes] = useState(initDownVotes);

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
