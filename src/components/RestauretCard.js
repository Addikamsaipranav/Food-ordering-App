import { CARD_IMG_URL } from "../utils/const"
const RestauretCard=(props)=>{
    const {resData}=props
    //lets optimize our app
    console.log(resData)
    // console.log(resData.info.id)
    // console.log(resData.info.name)
    // console.log(resData.info.cloudinaryImageId)
    // console.log(resData.info.avgRating)
    // console.log(resData.info.sla.deliveryTime)
    
    return(

        <div className="res-card" >
    
            <img className="res-logo" alt="res-log" src={CARD_IMG_URL+resData.info.cloudinaryImageId}></img>
            <div className="data"> 
            <h5 className="title" style={{
             }
             // here cusines are in form of array
             //we need to make it comma seperated
             }>{resData.info.name}</h5>
             <span><h6 className="cuisines">{resData.info.cuisines.join(", ")}</h6></span>
             <h6>{resData.info.avgRating}Stars</h6>
             <h6>₹{resData.info.costForTwo/100} For Two</h6>
             <h6>{resData.info.sla.deliveryTime}</h6>
             </div>
        </div>
    )
}
export default RestauretCard
