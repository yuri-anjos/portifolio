import {
	FaAngular,
	FaCss3,
	FaDatabase,
	FaDocker,
	FaHtml5,
	FaJava,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import {
	SiGit,
	SiJavascript,
	SiJest,
	SiMongodb,
	SiNextdotjs,
	SiRedux,
	SiSpring,
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
		name: "Spring",
		image: <SiSpring />,
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
		name: "Jest",
		image: <SiJest />,
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
		name: "Angular 2",
		image: <FaAngular />,
	},
	{
		name: "Docker",
		image: <FaDocker />,
	},
	{
		name: "Scrum",
		image: <DiScrum />,
	},
	{
		name: "Git",
		image: <SiGit />,
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
