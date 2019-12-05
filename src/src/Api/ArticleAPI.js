import axios, { CancelToken } from "axios";
import configAPI from "./configAPI";

let cancelSource = CancelToken.source();

const ArticleAPI = {
  getAll: () =>
    axios.get(`${configAPI.baseURL}/articles`, {
      cancelToken: cancelSource.token
    }),
  edit: article =>
    axios.post(`${configAPI.baseURL}/articles`, article, {
      cancelToken: cancelSource.token
    }),
  cancelAll: () => {
    cancelSource.cancel();
    cancelSource = CancelToken.source();
  }
};

export default ArticleAPI;
