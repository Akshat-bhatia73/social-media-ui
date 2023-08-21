import "./Login.scss";
import Logo from "../../assets/Logo.svg";
import LogoDark from "../../assets/LogoDark.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <img src={LogoDark} fill="#222222" alt="Snapframe" />
        <h2>Log in to your account</h2>
        <form action="">
          <input type="text" placeholder="Enter your username" />
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </form>
        <p>
          Don't have an account?<Link to='/register'><button>Register Here</button></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
