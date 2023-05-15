import React from 'react'
import "./Spinner.css"
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

  return (
    <>
    <div className="preLoader">
    <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </div>
    
    </>
  )
}

export default Spinner