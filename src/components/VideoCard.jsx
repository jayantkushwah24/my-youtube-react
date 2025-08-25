import React from "react";

const VideoCard = ({ data }) => {
  const { title, thumbnails, channelTitle } = data.snippet;
  return (
    <div className="m-4">
      <img
        className="h-[30vh] w-[31vw] rounded-2xl object-cover"
        src={thumbnails.high.url}
        alt="thumbnail"
      />
      <h1 className="text-lg font-medium leading-snug mt-2 text-black overflow-hidden text-ellipsis line-clamp-2">
        {title}
      </h1>
      <h3>
        {channelTitle}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          className="h-4 inline w-4"
        >
          <path
            fill="currentColor"
            d="m9.023 21.23l-1.67-2.815l-3.176-.684l.311-3.277L2.346 12l2.142-2.454l-.311-3.277l3.177-.684l1.67-2.816L12 4.027l2.977-1.258l1.67 2.816l3.176.684l-.311 3.277L21.654 12l-2.142 2.454l.311 3.277l-3.177.684l-1.67 2.816L12 19.973l-2.977 1.258Zm1.927-6.372L15.908 9.9l-.708-.72l-4.25 4.25l-2.15-2.138l-.708.708l2.858 2.858Z"
          />
        </svg>
      </h3>
      <h3>{data.statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
