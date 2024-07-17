

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-4 text-xl hover:bg-opacity-80 rounded-lg">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-4 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
