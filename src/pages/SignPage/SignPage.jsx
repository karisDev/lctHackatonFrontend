import { IconInput } from "../../components/inputs/IconInput";
import cl from "./SignPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignIn";

export const SignPage = ({ isSignup }) => {
  return (
    <div className={cl.container}>
      <main>{isSignup ? <SignUp /> : <SignIn />}</main>
    </div>
  );
};
