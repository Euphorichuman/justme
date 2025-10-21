import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "pages/not-found/NotFound";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
