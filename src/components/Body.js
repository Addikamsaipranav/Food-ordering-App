
import RestauretCard from "./RestauretCard"

import {useState,useEffect} from "react";
const Body=()=>{
    
    const [listOfRestaurents,setListOfRestaurents]=useState([])
    const [originalData,setOriginalData]=useState([])
    useEffect(() => {
      console.log("USEEFFECR")
      fetchData();
    }, []);
    
  console.log("RENDERED")
    const fetchData = async () => {
        console.log("CALLING API")
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log(response)
        const jsonData = await response.json();
        console.log("Fetched Data:", jsonData);
         // Log the fetched data to the console
        if(jsonData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
          console.log("2")
          setListOfRestaurents(jsonData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setOriginalData(jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        else{
          console.log(1)
          setListOfRestaurents(jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setOriginalData(jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

      
    };
  
    // we can write in different way
    // const arr=useState(restaurentData)
    // listOfRestaurents=arr[0]
    // setListOfRestaurents=arr[1]
    return(
        <div className="body">
              
        <div className="filters">
        <button onClick={()=>{
          setListOfRestaurents(originalData)
        }}>All Restaurents</button>

        <button onClick={()=>{
          const filtered=originalData.filter((res)=>res.info.avgRating>4.5)
        
          setListOfRestaurents(filtered)
        
        }}>Top Rated Restaurants</button>
        <button onClick={()=>{
          const filtered=originalData.filter((res)=>res.info.avgRating>4.2 && res.info.avgRating<4.4)
        
          setListOfRestaurents(filtered)
        
        }}> Avg Rated Restaurants</button>
       </div>





             <div className="res-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
             {listOfRestaurents && listOfRestaurents.map((restaurent, index) => (

              <RestauretCard key={restaurent.info.id} resData={restaurent} />
            ))}
            
           </div>
        </div>
    )
}

export default Body
