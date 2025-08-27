import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice.js";

const VideoContainer = () => {
  const [videoApiData, setVideoApiData] = useState(null);
  const dispatch = useDispatch();

  const getVideo = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoApiData(data.items);
  };

  useEffect(() => {
    getVideo();
    dispatch(openMenu());
  }, []);

  if (!videoApiData) {
    return <h1>No videos</h1>;
  }

  return (
    <div className="grid grid-cols-3">
      {videoApiData.map((data) => (
        <Link key={data.id} to={"/watch?v=" + data.id}>
          <VideoCard data={data} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
