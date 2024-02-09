import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    let [invalidCredentials, setInvalidCredentials] = useState(false);



    let echangeHandler = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }
    let pchangeHandler = (e) => {
        setPassword(e.target.value);
        // console.log(password);
    }


    let clickHandler = async (e) => {
        e.preventDefault();
        // console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware
        // if fine, then navigate to home page

        try {
            let response = await axios.post('http://localhost:4200/login', { email: email, password: password });
            console.log(response);
            if (response.data.length > 0) {
                console.log("Login Successful");
                sessionStorage.setItem("name", response.data[0].name);
                sessionStorage.setItem("email", response.data[0].email);
                sessionStorage.setItem("role", response.data[0].role);


                // check the role and take the user to appropriate page
                // if realtor , enquiries, if not then home page
                (response.data[0].role == "realtor") ? navigate('/enquiries') : navigate('/');

            }
            else {
                console.log("Invalid email or password");
                setInvalidCredentials(true);


            }

        }
        catch (error) {
            console.log(error);
        }





    }




    return (
        <div className="d-flex justify-content-center">
            <form>
                <div className="mb-3">
                    {invalidCredentials && <h5 className="text-danger">Invalid Email or Password</h5>}

                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder="" onChange={echangeHandler}
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
                        placeholder="" onChange={pchangeHandler}
                    />
                </div>


                <button type="submit" onClick={clickHandler} className="btn btn-primary" >     Submit </button>


            </form>
        </div>




    );
}

export default Login;