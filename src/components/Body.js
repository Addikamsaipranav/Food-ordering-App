
import RestauretCard from "./RestauretCard"
import restaurentData from "../utils/Data"
import {useState} from "react";
const Body=()=>{
    
    const [rated,setRated]=useState([])
    return(
        <div className="body">
             <div className="filters">
              <button>All Restaurents</button>
              <button onClick={()=>console.log("CLICKED")}>Top Rated Restaurants</button>
             </div>
             <div className="res-conatiner">
               {restaurentData.map((restaurent) => (<RestauretCard key={restaurent.data.id} resData={restaurent}/>))}
             </div>
        </div>
    )
}

export default Body