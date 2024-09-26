import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/index.js";

//icons
import "@/assets/fonts/fontawesome.css";
import "@/assets/fonts/tabler-icons.css";
import "@/assets/fonts/flag-icons.css";

//core css
import "@/assets/css/rtl/core.css";
import "@/assets/css/rtl/theme-default.css";
import "@/assets/css/demo.css";
import "@/assets/fonts/flag-icons.css";
import "@/assets/css/rtl/theme-semi-dark.css";

//pages
import "@/assets/css/pages/cards-advance.css";
import "@/assets/css/rtl/custom-style.css";
import "@/assets/js/app.js";

//custom-css
import "@/assets/css/custom/custom.css";

//spinner
import "@/assets/libs/spinkit/spinkit.css";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
