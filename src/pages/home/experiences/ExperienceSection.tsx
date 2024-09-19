import { useTranslation } from "react-i18next";
import "./style.css";

const technologiesGenteSeguradora = [
	"Java",
	"Spring Boot",
	"React",
	"Typescript",
	"HTML",
	"CSS",
	"RESTful API",
	"Git",
	"Spring Framework",
	"PostgreSQL",
];
const technologiesCwi = [
	"Java",
	"Spring Boot",
	"RESTful API",
	"Microservices",
	"Angular",
	"Typescript",
	"HTML",
	"CSS",
	"Git",
	"MySQL",
	"SQL Server",
	"React",
];

export default function ExperienceSection() {
	const { t } = useTranslation();

	return (
		<section id="nav-experiences" className="fullscreen_container bg-app-bg-2">
			<div className="container flex flex-col gap-8">
				<h3 className="text-center">{t("home.experiences.title")}</h3>
				<article className="article_experience">
					<h5>{t("home.experiences.gente.company")}</h5>
					<p>
						{t("home.experiences.gente.role")}
						<span className="experience_period">{t("home.experiences.gente.period")}</span>
					</p>
					<p className="text-xs">{t("home.experiences.gente.text")}</p>
					<ul className="experience_technologies_list">
						{technologiesGenteSeguradora.map((technology) => (
							<li key={technology} className="experience_technology">
								<small>{technology}</small>
							</li>
						))}
					</ul>
				</article>
				<article className="article_experience">
					<h5>{t("home.experiences.cwi.company")}</h5>
					<p>
						{t("home.experiences.cwi.role")}
						<span className="experience_period">{t("home.experiences.cwi.period")}</span>
					</p>
					<p className="text-xs">{t("home.experiences.cwi.text")}</p>
					<p className="text-xs">{t("home.experiences.cwi.clients")}</p>
					<ul className="experience_technologies_list">
						{technologiesCwi.map((technology) => (
							<li key={technology} className="experience_technology">
								{technology}
							</li>
						))}
					</ul>
				</article>
			</div>
		</section>
	);
}
