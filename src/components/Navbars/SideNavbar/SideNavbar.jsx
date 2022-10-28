import { useEffect } from "react";
import { useState } from "react";
import cl from "./SideNavbar.module.scss";

const SideNavbar = ({ hidden }) => {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    setIsHidden(hidden);
  }, [hidden]);

  return (
    <nav className={[cl.container, hidden ? cl.hidden : ""].join(" ")}>
      <div className={cl.width_measurer}></div>
      <div className={cl.nav}>
        <p>Navbar</p>
      </div>
    </nav>
  );
};

export default SideNavbar;
