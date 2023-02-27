import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
