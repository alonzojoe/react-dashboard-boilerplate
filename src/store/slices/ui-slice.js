import { createSlice } from "@reduxjs/toolkit";
import { getStorageItem, setStorageItem, getDeviceTheme } from "@/lib/utils";

const storedLayout = getStorageItem("layout");
const storedTheme = getStorageItem("appTheme");
const deviceTheme = getDeviceTheme();

const initialState = {
  layout: storedLayout ? storedLayout : "layout-menu",
  appTheme: storedTheme ? storedTheme : deviceTheme,
  navbarTitle: "Dashboard",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLayout(state, action) {
      const htmlEl = document.querySelector("html");

      if (action.payload === "layout-menu") {
        htmlEl.classList.remove("layout-menu-collapsed");
        htmlEl.classList.add("layout-menu");
      } else {
        htmlEl.classList.remove("layout-menu");
        htmlEl.classList.add("layout-menu-collapsed");
      }
      setStorageItem("layout", action.payload);
      state.layout = action.payload;
    },
    setNavbarTitle(state, action) {
      state.navbarTitle = action.payload;
      document.title = `App Name | ${action.payload}`;
    },
    changeTheme(state, action) {
      state.appTheme = action.payload;
      setStorageItem("appTheme", action.payload);

      const head = document.head;
      let link = document.getElementById("dark-theme");

      if (action.payload === "dark") {
        if (!link) {
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.id = "dark-theme";
          link.href = "/style/core-dark.css";
          head.appendChild(link);
        }
      } else {
        if (link) {
          head.removeChild(link);
        }
      }
    },
  },
});

export const { setLayout, setNavbarTitle, changeTheme } = uiSlice.actions;
export default uiSlice.reducer;
