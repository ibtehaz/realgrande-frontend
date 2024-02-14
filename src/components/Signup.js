import { useState } from "react";
import axios from 'axios';


const SignUp = () => {


    let [formObj, setFormObj] = useState({name:"",email:"",password:"",phone:""});
    let [signedUp, setSignedUp] = useState(false);
    let [error, setError] = useState('');

    let changeHandler = (e) => {
        // console.log(formObj);
        setFormObj({...formObj,[e.target.name]:e.target.value});
        
    }


    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formObj);
        
            
        //console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware   
        
        // submit the form to the backend
        try {

            // let config = {
            //     headers: {
            //         "Content-Type": "multipart/form-data"
            //     }
            // }

            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/signup', formObj);

            console.log(response);

            if(response.data) {
                setSignedUp(true);
                console.log("User Created Successfully");
            } else {
                setError('Error while signing up');
            }

            // let response = await axios.post('http://localhost:4200/signup', formObj);
            // console.log(response);
            // alert("User Created Successfully");

        } catch (error) {
            console.log(error);
            setError('Error while signing up');
        }



       
        

    }


    return (
        <>
        {signedUp ? <h1>Congrats, you signed up! Please login!</h1> : 

        <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="" onChange={changeHandler}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Phone Number</label>
            <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                aria-describedby="helpId"
                placeholder="" onChange={changeHandler}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="helpId"
                placeholder="" onChange={changeHandler}
            />
        </div>


        <div className="mb-3">
            <label htmlFor="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="helpId"
                placeholder="" onChange={changeHandler}
            />
        </div>


        <button  type="submit"  className="btn btn-primary" >     SignUp </button>


        </form>
    </div>
    }

        




        </>
     );
}
 
export default SignUp;
