import { Link } from "react-router-dom";
import LanguageSwitch from "../LanguageSwitch";
import ColorTheme from "../ColorTheme";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import "./style.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ScrollToSection from "../ScrollToSection";

export default function Header() {
	const { t } = useTranslation();
	const [showNavMenu, setShowNavMenu] = useState(false);

	return (
		<>
			<header className="max-h-16 h-16 w-full bg-app-black text-white flex items-center justify-between px-8 sticky top-0 z-10">
				<button onClick={() => ScrollToSection("/", "nav-me")}>
					<p className="text-2xl">YF</p>
				</button>
				<div className="flex gap-4 items-center">
					<ColorTheme />
					<LanguageSwitch />
				</div>
				<nav className="hidden md:block">
					<ul className="flex gap-6">
						<li>
							<button onClick={() => ScrollToSection("/", "nav-me")}>{t("header.about")}</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-skills")}>
								{t("header.skills")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-experiences")}>
								{t("header.experiences")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-projects")}>
								{t("header.projects")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-contact")}>
								{t("header.contact")}
							</button>
						</li>
					</ul>
				</nav>
				<button onClick={() => setShowNavMenu(!showNavMenu)} className="block md:hidden">
					{showNavMenu ? <IoClose size={24} /> : <FiMenu size={24} />}
				</button>
			</header>
			{showNavMenu && (
				<nav className="navmenu">
					<ul>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-me")}>{t("header.about")}</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-skills")}>
								{t("header.skills")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-experiences")}>
								{t("header.experiences")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-projects")}>
								{t("header.projects")}
							</button>
						</li>
						<li>
							<button onClick={() => ScrollToSection("/", "nav-contact")}>
								{t("header.contact")}
							</button>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
}
