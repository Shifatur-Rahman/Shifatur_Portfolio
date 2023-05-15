import React, { useState, useEffect } from "react";
// import ReloaderImg from "../../asset/images/Reload/loading.svg"
import {InfinitySpin } from "react-loader-spinner";
import "./PageLoader.css";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="page-loader">
<InfinitySpin width="200" color="#17a2b8" />
      </div>
    </>
  );
};

export default PageLoader;
