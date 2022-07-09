import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "App";
import { NotFound } from "pages/not-found/NotFound";
import { NotSupportedScreen } from "pages/not-supported-screen/NotSupportedScreen";

const isSupportedScreen = () => {
  const width = window.innerWidth;
  return width >= 1024;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {isSupportedScreen() ? (
          <>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <Route path="*" element={<NotSupportedScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
