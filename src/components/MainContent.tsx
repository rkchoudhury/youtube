import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GET_POPULAR_VIDEO_URL } from "../utils/apiConstants";
import VideoCard from "./VideoCard";
import { IVideo } from "../models/VideoModel";
import { ROUTE_NAMES } from "../navigation/Routes";

const MainContent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(GET_POPULAR_VIDEO_URL);
      const data = await response.json();
      setVideos(data?.items);
    };

    fetchVideos();
  }, []);

  if (videos.length === 0) return null;

  return (
    <div className="flex-1 ml-6">
      <div className="flex flex-wrap">
        {videos.map((eachVideo: IVideo) => (
          <Link to={`${ROUTE_NAMES.WATCH}?v=${eachVideo.id}`}>
            <VideoCard key={eachVideo.id} video={eachVideo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
