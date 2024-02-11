import { Outlet } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";

export default function RootLayout() {
  return (
    <>
      <TopNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
