import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { Alert } from "react-native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { appLog } from "../utils";
// import * as Keychain from 'react-native-keychain';

import { axiosInstance, axiosWithAuthInstance } from "./axios";
import { GET_CHUCK_NORRIS_JOKES } from "./ServerConstants";

export const errorHandler = (error: {
  response: { data: any; status: any; headers: any };
  request: any;
  message: any;
  config: any;
}) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("Error", error.response.data.message, error.config.url);
    console.log("error.response.data", error.response.data);
    console.log("error.response.status", error.response.status);
    if (error.response.status === 500) {
      Alert.alert("Error", "Internal Server Error");
    } else if (error.response.status === 404) {
      Alert.alert("Error", "Not Found");
    } else {
      Alert.alert("Error", error.response.data.message);
    }
    // console.log('error.response.headers', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("error.request", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error-Something-happened", error.message);
  }
  // console.log(
  //   'error.config',
  //   error.config.url,
  //   error.config.method,
  //   error.config.data,
  // );
  // console.log('error.message', error.config.message);
  // console.log('error.message', error.config);
};

export const handleSuccess = (response: AxiosResponse<any, any>) => {
  console.log(
    "success-response-response",
    JSON.stringify(response.data),
    response.status,
    response.config.url
  );
  return response.data;
};

axiosWithAuthInstance.interceptors.request.use(
  async (config) => {
    // const credentials = await Keychain.getGenericPassword();
    // const credentials = getSecureCredentials(PASSWORD_KEY);
    // const credentials = await Keychain.getGenericPassword({
    //   service: PASSWORD_KEY,
    // });
    // logLogLog('credentials', credentials);

    // if (credentials) {
    //   //@ts-ignore
    //   config.headers['Authorization'] = `Bearer ${credentials?.password}`;

    //   //@ts-ignore
    //   logLogLog('credentials', credentials.password);
    // }
    appLog("config", config.data, config.url);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// jokes / random;
// export const useFetchChuckNorrisJokes = () => {
//   return useQuery([GET_CHUCK_NORRIS_JOKES], () => {
//     return axiosInstance.get("jokes/categories");
//   });
// };

export const fetchJokeCategories = () => axiosInstance.get("jokes/categories");

export const useFetchDetails = (category: string) => {
  return useQuery([GET_CHUCK_NORRIS_JOKES], () => {
    return axiosInstance.get("jokes/random?category=" + category);
  });
};
