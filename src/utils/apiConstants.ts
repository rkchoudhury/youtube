const API_KEY = "AIzaSyCsGSPl4d6AGiSFOtnvAd1y-hmNP5ClAew";

const GET_POPULAR_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export { GET_POPULAR_VIDEO_URL };
