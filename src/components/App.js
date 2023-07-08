import { useState } from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import Votes from "./Votes.js";
import Comments from "./Comments";

function App() {
  return (
    <div className="App">
      <VideoInfo video={video} />

      <Votes video={video} />

      {/* <Comments video={video} /> */}
    </div>
  );
}

export default App;
