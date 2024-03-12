import { useSearchParams } from "react-router-dom";

import { WATCH_VIDEO_URL } from "../../utils/apiConstants";

const WatchVideo = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div>
      <div>
        <iframe
          width="1200"
          height="600"
          src={WATCH_VIDEO_URL + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchVideo;
