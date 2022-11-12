import LoginComponent from "../components/loginComponent/LoginComponent";
import PlayComponent from "../components/playComponent/playComponent";

function Login() {
  return (
    <div className="Login d-flex">
      <LoginComponent />
      <PlayComponent />
    </div>
  );
}

export default Login;
