function VideoInfo({ video }) {
  // console.log(video)
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        // allowFullScreen
      />
      <p>{video.title}</p>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
    </div>
  );
}

export default VideoInfo;
