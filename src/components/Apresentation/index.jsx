import React from "react";
import "./styles.css";
import Perfil from "../../assets/images/perfil.png";

const Apresentation = () => {
	return (
		<>
			<div className="perfil-container">
				<img src={Perfil} alt="Foto perfil" />
				<div className="perfil-content-container">
					<h1>Hi, I am John, Creative Technologist</h1>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<a href="/">Download Resume</a>
				</div>
			</div>
		</>
	);
};

export default Apresentation;
