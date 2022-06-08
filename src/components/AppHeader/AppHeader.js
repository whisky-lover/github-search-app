import React, { useState, useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const AppHeader = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		() => localStorage.getItem("theme") === "dark"
	);

	useEffect(() => {
		isDarkMode && document.querySelector("html").classList.add("dark");
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(() => !isDarkMode);
		document.querySelector("html").classList.toggle("dark");
		localStorage.setItem("theme", isDarkMode ? "light" : "dark");
	};
	return (
		<div className="flex justify-between items-center">
			<p>
				<a href="#">DevFinder</a>
			</p>

			<div
				className="flex items-center space-x-3"
				onClick={toggleDarkMode}
			>
				<p>{isDarkMode ? "Light" : "Dark"}</p>
				{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
			</div>
		</div>
	);
};

export default AppHeader;
