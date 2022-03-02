import React from "react";
import "./styles.css";
import 'bootstrap/js/src/collapse.js';
import { ReactComponent as MenuHamburguer } from "../../assets/images/menu.svg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light main-nav">
			<div className="container-fluid navbar-container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#items-menu-container"
					aria-controls="items-menu-container"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<MenuHamburguer />
				</button>

				<div className="collapse navbar-collapse items-menu" id="items-menu-container">
					<a href="/" className="active">Works</a>
					<a href="/">Blog</a>
					<a href="/">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
