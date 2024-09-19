import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="app_container">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
