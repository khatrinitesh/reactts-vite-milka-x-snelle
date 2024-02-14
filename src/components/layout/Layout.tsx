import { useLocation } from "react-router-dom";
import { I_LayoutProps } from "../../interface";
import LandingNavbar from "../../pages/landingPage/components/landingNavbar/LandingNavbar";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: I_LayoutProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/laat-snelle-zingen" ? <LandingNavbar /> : <Navbar />}
      {children}
    </>
  );
};

export default Layout;
