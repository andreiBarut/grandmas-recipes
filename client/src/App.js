import React from "react";
import "./App.scss";
import Home from "./pages/home";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/search";
// import About from "./pages/about";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="search" element={<Search />} />
					{/* <Route path="about" element={<About />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
