import React, { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBox from "../SearchBox/SearchBox";
import SearchBoard from "../SearchBoard/SearchBoard";

const SearchApp = () => {
	const [user, setUser] = useState("");
	const onSubmit = (userInfo) => {
		setUser(userInfo);
	};
	return (
		<div className="px-8 py-5 dark:text-veryLightBlue text-darkBlue lg:px-16 lg:py-10">
			<AppHeader></AppHeader>
			<SearchBox onSubmit={onSubmit}></SearchBox>
			<SearchBoard
				name={user.name || user.login}
				username={user.login}
				avatar={user.avatar_url}
				time={user.created_at}
				bio={user.bio}
				repo={user.public_repos}
				followers={user.followers}
				following={user.following}
			></SearchBoard>
		</div>
	);
};

export default SearchApp;
