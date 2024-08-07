import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AppRoutes />
        <App />
    </BrowserRouter>
);
