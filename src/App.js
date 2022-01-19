import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Nav
import Nav from "./Components/Nav";
// Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Index />} />
					<Route path="/transactions/new" element={<New />} />
					<Route path="/transactions/:index" element={<Show />} />
					<Route path="/transactions/:index/edit" element={<Edit />} />
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
