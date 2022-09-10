import React from "react";
import Header from "./Components/Header";
import {
  BrowserRouter,

} from "react-router-dom";
import Navs from "./Components/Navs";
const App=()=>{

  return(
    <>
    <BrowserRouter>
    <Header/>
      <Navs/>
    </BrowserRouter>

    </>
  )

}

export default App;