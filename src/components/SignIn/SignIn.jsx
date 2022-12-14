import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconInput } from "../ui/inputs/IconInput/IconInput";
import AccentButton from "../ui/buttons/AccentButton/AccentButton";
import cl from "./SignIn.module.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <form className={cl.container} onSubmit={handleSubmit}>
      <h2>Вход в систему</h2>
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
