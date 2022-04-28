import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

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
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Navigate replace to="/home" />}/>
				<Route path="/home" element={<App />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/housing" element={<Housing />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);