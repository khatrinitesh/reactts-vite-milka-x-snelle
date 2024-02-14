/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Paths } from "./path";
import { LandscapeScreen, OpacityAnimation } from "../styles/sharedStyle";
import { browserName, osName, isMobile } from "react-device-detect";
import { lazy, Suspense, useEffect } from "react";
import { useAddHitLogMutation } from "../logic/reactQuery/mutation/useAddHitLogMutation";
import HowToParticipateSection from "../pages/howToParticipateSection/HowToParticipateSection";
import TOSSection from "../pages/tosSection/TOSSection";
import PrivacyPolicySection from "../pages/privacyPolicySection/PrivacyPolicySection";
import ContactUsSection from "../pages/contactUsSection/ContactUsSection";
// import { setLoggedIn, setUid } from "../logic/redux/action/action";
// import { useDispatch } from "react-redux";
import { RouteDefinition } from "../interface";
import LandscapeScreenMessage from "../components/landscapeScreenMessage/LandscapeScreenMessage";
import LandingPage from "../pages/landingPage/LandingPage";
import CookiePolicySection from "../pages/cookiePolicySection/CookiePolicySection";
const HomePageSection = lazy(
  () => import("../pages/homePageSection/HomePageSection")
);
const NotFoundSection = lazy(
  () => import("../pages/notFoundSection/NotFoundSection")
);

const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFoundSection,
  protected: false,
  title: "NotFound Section",
};

const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    element: HomePageSection,
    protected: false,
    title: "Home Section",
  },
  {
    path: Paths.howToParticipate,
    element: HowToParticipateSection,
    protected: false,
    title: "How To Participate Section",
  },
  {
    path: Paths.tos,
    element: TOSSection,
    protected: false,
    title: "TOS Section",
  },
  {
    path: Paths.privacyPolicy,
    element: PrivacyPolicySection,
    protected: false,
    title: "PrivacyPolicy Section",
  },
  {
    path: Paths.contactUs,
    element: ContactUsSection,
    protected: false,
    title: "ContactUs Section",
  },

  {
    path: Paths.promo,
    element: LandingPage,
    protected: true,
    title: "Landing Page Section",
  },
  {
    path: Paths.cookies,
    element: CookiePolicySection,
    protected: true,
    title: "Cookie Policy Section",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  // const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { mutateAsync } = useAddHitLogMutation();

  const handleHitLog = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const paramsData = {
      apikey: apiKey,
      device: isMobile ? "Mobile" : "Desktop",
      os: osName,
      browser: browserName,
    };

    await mutateAsync(paramsData);
  };

  useEffect(() => {
    handleHitLog();
  }, []);

  // useEffect(() => {
  //   const uid = localStorage.getItem("uid");
  //   if (uid) {
  //     dispatch(setLoggedIn(true));
  //     dispatch(setUid(uid));
  //   }
  // }, []);

  function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;
    if (!isLoggedIn && !route.protected) {
      return { element: <RouteComponent /> };
    } else if (!isLoggedIn && route.protected) {
      return {
        element: (
          <Navigate
            to={pathname === "/dashboard" ? Paths.adminLogin : Paths.home}
          />
        ),
      };
    } else if (isLoggedIn === route.protected) {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn && route.path === "*") {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn) {
      return { element: <RouteComponent /> };
    }
  }

  return (
    <>
      <LandscapeScreen>
        <LandscapeScreenMessage />
      </LandscapeScreen>
      <OpacityAnimation>
        <Layout>
          <Routes>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={
                  <Suspense fallback={<div></div>}>
                    {
                      getRouteRenderWithAuth(
                        pathname === "/dashboard" ? true : true,
                        route
                      )?.element
                    }
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </Layout>
      </OpacityAnimation>
    </>
  );
};
export default RoutePath;
