import { Suspense, lazy, useEffect } from "react";
import { useAppSelector } from "../../logic/redux/store/hooks";
const CreateSongSteps = lazy(
  () => import("../createSongSteps/CreateSongSteps")
);
const RegisterSection = lazy(
  () => import("../registerSection/RegisterSection")
);
const HomePageSection = () => {
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isUid = useAppSelector((state) => state.userReducer.isUid);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoggedIn && isUid ? (
        <Suspense fallback={<div></div>}>
          <CreateSongSteps />
        </Suspense>
      ) : (
        <Suspense fallback={<div></div>}>
          <RegisterSection />
        </Suspense>
      )}
    </>
  );
};

export default HomePageSection;
