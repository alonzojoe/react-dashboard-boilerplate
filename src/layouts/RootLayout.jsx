import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/components/Navbar";
import Sidebar from "@/layouts/components/Sidebar";

const RootLayout = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="flex-grow-1 container-p-y container-fluid my-0">
              <Outlet />
            </div>
            {/* Footer 
         Footer */}
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
      <div className="drag-target"></div>
    </div>
  );
};

export default RootLayout;
