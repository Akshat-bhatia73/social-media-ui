import "./Register.scss";
import Logo from "../../assets/Logo.svg";
import LogoDark from "../../assets/LogoDark.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <img src={LogoDark} fill="#222222" alt="Snapframe" />
        <h2>Create a new account</h2>
        <form action="">
          <input type="text" placeholder="Create your username" />
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Create password" />
          <input type="password" placeholder="Confirm password" />
          <button>Create Account</button>
        </form>
        <p>
          Already have an account? 
        <Link to='/login'><button>Login Here</button></Link>
        </p>
      </div>
    </div>
  );
}

export default Register