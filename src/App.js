
// // import React from "react"
// // import ReactDOM  from "react-dom/client"




// // //react element
// // const heading=React.createElement("h1",{id:"heading"},"NAMSTE REACT")


// // //jsx element

// // const jsxhead=<h1 id="jsxhead" className="jsxhead">NAMSTE</h1>
// // console.log(jsxhead)
// // console.log(heading)
// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading)



import React from "react";
import ReactDOM  from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
//java-script object
//inline css => pass javascript object




  



const AppLayout=()=>{

    return <div className="app">
       <Header/>
        <Body/>
        <div>
        
        </div>
    </div>

}




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)









