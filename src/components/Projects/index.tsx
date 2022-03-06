import React from "react";
import ProjectImage from "../../assets/images/project1.png";
import "./styles.css";

const Projects = () => {
	return (
		<div className="section-projects">
			<div className="title-section">
				<h4 id="">Projetos</h4>
			</div>
			<div className="projects-container">
				<div className="project-container">
					<div className="project-image">
						<img src={ProjectImage} alt="Imagem do projeto 1" />
					</div>
					<div className="project-content">
						<h6>Designing Dashboards</h6>
						<div className="project-content-tags">
							<h6 id="tag-year">2022</h6>
							<h6 id="tag-category">Dashboard</h6>
						</div>
						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
			</div>
			<div className="projects-container">
				<div className="project-container">
					<div className="project-image">
						<img src={ProjectImage} alt="Imagem do projeto 1" />
					</div>
					<div className="project-content">
						<h6>Designing Dashboards</h6>
						<div className="project-content-tags">
							<h6 id="tag-year">2022</h6>
							<h6 id="tag-category">Dashboard</h6>
						</div>
						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
			</div>
			<div className="projects-container">
				<div className="project-container">
					<div className="project-image">
						<img src={ProjectImage} alt="Imagem do projeto 1" />
					</div>
					<div className="project-content">
						<h6>Designing Dashboards</h6>
						<div className="project-content-tags">
							<h6 id="tag-year">2022</h6>
							<h6 id="tag-category">Dashboard</h6>
						</div>
						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
