import axios from "axios";
import { useState } from "react";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    const returnDataGet = await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert("erro");
      });
    setLoading(false);
    return returnDataGet;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnDataPost = await axios({
      method: "post",
      url: url,
      data: body,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert("erro");
      });
    setLoading(false);
    return returnDataPost;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
