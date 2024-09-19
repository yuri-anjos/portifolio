export default function ScrollToSection(route: string, hash: string, writeUrl?: boolean) {
	if (route && window.location.pathname !== route) {
		window.location.href = `${window.location.origin}${route}`;
	}
	if (writeUrl) {
		window.history.replaceState({}, "", `#${hash}`);
	}

	const element = document.getElementById(hash);
	if (element) {
		const headerOffset = parseInt(getComputedStyle(document.documentElement).fontSize) * 4;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - headerOffset;

		window.scrollTo({
			top: offsetPosition,
		});
	}
}
