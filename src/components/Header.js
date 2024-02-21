import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    let loginHandler = () => {
        navigate('/login');
    }

    let logoutHandler = () => {

        sessionStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }


    return ( 
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3"><Link to='/'><img src="/imgs/logo.png" alt="Willow Logo" className="w-25"/></Link></div>
            <div className="col-sm-5"><h2>Your real estate destination forever</h2></div>
            <div className="col-sm-4 d-flex justify-content-end">

                { sessionStorage.getItem("name") ? <button onClick={logoutHandler} className="btn btn-danger">Logout</button> : <><button onClick={loginHandler} className="btn btn-primary mx-3">Login</button> 
                <button onClick={signupHandler} className="btn btn-success">Signup</button>
                </>}
                
                
                
            </div>
        </div>
     );
}
 
export default Header;


