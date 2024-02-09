import { useParams } from "react-router-dom";
import House from "./House";
import { useEffect, useState } from "react";


const SearchedHouse = (props) => {
    //get the id from params in location bar
    // console.log("SearchedHouse props", props);
    let paramsObj = useParams();
    console.log(paramsObj);
    // compare it with the props allhouses and get the house. find
    let searchedHouseObj = props.allHouses.find((house) => { return paramsObj.id == house._id});
    let [showEnquiry, setShowEnquiry] = useState(false);
   //  console.log(searchedHouseObj);
    // let houseId = paramsObj.id;

    useEffect(()=> {
        if(sessionStorage.getItem('role') === 'customer') 
        {setShowEnquiry(true) } 
        else 
        {setShowEnquiry(false)}
    }, [paramsObj])

    




    return (
        <>
        <h1> Searched House !</h1>
        <House houseInfo={searchedHouseObj} showEnquiry={showEnquiry} />
        </>
     );
}
 
export default SearchedHouse;