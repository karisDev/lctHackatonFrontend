import React from "react";
import cl from "./IconInput.module.scss";

export const IconInput = ({ icon, ...props }) => {
  return (
    <div className={cl.container}>
      <span className={cl.icon}>{icon}</span>
      <input {...props} />
    </div>
  );
};
