import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Housing from "./components/Housing";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Header />
		<Router>
			<Routes>
				<Route path="" element={<App />}/>
				<Route path="/about" element={<div>Test</div>}/>
				<Route path="/housing" element={<Housing />}/>
			</Routes>
		</Router>
		<Footer />
	</React.StrictMode>
);