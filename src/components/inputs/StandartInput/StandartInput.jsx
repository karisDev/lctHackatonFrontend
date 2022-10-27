import React from "react";
import cl from "./StandartInput.module.scss";

const StandartInput = ({ error, resolveError, ...props }) => {
  return (
    <input
      onFocus={resolveError}
      className={`${cl.container} ${error ? cl.error : ""}`}
      {...props}
    />
  );
};

export default StandartInput;
