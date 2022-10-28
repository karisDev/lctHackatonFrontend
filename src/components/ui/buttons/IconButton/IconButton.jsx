import cl from "./IconButton.module.scss";

const IconButton = ({ icon, disabled, tooltip, ...props }) => {
  return (
    <button
      data-tooltip={tooltip}
      className={[cl.button, disabled ? cl.disabled : ""].join(" ")}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
