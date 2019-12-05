import axios from "axios";
import ArticleAPI from "./ArticleAPI";

const API = {
  ArticleAPI: ArticleAPI,
  isCancel: thrown => axios.isCancel(thrown),
  cancelAll: () => {
    ArticleAPI.cancelAll();
  }
};

export default API;
