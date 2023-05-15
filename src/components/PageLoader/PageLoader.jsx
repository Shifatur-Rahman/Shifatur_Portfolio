import React, { useState, useEffect } from "react";
// import ReloaderImg from "../../asset/images/Reload/loading.svg"
import { Blocks, InfinitySpin } from "react-loader-spinner";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <>
      <div className="page-loader">
        {/* <Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  /> */}

        <InfinitySpin width="200" color="#17a2b8" />
      </div>
    </>
  );
};

export default PageLoader;
