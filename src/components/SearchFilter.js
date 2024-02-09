import { useNavigate } from "react-router-dom"

const SearchFilter = (props) => {
    let navigate = useNavigate()

    //get distinct counties
    let arrWithDupeCounties = props.allHouses.map((house) => {
        return house.county
    })



    const uniqueCounties = Array.from(new Set(arrWithDupeCounties))

    const changeHandler = (e) => {

        //navigate to search results component
        // let navigate = useNavigate() //cant do this, 
        // hooks must be intialized top level not within handler
        
       let countyName = e.target.value
        navigate(`/searchresults/${countyName}`)
      
       
    }


   
 

    return (  
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-sm-5 text-center">
                <select onChange={changeHandler}>
                    <option value="select">Select</option>
                    {
                        uniqueCounties.map((county, id) => {
                            return <option key={id} value={county}>{county}</option>
                        })
                    }
                </select>
            </div>
         </div>
    );
}
 
export default SearchFilter;