import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import "./BackToTopButton.css";

const BackToTopButton = () => {
    const [backToTopBtn, setbackToTopBtn] = useState(false);

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
            setbackToTopBtn(true);
        } else{
            setbackToTopBtn(false);
        }
    })
},[])

const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
  return (
    <div>
{
    backToTopBtn && (
        <button
        className='backToTopBtn'
        onClick={scrollUp}>  <BsFillArrowUpSquareFill />  </button>
    )
}
    </div>
  )
}

export default BackToTopButton
