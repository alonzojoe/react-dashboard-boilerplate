import Profile from "@/assets/images/default-profile.jpeg";

const Navbar = () => {
  return (
    <nav
      className="m-0 rounded-0 w-auto layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme container-fluid"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="ti ti-menu-2 ti-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item navbar-search-wrapper mb-2">
            <h4 className="mt-4 fw-bold">Dashboard</h4>
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
            <a className="nav-link hide-arrow" href="javascript:void(0);">
              <i className="ti rounded-circle ti-md"></i>
            </a>
          </li>

          <li
            className="nav-item dropdown-language dropdown me-2 me-xl-0"
            id="user-name"
          >
            <a className="nav-link hide-arrow" href="javascript:void(0);">
              <h5 className="mt-3 fw-semibold">Joenell Alonzo</h5>
            </a>
          </li>

          <li className="nav-item navbar-dropdown dropdown-user">
            <a className="nav-link hide-arrow" href="javascript:void(0);">
              <div className="avatar avatar-online">
                <img
                  src={Profile}
                  alt="user-avatar"
                  className="h-auto rounded-circle"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
