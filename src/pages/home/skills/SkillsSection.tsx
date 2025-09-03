import {
	FaAngular,
	FaAws,
	FaCloudUploadAlt,
	FaCogs,
	FaCss3,
	FaDatabase,
	FaDocker,
	FaEye,
	FaHtml5,
	FaJava,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import {
	SiApachekafka,
	SiGit,
	SiJavascript,
	SiJest,
	SiKubernetes,
	SiMongodb,
	SiNextdotjs,
	SiRabbitmq,
	SiRedux,
	SiSonarlint,
	SiSpringboot,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";
import "./style.css";
import { useTranslation } from "react-i18next";

type Skill = {
	name: string;
	image: JSX.Element;
};
const skills: Skill[] = [
	{
		name: "Java",
		image: <FaJava />,
	},
	{
		name: "Spring Boot",
		image: <SiSpringboot />,
	},
	{
		name: "SQL",
		image: <FaDatabase />,
	},
	{
		name: "MongoDB",
		image: <SiMongodb />,
	},
	{
		name: "Angular 2",
		image: <FaAngular />,
	},
	{
		name: "Javascript",
		image: <SiJavascript />,
	},
	{
		name: "Typescript",
		image: <SiTypescript />,
	},
	{
		name: "Express",
		image: <FaNodeJs />,
	},
	{
		name: "HTML",
		image: <FaHtml5 />,
	},
	{
		name: "CSS",
		image: <FaCss3 />,
	},
	{
		name: "React",
		image: <FaReact />,
	},
	{
		name: "Next",
		image: <SiNextdotjs />,
	},
	{
		name: "Redux",
		image: <SiRedux />,
	},
	{
		name: "Tailwind",
		image: <SiTailwindcss />,
	},
	{
		name: "Microservices",
		image: <FaDocker />,
	},
	{
		name: "Docker",
		image: <FaDocker />,
	},
	{
		name: "Kubernetes",
		image: <SiKubernetes />,
	},
	{
		name: "Scrum",
		image: <DiScrum />,
	},
	{
		name: "Git",
		image: <SiGit />,
	},
	{
		name: "DevOps",
		image: <FaCogs />,
	},
	{
		name: "CI/CD",
		image: <FaCogs />,
	},
	{
		name: "Cloud Azure",
		image: <FaCloudUploadAlt />,
	},
	{
		name: "Cloud AWS",
		image: <FaAws />,
	},
	{
		name: "Kafka",
		image: <SiApachekafka />,
	},
	{
		name: "RabbitMQ",
		image: <SiRabbitmq />,
	},
	{
		name: "JUnit",
		image: <SiJest />,
	},
	{
		name: "Jest",
		image: <SiJest />,
	},
	{
		name: "SonarQube",
		image: <SiSonarlint />,
	},
	{
		name: "ElasticSearch",
		image: <FaEye />,
	},
	{
		name: "Grafana",
		image: <FaEye />,
	},
];
export default function SkillsSection() {
	const { t } = useTranslation();

	return (
		<section id="nav-skills" className="fullscreen_container">
			<div className="container">
				<h3>{t("home.skills.title")}</h3>
				<ul className="skill_list">
					{skills.map((skill) => (
						<li key={skill.name} className="skill_card">
							<small>{skill.name}</small>
							<span className="text-5xl text-app-text">{skill.image}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
