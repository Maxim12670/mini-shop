import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "leaflet/dist/leaflet.css";
import "./index.scss";
import { router } from "./app/router/router.tsx";
import { store } from "./app/store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
