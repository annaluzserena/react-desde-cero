import { createRoot } from "react-dom/client";
import Catalogo from "./components/Catalogo";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(<Catalogo />);
