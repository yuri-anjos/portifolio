import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ColorThemeOption = "darkMode" | "lightMode";
const options: ColorThemeOption[] = ["darkMode", "lightMode"];

export default function ColorTheme() {
	const { t } = useTranslation();
	const [colorTheme, setColorTheme] = useState<ColorThemeOption>("darkMode");

	useEffect(() => {
		const storedColorTheme = localStorage.getItem("colorTheme") ?? colorTheme;
		setColorTheme(storedColorTheme as ColorThemeOption);
		document.body.setAttribute("colorTheme", storedColorTheme);
	}, []);

	function handleChangeColorTheme(option: ColorThemeOption) {
		setColorTheme(option);
		localStorage.setItem("colorTheme", option);
		document.body.setAttribute("colorTheme", option);
	}

	return (
		<select
			onChange={(e: any) => handleChangeColorTheme(e.target.value)}
			value={colorTheme}
			className="w-auto text-xs p-0.5 bg-app-black-2 text-white"
		>
			{options.map((option) => (
				<option key={option} value={option}>
					{t(option)}
				</option>
			))}
		</select>
	);
}
