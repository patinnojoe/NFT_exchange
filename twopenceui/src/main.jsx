import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);
