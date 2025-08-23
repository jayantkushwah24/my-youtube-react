import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard.jsx";

const VideoContainer = () => {
  const [videoApiData, setVideoApiData] = useState(null);
  const getVideo = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoApiData(data.items);
    console.log(data.items);
  };
  useEffect(() => {
    getVideo();
  }, []);

  if (!videoApiData) {
    return <h1>No videos</h1>;
  }

  return (
    <div className="grid grid-cols-3">
      {videoApiData.map((data) => (
        <VideoCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default VideoContainer;
