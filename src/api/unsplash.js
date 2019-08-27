import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3d2b6b17f0f94e40a70657dcb6884fba1ac8b6cdbda882bdf4813eaf1821f6e2"
  }
});
