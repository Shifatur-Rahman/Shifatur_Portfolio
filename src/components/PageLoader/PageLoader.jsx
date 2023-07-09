import React, { useState, useEffect } from "react";
import {InfinitySpin } from "react-loader-spinner";
import "./PageLoader.css";
// import pageLoaderImg1 from "../../asset/images/Reload/loading.svg"
import pageLoaderImg from "../../asset/images/Reload/talukder.gif"

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);
  return (
    <>
      <div className="page-loader">
{/* <InfinitySpin width="200" color="#17a2b8" /> */}
{
  loading ? <img src={pageLoaderImg} alt ="pre-loader" /> : ""
}

      </div>
    </>
  );
};

export default PageLoader;
