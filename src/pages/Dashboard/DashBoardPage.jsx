import cl from "./DashBoardPage.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SideNavbar from "../../components/Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../../components/Navbars/TopNavbar/TopNavbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashBoardPage = () => {
  const [isSideNavHidden, setIsSideNavHidden] = useState(
    window.innerWidth < 768
  );

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSideNavHidden(true);
    } else {
      setIsSideNavHidden(false);
    }
  };

  return (
    <div
      className={[cl.container, isSideNavHidden ? cl.sidenav_hidden : ""].join(
        " "
      )}
    >
      <SideNavbar hidden={isSideNavHidden} />
      {/* div that holds top nav and main content */}
      <div className={cl.mobile_mask} onClick={() => setIsSideNavHidden(true)}>
        <FontAwesomeIcon className={cl.close_mask} icon={faXmark} />
      </div>
      <div className={cl.content}>
        <div className={cl.top_nav}>
          <TopNavbar
            toggleSideBar={() => setIsSideNavHidden(!isSideNavHidden)}
          />
        </div>
        <main className={cl.main_content}>
          <p>Main content</p>
          <p>Main content</p>
          <p>Main content</p>
          <p>Main content</p>
        </main>
      </div>
    </div>
  );
};

export default DashBoardPage;
