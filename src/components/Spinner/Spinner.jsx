import React from 'react'
import "./Spinner.css"
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import TalukderSpinnerImg from "../../asset/images/Reload/loading.svg" 

const Spinner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, []);

  return (
    <>
    <div className="preLoader">
    {/* <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> */}
 <img src={TalukderSpinnerImg} alt="spinner" />
    </div>
    
    </>
  )
}

export default Spinner