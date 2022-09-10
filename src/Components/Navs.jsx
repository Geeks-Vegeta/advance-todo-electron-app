import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import AddTask from "./AddTask";
import Default from "./Default";
import Finished from "./Finished";

const Navs=()=>{
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Default />} />
                <Route exact path="finished" element={<Finished />} />
                <Route exact path="addtask" element={<AddTask />} />
            </Routes>
        </>
    )
}

export default Navs;