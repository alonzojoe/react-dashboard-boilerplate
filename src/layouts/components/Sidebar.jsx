import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setLayout, setNavbarTitle } from "@/store/slices/ui-slice";
import Logo from "@/assets/images/react-logo.png";

const routes = [
  {
    id: 1,
    path: "/",
    title: "Dashboard",
    icon: "ti-dashboard",
  },
  {
    id: 2,
    path: "/sample",
    title: "Sample Page 1",
    icon: "ti-file",
  },
  {
    id: 3,
    path: "/sample-two",
    title: "Sample Page 2",
    icon: "ti-file",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );

    if (currentRoute) {
      document.title = currentRoute.title;
      dispatch(setNavbarTitle(currentRoute.title));
    }
  }, [location.pathname]);

  const htmlEl = document.querySelector("html");

  const { layout } = useSelector((state) => state.ui);

  const closeExpanded = () => {
    htmlEl.classList.remove("layout-menu-expanded");
  };

  const hoverSidebar = (type) => {
    if (type === "in") {
      htmlEl.classList.add("layout-menu-hover");
    } else {
      htmlEl.classList.remove("layout-menu-hover");
    }
  };

  const toggleLayout = () => {
    const reverseLayout =
      layout === "layout-menu-collapsed"
        ? "layout-menu"
        : "layout-menu-collapsed";

    dispatch(setLayout(reverseLayout));
  };

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
      onMouseOver={() => hoverSidebar("in")}
      onMouseOut={() => hoverSidebar("out")}
    >
      <div className="app-brand demo py-3 d-flex align-items-center">
        <a className="app-brand-link" onClick={(e) => e.preventDefault()}>
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
        <a className="layout-menu-toggle menu-link text-large ms-auto mb-2">
          <div className="demo-vertical-spacing btn-switch">
            <div className="has-error">
              <label className="switch">
                <input
                  type="checkbox"
                  className="switch-input switch-input"
                  true-value="true"
                  false-value="false"
                  checked={layout === "layout-menu"}
                  onChange={toggleLayout}
                />
                <span className="switch-toggle-slider">
                  <span className="switch-on"></span>
                  <span className="switch-off"></span>
                </span>
                <span className="switch-label"></span>
              </label>
            </div>
          </div>
          <i
            className="ti ti-x d-block d-xl-none ti-sm align-middle btn-x"
            onClick={closeExpanded}
          ></i>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1">
        <li className="menu-header small text-uppercase" onClick={toggleLayout}>
          <span className="menu-header-text">Home</span>
        </li>
        {routes.map((route) => {
          const activeLink = location.pathname === route.path;
          return (
            <li
              className={`menu-item ${activeLink ? "active" : ""}`}
              key={route.id}
            >
              <Link to={route.path} className="menu-link">
                <i className={`menu-icon tf-icons ti ${route.icon}`}></i>
                <div>{route.title}</div>
              </Link>
            </li>
          );
        })}
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
