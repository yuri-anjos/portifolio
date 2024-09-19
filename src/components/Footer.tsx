import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t } = useTranslation();
	return (
		<footer className="min-h-16 w-full p-4 bg-app-black text-white flex flex-col items-center justify-center gap-4">
			<small>{t("footer.technologies")}</small>
			<small>{t("footer.rights")}</small>
		</footer>
	);
}
