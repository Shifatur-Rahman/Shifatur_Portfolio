import React, { useCallback, useRef } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { Carousel } from 'mdb-react-ui-kit';


const Slider2 = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
      videoRef.current.play();
    }, []);
  
    const handleMouseLeave = useCallback(() => {
      videoRef.current.pause();
    }, []);


  return (
    <>

  <MDBContainer>
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
        type="video/mp4"
        loop
        className="w-100"
      ></video>
    </MDBContainer>
         
    </>
  )
}

export default Slider2;