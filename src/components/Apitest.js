import React, { useEffect } from "react";

const Apitest = () => {
  const getData = async () => {
    const data = await fetch(
      "https://example-data.draftbit.com/books?_limit=60"
    );
    const res = await data.json();
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>apitest</div>;
};

export default Apitest;
