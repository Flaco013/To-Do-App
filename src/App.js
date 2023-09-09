import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <SignUp></SignUp>
      <ForgotPassword></ForgotPassword>
      <ResetPassword></ResetPassword>
    </div>
  );
}

export default App;
