import axios from "axios";

const KEY = "AIzaSyBgDO-1VRAhdVDFIDLbYCjSe3ohphjSr1E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5
  }
});
