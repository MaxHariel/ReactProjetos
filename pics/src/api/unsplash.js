import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bc865668cb76574b2fd27f2bd980253d8e6ad44d752b7f7636faa704e9c92f69"
  }
});
