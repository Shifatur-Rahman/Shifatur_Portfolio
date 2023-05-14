import React, {useState, useEffect} from 'react'
import ReloaderImg from "../../asset/images/Reload/loading.svg"
import { Circles } from  'react-loader-spinner'
import "./PageLoader.css"

const PageLoader = () => {

const [loading,setLoading] = useState(false);

useEffect(() => {
  const handleBeforeUnload = () => {
    setLoading(true);
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);

  return (
    <>
    
    <div className='page-loader'>
    {loading ? (
        <Circles
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      ) : null}
    </div>     
    
    </>
  )
}

export default PageLoader;
