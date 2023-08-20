import "./Register.scss";
import Logo from "../../assets/Logo.svg";
import LogoDark from "../../assets/LogoDark.svg";

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
          Already have an account? <span>Login Here</span>
        </p>
      </div>
    </div>
  );
}

export default Register