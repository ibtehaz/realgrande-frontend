import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
    let paramsObj = useParams()
    //get county name
    //based on county name, iterate through houseData and filter
   
    let filteredArray = props.allHouses.filter((house) => {
        return house.county === paramsObj.county
    })




    //store them all in an array


    return ( 
        <div>
        <h4> Search Results here</h4>




        <div   className="table-responsive" >


<table
   className="table table-primary"
>
    <thead>
        <tr>
            <th scope="col">Address</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        {
            filteredArray.map(
                (filteredhouse) =>{
                    return (
                        <SearchResultsRow key={filteredhouse._id} filteredHouse = {filteredhouse} />
                    )
                }
            )
        }
       
       
    </tbody>
</table>
</div>






    </div>

     );
}
 
export default SearchResults;