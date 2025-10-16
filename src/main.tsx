import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { NotFound } from "pages/not-found/NotFound";
import { NotSupportedScreen } from "pages/not-supported-screen/NotSupportedScreen";

const isSupportedScreen = () => window.innerWidth >= 1024;

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

createRoot(rootEl).render(
  <StrictMode>
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
  </StrictMode>
);
