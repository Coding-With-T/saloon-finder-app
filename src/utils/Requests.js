import axios from "axios";

export const PostRequest = async (url, data) => {
  return axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  }).then((response) => response);
};

export const GetRequest = async (url, data, token) => {
  return axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    params: data,
  }).then((response) => response);
};
