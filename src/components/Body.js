
import RestauretCard from "./RestauretCard"
import restaurentData from "../utils/Data"
import {useState} from "react";
const Body=()=>{
    
    const [listOfRestaurents,setListOfRestaurents]=useState(restaurentData)


    // we can write in different way
    // const arr=useState(restaurentData)
    // listOfRestaurents=arr[0]
    // setListOfRestaurents=arr[1]
    return(
        <div className="body">
             <div className="filters">
              <button onClick={()=>{
                setListOfRestaurents(restaurentData)
              }}>All Restaurents</button>
              <button onClick={()=>{
                const filtered=restaurentData.filter((res)=>res.data.avgRating>4)
              
                setListOfRestaurents(filtered)
              
              }}>Top Rated Restaurants</button>
              <button onClick={()=>{
                const filtered=restaurentData.filter((res)=>res.data.avgRating>3 && res.data.avgRating<4)
              
                setListOfRestaurents(filtered)
              
              }}> Avg Rated Restaurants</button>
             </div>
             <div className="res-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
             {listOfRestaurents.length === 0 ? (
               <div style={{ fontSize: "20px", fontWeight: "bold", color: "blue" ,marginTop:"200px",marginBottom:"290px" }}>
                 No Restaurants found with a cool animation!
               </div>
             ) : (
               listOfRestaurents.map((restaurent) => (
                 <RestauretCard key={restaurent.data.id} resData={restaurent} />
               ))
             )}
           </div>
        </div>
    )
}

export default Body