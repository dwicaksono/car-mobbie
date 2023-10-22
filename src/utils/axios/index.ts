import axios from "axios";

export const fetch = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"X-API-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
	},
});
