import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Housing from "./components/Housing";
import About from "./components/About";
import NotFound from "./components/404";

import "./styles/index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Header />
		<Router>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path="/housing" element={<Housing />}/>
				<Route path="/about" element={<About />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</Router>
		<Footer />
	</React.StrictMode>
);