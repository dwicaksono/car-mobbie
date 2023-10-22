export const exploreHandler = (idParams: string) => {
	const nextSection = document.getElementById(idParams);

	if (nextSection) {
		nextSection.scrollIntoView({ behavior: "smooth" });
	}
};
