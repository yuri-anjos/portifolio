import { useTranslation } from "react-i18next";
import ExperienceSection from "./experiences/ExperienceSection";
import ContactSection from "./contact/ContactSection";
import SkillsSection from "./skills/SkillsSection";

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<>
			<section id="nav-me" className="fullscreen_container">
				<div className="container">
					<div className="w-full">
						<h5>{t("home.me.introduction")}</h5>
						<h1>{t("home.me.name")}</h1>
						<h2 className="text-app-primary">{t("home.me.profession")}</h2>
					</div>
				</div>
			</section>

			<section id="nav-about" className="fullscreen_container bg-app-bg-2">
				<div className="container">
					<h3 className="mb-6">{t("home.about.title")}</h3>
					<p>{t("home.about.description")}</p>
				</div>
			</section>

			<SkillsSection />

			<ExperienceSection />

			<section id="nav-projects" className="fullscreen_container">
				<div className="container">
					<h3>{t("home.projects.title")}</h3>
					<h4 className="mt-8">Under construction...</h4>
				</div>
			</section>

			<ContactSection />
		</>
	);
}
