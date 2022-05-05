import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./components/common/About";
import NotFound from "./components/common/404";

import App from "./components/feed/App";
import Housing from "./components/housing/HousingWrapper";

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
				<Route path="/housing/:id" element={<Housing />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);