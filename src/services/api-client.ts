import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a3bc33755109465d8309e6d9a34d9197'
  }
})