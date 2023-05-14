import React from 'react'
import ReloaderImg from "../../asset/images/Reload/loading.svg"
import { Circles } from  'react-loader-spinner'

const PageLoader = () => {
    setTimeout(()=>{
        
    })
  return (
    <>
    
    <div className='reloader'>

            {/* <img src={ReloaderImg} alt='reloader' /> */}

            <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

    </div>     
    
    </>
  )
}

export default PageLoader