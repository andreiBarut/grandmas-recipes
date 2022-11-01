import React, { useEffect } from "react";
import axios from "axios";
// import Carusel from "../components/caruselComponent/caruselComponent";
import { getRecipes } from "../services/api";

const Home = () => {
	const [searchParam, setSearchParam] = React.useState("");

	const instance = axios.create({
		baseURL: "http://localhost:5000/",
		headers: { Accept: "application/json" },
	});

	async function getRecipes() {
		try {
			const res = await instance.get(searchParam);
			return res.data;
		} catch (error) {
			throw new Error(error);
		}
	}

	React.useEffect(() => {
		getRecipes()
			.then((res) => {
				const values = Object.values(res);
				for (let i in values) {
					console.log(values[i]);
				}
			})
			.catch((err) => console.log(err));
	});
	// useEffect(() => {
	// 	setSearchParam((prevParam) => prevParam);
	// }, [searchParam]);

	// const handleChange = (event) => {
	// 	setSearchParam(event.target.value);
	// 	console.log("value is", event.target.value);
	// };

	// const getSoup = () => "soup";

	// useEffect(() => {
	// 	getRecipes()
	// 		.then((res) => {
	// 			console.log("ok");
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<div>
			<h1>Home Page</h1>
			<h2 onClick={() => setSearchParam("supeCiorbe")}>Soups</h2>
			<h2 onClick={() => setSearchParam("felPrincipal")}>Main Course</h2>
			<h2 onClick={() => setSearchParam("sosuri")}>Gravy</h2>
			<h2 onClick={() => setSearchParam("deserturi")}>Desserts</h2>
			<h3>ok</h3>
		</div>
	);
};

export default Home;
