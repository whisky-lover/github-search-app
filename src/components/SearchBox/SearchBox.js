import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBox = ({ onSubmit }) => {
	const [username, setUsername] = useState("");
	const [query, setQuery] = useState("");

	const handleInputChange = (e) => {
		setUsername(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setQuery(username);
		// console.log(query);
	};

	const fetchData = async () => {
		if (!username) return;
		const response = await axios.get(
			`https://api.github.com/users/${username}`
		);

		onSubmit(response.data);
	};

	useEffect(() => {
		fetchData();
	}, [query]);

	return (
		<div className="my-6">
			<form className="relative" onSubmit={handleFormSubmit}>
				<input
					type="text"
					onChange={handleInputChange}
					placeholder="Search Github username"
					className="w-full px-4 py-4 bg-transparent border rounded-lg dark:border dark:border-veryLightBlue border-darkBlue dark:placeholder:text-veryLightBlue focus:outline-blue focus:shadow-md"
				/>
				<button
					type="submit"
					className="cursor-pointer absolute right-[10px] px-4 py-2 translate-y-[-50%] rounded-lg outline-none top-1/2 trans text-veryLightBlue bg-blue"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBox;
