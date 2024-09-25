import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  return (
    <div>
      <h1>Root Layout</h1>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
