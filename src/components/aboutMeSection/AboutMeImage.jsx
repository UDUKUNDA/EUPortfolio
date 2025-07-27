const AboutMeVideo = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      {/* Video Container with Rounded Corners */}
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <video
          src="../../videos/elvpitc.mp4" // Make sure this path is correct
          className="h-full w-auto object-cover"
          controls
          playsInline
        />
      </div>

      
    </div>
  );
};

export default AboutMeVideo;
