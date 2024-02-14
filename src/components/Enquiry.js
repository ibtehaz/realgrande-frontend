import { useState } from "react";
import axios from 'axios';


const Enquiry = (props) => {


    let [enquiryObject,setEnquiryObject] = useState({email:"",name:"",mobilenum:"",remarks:""});
    let [submittedEnquiry, setSubmittedEnquiry] = useState(false);
    


    let onChangeHandler = (e) => {
        setEnquiryObject({...enquiryObject,[e.target.name]:e.target.value});
        // console.log(enquiryObject);
    }

    let clickHandler = async () => {
        // console.log("enquiryObject:", enquiryObject);

        try {
            enquiryObject = {...enquiryObject, address: props.address};

            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/addenquiry', enquiryObject);
           
                setSubmittedEnquiry(true);
                console.log("Enquiry Added Successfully");
           
        } catch (error) {
            console.log(error);
        }
    }


    return (
//         <>
//         { submittedEnquiry ? <h2>Enquiry Submitted Successfully</h2> :
  
//         <div>
//             <div className="mb-3">
//                 <label htmlFor="" className="form-label">Email</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     id=""
//                     aria-describedby="emailHelpId"
//                     placeholder="abc@mail.com"
//                     onChange={onChangeHandler}
//                 />
               
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="" className="form-label">Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     id=""
//                     aria-describedby="helpId"
//                     placeholder=""
//                     onChange={onChangeHandler}
//                 />
               
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="" className="form-label">Mobile</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="mobilenum"
//                     id=""
//                     aria-describedby="helpId"
//                     placeholder=""
//                     onChange={onChangeHandler}
//                 />
               
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="" className="form-label">Remarks</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="remarks"
//                     id=""
//                     aria-describedby="helpId"
//                     placeholder=""
//                     onChange={onChangeHandler}
//                 />
               
//             </div>
           
//         <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={clickHandler}
//         >
//             Submit
//         </button>
       


           
           
           
//         </div>
// }
//         </>

(submittedEnquiry) 
        ?
        <div  className="mt-3">
                <h5> Thanks for submitting! Our realtor will get in touch with you soon!</h5>
        </div>
        :
        <div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    name="mobilenum"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Remarks</label>
                <input
                    type="text"
                    className="form-control"
                    name="remarks"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            
        <button
            type="submit" onClick={clickHandler}
            className="btn btn-primary"
        >
            Submit
        </button>
        

            
            
            
        </div>
     );
}
 
export default Enquiry;