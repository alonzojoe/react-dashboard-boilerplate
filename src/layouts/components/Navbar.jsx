import { useSelector } from "react-redux";
import Profile from "@/assets/images/default-profile.jpeg";

const Navbar = () => {
  const { navbarTitle } = useSelector((state) => state.ui);

  const expandLayout = () => {
    const htmlEl = document.querySelector("html");
    htmlEl.classList.add("layout-menu-expanded");
  };

  return (
    <nav
      className="m-0 rounded-0 w-auto layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme container-fluid"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" onClick={expandLayout}>
          <i className="ti ti-menu-2 ti-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item navbar-search-wrapper mb-2">
            <h4 className="mt-4 fw-bold">{navbarTitle}</h4>
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
            <a
              className="nav-link hide-arrow"
              onClick={(e) => e.preventDefault()}
            >
              <i className="ti rounded-circle ti-md"></i>
            </a>
          </li>

          <li
            className="nav-item dropdown-language dropdown me-2 me-xl-0"
            id="user-name"
          >
            <a
              className="nav-link hide-arrow"
              onClick={(e) => e.preventDefault()}
            >
              <h5 className="mt-3 fw-semibold">Joenell Alonzo</h5>
            </a>
          </li>

          <li className="nav-item navbar-dropdown dropdown-user">
            <a
              className="nav-link hide-arrow p-0"
              onClick={(e) => e.preventDefault()}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar avatar-online">
                <img
                  src={Profile}
                  alt="user-avatar"
                  className="h-auto rounded-circle"
                />
              </div>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              data-bs-popper="static"
            >
              <li>
                <a
                  className="dropdown-item mt-0 waves-effect"
                  href="pages-account-settings-account.html"
                >
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar avatar-online">
                        <img
                          src={Profile}
                          alt="profile"
                          className="rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Joenell Alonzo</h6>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider my-1 mx-n2"></div>
              </li>
              <li>
                <a
                  className="dropdown-item waves-effect"
                  href="pages-profile-user.html"
                >
                  <i className="ti ti-user me-3 ti-md"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item waves-effect"
                  href="pages-account-settings-account.html"
                >
                  <i className="ti ti-settings me-3 ti-md"></i>
                  <span className="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider my-1 mx-n2"></div>
              </li>
              <li>
                <div className="d-grid px-2 pt-2 pb-1">
                  <a
                    className="btn btn-sm btn-danger d-flex waves-effect waves-light"
                    href="auth-login-cover.html"
                    target="_blank"
                  >
                    <small className="align-middle">Logout</small>
                    <i className="ti ti-logout ms-2 ti-14px"></i>
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
