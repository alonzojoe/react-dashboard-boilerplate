import { createSlice } from "@reduxjs/toolkit";
import { getStorageItem, setStorageItem } from "@/lib/utils";

const storedLayout = getStorageItem("layout");

const initialState = {
  layout: storedLayout ? storedLayout : "layout-menu",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLayout(state, action) {
      const htmlEl = document.querySelector("html");

      if (action.payload === "layout-menu") {
        htmlEl.classList.remove("layout-menu");
        htmlEl.classList.add("layout-menu-collapsed");
      } else {
        htmlEl.classList.remove("layout-menulayout-menu-collapsed");
        htmlEl.classList.add("layout-menu");
      }
      setStorageItem("layout", action.payload);
      state.layout = action.payload;
    },
  },
});

export default uiSlice.reducer;
