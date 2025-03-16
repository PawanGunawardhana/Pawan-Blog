import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //console.log("user effect ran");
    //console.log(data);
    setTimeout(() => {
      fetch(url)
        .then((res) => {
         // console.log(res);
          if (!res.ok) {
            throw Error("Failed to fetch data from that API");
          }
          return res.json();
        })
        .then((data) => {
         // console.log(data);
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
         // console.error(err);
          setError(err.message);
          setIsPending(false);
          setData(null);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
