import React from "react";

import { IVideo } from "../models/VideoModel";

interface IProps {
  video: IVideo;
}

const VideoCard = (props: IProps) => {
  const {
    video: {
      snippet: { thumbnails, title },
      contentDetails: { caption },
    },
  } = props;
  return (
    <div className="hover:border-2 rounded-2xl border-gray-500 w-72 h-60 ml-4 mb-4 cursor-pointer">
      <img src={thumbnails.medium.url} alt={title} className="rounded-t-2xl" />
      <div className="p-2">
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
