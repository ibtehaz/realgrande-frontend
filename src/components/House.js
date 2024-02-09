import { useState } from "react";
import Enquiry from "./Enquiry";
import { useEffect } from "react";


const House = (props) => {
    
    
    


    if(!props.houseInfo) {
        return <h1>loading...</h1>
    }


    return ( 
        <div className="row">
            <div className="col-sm-7">
                {props.houseInfo.address}
            </div>
            <div className="col-sm-5">
                Price: {props.houseInfo.price}
            </div>
            <div className="col-sm-7">
                <img src="/imgs/1.jpg" className="img-fluid" alt="image 1" />
            </div>
            <div className="col-sm-5">
                <p>
                    {props.houseInfo.description}
                </p>
                { props.showEnquiry && <Enquiry address= {props.houseInfo.address} /> }



            </div>
        </div>
     );
}
 
export default House;