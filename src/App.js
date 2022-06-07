import { useEffect, useRef, useState } from "react";
import About from "./components/about/About";
import Intro from "./components/home/Intro";
import Navbar from "./components/home/Navbar";
import Backtotop from "./Backtotop"
import ReactLoading from "react-loading";
import Cursor from "./Cursor";
import Details from "./components/about/Details";


function App() {
  // Display the loading screem when component not mounted
  const loadRef = useRef()
  const [state,setstate] = useState(false)
  useEffect(() =>{
    setstate(true)
  }, [])

  return state?
    <div ref={loadRef} className="MainPage">
      {/* Hero section */}
    <Backtotop />
    <Cursor />
    <Navbar />
    <Intro />

    {/* About section */}
    
      <About />
      <Details />
    </div>: <LoadingPage />;
}

export default App;


function LoadingPage() {
  return (
    <div className="loader">
      <ReactLoading type={"cylon"} color={"#FF0066"} height={'50%'} width={'20%'} />  
    </div>
  )
}

