import React from "react";
import "./styles.css";
import { ReactComponent as FaceookIcon } from "../../assets/images/fb.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/insta.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-icons">
				<a href="/">
					<FaceookIcon />
				</a>
				<a href="/">
					<InstagramIcon />
				</a>
				<a href="/">
					<TwitterIcon />
				</a>
				<a href="/">
					<LinkedinIcon />
				</a>
			</div>
			<p>Copyright ©2020 All rights reserved </p>
		</div>
	);
};

export default Footer;
