import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconInput } from "../inputs/IconInput";
import AccentButton from "../buttons/AccentButton";
import cl from "./SignIn.module.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form className={cl.container}>
      <h2>Вход</h2>
      <div className={cl.group}>
        <p>Почта</p>
        <IconInput
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          placeholder="example@example.com"
        />
      </div>
      <div className={cl.group}>
        <p>Пароль</p>
        <IconInput
          icon={<FontAwesomeIcon icon={faKey} />}
          placeholder="********"
          type="password"
        />
      </div>
      <AccentButton>Войти в систему</AccentButton>
      {/* no account? */}
      <div className={cl.no_account}>
        <p>Нет аккаунта?</p>
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </form>
  );
};

export default SignIn;
