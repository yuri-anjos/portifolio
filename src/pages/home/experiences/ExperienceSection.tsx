import { useTranslation } from "react-i18next";
import "./style.css";

const technologiesQintess = [
	"Java",
	"Spring Boot",
	"Angular",
	"HTML/CSS",
	"SQL",
	"Docker",
	"Kubernetes",
	"Cloud Azure",
	"DevOps",
	"CI/CD",
	"Git",
	"JUnit",
	"SonarQube",
	"ElasticSearch",
	"Scrum",
];

const technologiesCwi = [
	"Java",
	"Spring Boot",
	"Angular",
	"React",
	"Node.js",
	"HTML/CSS",
	"SQL",
	"NoSQL",
	"Microserviços",
	"Docker",
	"Kubernetes",
	"Cloud Azure",
	"AWS",
	"CI/CD",
	"DevOps",
	"Git",
	"Jenkins",
	"JUnit",
	"Jest",
	"ElasticSearch",
	"Scrum",
];

export default function ExperienceSection() {
	const { t } = useTranslation();

	return (
		<section id="nav-experiences" className="fullscreen_container bg-app-bg-2">
			<div className="container flex flex-col gap-8">
				<h3 className="text-center">{t("home.experiences.title")}</h3>
				<article className="article_experience">
					<h5>{t("home.experiences.qintess.company")}</h5>
					<p>
						{t("home.experiences.qintess.role")}
						<span className="experience_period">{t("home.experiences.qintess.period")}</span>
					</p>
					<p className="text-xs">{t("home.experiences.qintess.text")}</p>
					<p className="text-xs">{t("home.experiences.qintess.clients")}</p>
					<ul className="experience_technologies_list">
						{technologiesQintess.map((technology) => (
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
