import {
  faEnvelope,
  faKey,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconInput } from "../ui/inputs/IconInput/IconInput";
import AccentButton from "../ui/buttons/AccentButton/AccentButton";
import cl from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import StandartInput from "../ui/inputs/StandartInput/StandartInput";
import { validateRegistration } from "../../validation/validation";
import { useState } from "react";

const SignUp = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    };

    const validationResult = validateRegistration(data);
    if (validateRegistration.valid) {
      console.log("Success");
    } else {
      setErrors(validationResult.errors);
    }
  };

  return (
    <form className={cl.container} onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <div className={cl.group}>
        <div className={cl.heading}>
          <p>Почта</p>
          <span className={cl.error}>{errors.email}</span>
        </div>
        <IconInput
          error={errors.email}
          resolveError={() => setErrors({ ...errors, email: "" })}
          name="email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          placeholder="example@example.com"
          type="email"
        />
      </div>
      <div className={cl.group}>
        <div className={cl.heading}>
          <p>Пароль</p>
          <span className={cl.error}>{errors.password}</span>
        </div>
        <IconInput
          error={errors.password}
          resolveError={() => setErrors({ ...errors, password: "" })}
          name="password"
          icon={<FontAwesomeIcon icon={faKey} />}
          placeholder="********"
          type="password"
        />
      </div>
      <div className={cl.group}>
        <div className={cl.heading}>
          <p>Повторите пароль</p>
          <span className={cl.error}>{errors.confirmPassword}</span>
        </div>
        <IconInput
          error={errors.confirmPassword}
          resolveError={() => setErrors({ ...errors, confirmPassword: "" })}
          name="confirmPassword"
          icon={<FontAwesomeIcon icon={faRotateRight} />}
          placeholder="********"
          type="password"
        />
      </div>
      <div className={cl.row}>
        <div className={cl.group}>
          <div className={cl.heading}>
            <p>Имя</p>
            <span className={cl.error}>{errors.firstName}</span>
          </div>
          <StandartInput
            error={errors.firstName}
            resolveError={() => setErrors({ ...errors, firstName: "" })}
            name="firstName"
            placeholder="Иван"
            type="text"
          />
        </div>
        <div className={cl.group}>
          <div className={cl.heading}>
            <p>Фамилия</p>
            <span className={cl.error}>{errors.lastName}</span>
          </div>
          <StandartInput
            error={errors.lastName}
            resolveError={() => setErrors({ ...errors, lastName: "" })}
            name="lastName"
            placeholder="Иванов"
            type="text"
          />
        </div>
      </div>
      <AccentButton type="submit">Зарегистрироваться</AccentButton>
      <div className={cl.no_account}>
        <p>Уже есть аккаунт?</p>
        <Link to="/signin">Войти</Link>
      </div>
    </form>
  );
};

export default SignUp;
