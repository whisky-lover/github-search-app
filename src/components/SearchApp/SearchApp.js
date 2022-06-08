import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBox from "../SearchBox/SearchBox";
import SearchBoard from "../SearchBoard/SearchBoard";

const SearchApp = () => {
	return (
		<div className="dark:text-veryLightBlue text-darkBlue px-8 py-5 lg:px-16 lg:py-10">
			<AppHeader></AppHeader>
			<SearchBox></SearchBox>
			<SearchBoard></SearchBoard>
		</div>
	);
};

export default SearchApp;
