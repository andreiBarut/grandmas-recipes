import axios from "axios";
import { searchParam } from "../pages/home";
const instance = axios.create({
	baseURL: "http://localhost:5000/",
	headers: { Accept: "application/json" },
});

async function getRecipes() {
	try {
		const res = await instance.get("deserturi");
		return res.data;
	} catch (error) {
		throw new Error(error);
	}
}

export { getRecipes };
