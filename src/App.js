import AppRoute from "./router/AppRoute";
import "./App.css";
import React, {useState,useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spineer');
  if(spinner){
    setTimeout(()=>{
spinner.style.display = 'none';
setLoading(false);
    },200)
  }
  return (
    <>
   {
    !loading && (
      <AppRoute />
    )
   }
    </>
  );
}

export default App;
