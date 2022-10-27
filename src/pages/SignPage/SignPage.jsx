import cl from "./SignPage.module.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export const SignPage = ({ isSignup }) => {
  return (
    <div className={cl.container}>
      {/* <header>
        <h1>Тут лого</h1>
      </header> */}
      <main>{isSignup ? <SignUp /> : <SignIn />}</main>
    </div>
  );
};
