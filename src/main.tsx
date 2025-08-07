import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { ClassCartProvider } from "./context/ClassCartContext"; // make sure the path is correct

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClassCartProvider>
      <Toaster position="top-center" />
      <App />
    </ClassCartProvider>
  </React.StrictMode>
);
