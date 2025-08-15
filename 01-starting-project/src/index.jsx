import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import "./components/Header.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
