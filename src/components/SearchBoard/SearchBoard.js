import React from "react";

// name={user.name}
// username={user.login}
// avatar={user.avatar_url}
// time={user.created_at}
// bio={user.bio}
// repo={user.public_repos}
// followers={user.followers}
// following={user.following}
const SearchBoard = ({
	name,
	username,
	avatar,
	time,
	bio,
	repo,
	followers,
	following,
}) => {
	return (
		<div>
			<div className="flex items-center justify-center w-1/2 mx-auto overflow-hidden rounded-full shadow md:w-1/6">
				<img
					src={
						avatar ||
						"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
					}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="mt-5 mb-12">
				<div className="flex items-center justify-between mb-1">
					<h3 className="text-lg font-semibold">
						{name || "Quoc Bao"}
					</h3>
					<p className="font-thin">{time || "Join 25 Jan 2011"}</p>
				</div>

				<h6 className="text-lg italic">{username || "whisky-lover"}</h6>
				<p className="mt-2 text-sm">
					{bio || "This profile has no bio"}
				</p>
			</div>

			<div className="grid grid-cols-3 px-3 py-8 rounded-lg place-items-center dark:bg-blue bg-lightBlue text-veryLightBlue">
				<div>
					<h6 className="mb-1 font-semibold text-center">Repos</h6>
					<p className="text-center">{repo || 6}</p>
				</div>
				<div>
					<h6 className="mb-1 font-semibold text-center">
						Followers
					</h6>
					<p className="text-center">{followers || 6}</p>
				</div>
				<div>
					<h6 className="mb-1 font-semibold text-center">
						Following
					</h6>
					<p className="text-center">{following || 6}</p>
				</div>
			</div>
		</div>
	);
};

export default SearchBoard;
