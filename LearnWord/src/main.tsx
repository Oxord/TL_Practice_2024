/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from "react-dom/client";
import {App} from "./App";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
