import React from "react";

const Footer = () => {
	return (
		<footer
			class="my-2 container"
			style={{
				position: "fixed",
				bottom: 0,
			}}>
			<div className="footer-container">
				Built with ❤ by The Longest Johns{" "}
				<a href="https://github.com/asher-schulman">Asher Schulman</a> and{" "}
				<a href="https://github.com/jcbronne">Jared Bronnenberg</a> | &copy;
				{new Date().getFullYear()}
			</div>
		</footer>
	);
};

export default Footer;
