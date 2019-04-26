import axios from "axios";

const KEY = "AIzaSyDlNW2XcmCSnbvYjsPCEW53th1gOwxjBCg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
