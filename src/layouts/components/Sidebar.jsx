import Logo from "@/assets/images/react-logo.png";

const Sidebar = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="app-brand demo py-1 d-flex align-items-center">
        <a className="app-brand-link">
          <span className="app-brand-logo demo">
            <img
              src={Logo}
              className="img-fluid"
              height="60"
              width="60"
              alt="app-logo"
            />
          </span>
          <span className="app-brand-text demo menu-text fw-bold">
            App Name
          </span>
        </a>
        <a
          onClick={(e) => e.preventDefault()}
          className="layout-menu-toggle menu-link text-large ms-auto mb-2"
        >
          <div className="demo-vertical-spacing btn-switch">
            <div className="has-error">
              <label className="switch">
                <input
                  type="checkbox"
                  className="switch-input switch-input"
                  true-value="true"
                  false-value="false"
                />
                <span className="switch-toggle-slider">
                  <span className="switch-on"></span>
                  <span className="switch-off"></span>
                </span>
                <span className="switch-label"></span>
              </label>
            </div>
          </div>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle btn-x"></i>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1">
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Home</span>
        </li>
        <li className="menu-item active">
          <a onClick={(e) => e.preventDefault()} className="menu-link">
            <i className="menu-icon tf-icons ti ti-dashboard"></i>
            <div>Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a onClick={(e) => e.preventDefault()} className="menu-link">
            <i className="menu-icon tf-icons ti ti-home"></i>
            <div>Home</div>
          </a>
        </li>
        <li className="menu-item">
          <a onClick={(e) => e.preventDefault()} className="menu-link">
            <i className="menu-icon tf-icons ti ti-file"></i>
            <div>Sample Page</div>
          </a>
        </li>
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Auth</span>
        </li>
        <li className="menu-item">
          <a onClick={(e) => e.preventDefault()} className="menu-link">
            <i className="menu-icon tf-icons ti ti-logout"></i>
            <div data-i18n="logout">Logout</div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
