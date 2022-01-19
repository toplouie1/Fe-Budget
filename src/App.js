import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Nav
import Nav from "./Components/Nav";
// Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Index />} />
					<Route path="/transactions/new" element={<New />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
