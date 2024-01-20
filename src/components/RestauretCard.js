import { CARD_IMG_URL } from "../utils/const"
const RestauretCard=(props)=>{
    const {resData}=props
    //lets optimize our app
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    return(

        <div className="res-card" >
    
            <img className="res-logo" alt="res-log" src={CARD_IMG_URL+resData.data.cloudinaryImageId}></img>
            <div className="data"> 
            <h5 className="title" style={{
             }
             // here cusines are in form of array
             //we need to make it comma seperated
             }>{name}</h5>
             <span><h6 className="cuisines">{cuisines.join(", ")}</h6></span>
             <h6>{avgRating}Stars</h6>
             <h6>₹{costForTwo/100} For Two</h6>
             <h6>{deliveryTime}</h6>
             </div>
        </div>
    )
}
export default RestauretCard