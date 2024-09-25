import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/components/Navbar";
import Sidebar from "@/layouts/components/Sidebar";

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
