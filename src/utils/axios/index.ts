import axios from "axios";

export const fetch = axios.create({
	baseURL: "https://api.api-ninjas.com/v1",
	headers: {
		"X-API-Key": "e6wgsS/nMnujNDYzgBGqZA==9W77PntJCQNxsfC3",
	},
});
