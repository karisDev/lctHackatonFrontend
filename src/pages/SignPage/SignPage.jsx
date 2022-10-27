import { IconInput } from "../../components/inputs/IconInput/IconInput";
import cl from "./SignPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export const SignPage = ({ isSignup }) => {
  return (
    <div className={cl.container}>
      <header>
        <h1>Тут лого</h1>
      </header>
      <main>{isSignup ? <SignUp /> : <SignIn />}</main>
    </div>
  );
};
