import React from "react";
import { getRecipes } from "../services/api";

const Search = () => {
	React.useEffect(() => {
		getRecipes()
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<h1>search</h1>
		</div>
	);
};

export default Search;
