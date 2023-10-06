import React from "react";
import ReactPlayer from "react-player";
import videoPath from "../assets/videos/video.mp4";

const Process = () => {
  return (
    <>
      <section id="process" className="section__padding">
        <div className="container">
          <div className="section__title">Our Work Process</div>
          <div className="para__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            autem perferendis? Tenetur iusto deserunt itaque nisi fugiat id
            possimus odio.
          </div>
          <div className="video-container">
            <ReactPlayer
              url={videoPath}
              controls={true}
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
