import { createRoot } from "react-dom/client";
import App from "./App";
import H1 from "./H1";
const name = "Gopal";
createRoot(document.getElementById("root")).render(
	<>
		<H1 title="web dev" />
		<H1 title="app dev" />
		<H1 title="louda dev"/>
		<App />
	</>,
);
