import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = {
	pt: "PT-BR",
	en: "EN",
};
export default function LanguageSwitch() {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<string>("pt");

	useEffect(() => {
		const storedLanguage = localStorage.getItem("language") ?? language;
		setLanguage(storedLanguage);
		i18n.changeLanguage(storedLanguage);
	}, []);

	function handleChangeLanguage(option: any) {
		localStorage.setItem("language", option);
		setLanguage(option);
		i18n.changeLanguage(option);
	}

	return (
		<select
			onChange={(e) => handleChangeLanguage(e.target.value)}
			value={language}
			className="w-auto text-xs p-0.5 bg-app-black-2 text-white"
		>
			{Object.entries(languages).map(([key, language]) => (
				<option key={key} value={key}>
					{language}
				</option>
			))}
		</select>
	);
}
