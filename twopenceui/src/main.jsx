import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import { StateContextProvider } from "./context/AuthContextProvider";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StateContextProvider>
            <RouterProvider router={router} />
        </StateContextProvider>
    </React.StrictMode>
);
