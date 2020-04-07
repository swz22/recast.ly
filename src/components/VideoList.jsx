import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video, index) =>
        <VideoListEntry video={video} key={index} DisplayVideoOnClick={props.DisplayVideoOnClick} />
      )}
    </div>
  );
};

//OLD CODE
// var VideoList = (props) => (
//   <div className="video-list">
//     {props.videos.map((video) => (
//       <VideoListEntry key={video.id.videoId} video={video} />
//     ))}
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// ReactDOM.render(<VideoList videos={exampleVideoData} />, document.getElementById('vids'));
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
