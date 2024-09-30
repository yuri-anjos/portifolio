import { useTranslation } from "react-i18next";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./style.css";

const cvs = {
	pt: "./CV-PTBR-YURI-FRANCA.pdf",
	en: "./CV-ENG-YURI-FRANCA.pdf",
};
export default function ContactSection() {
	const { t, i18n } = useTranslation();

	return (
		<section id="nav-contact" className="fullscreen_container bg-app-bg-2">
			<div className="container">
				<h3 className="text-center">{t("home.contact.title")}</h3>
				<div className="contact_options">
					<a
						href="https://api.whatsapp.com/send?phone=5551991611083"
						target="_blank"
						rel="noreferrer"
					>
						{t("home.contact.whatsapp")} <FaWhatsapp />
					</a>
					<a href="https://github.com/yuri-anjos" target="_blank" rel="noreferrer">
						{t("home.contact.github")} <FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/yuri-franca-379b37179/"
						target="_blank"
						rel="noreferrer"
					>
						{t("home.contact.linkedin")} <FaLinkedin />
					</a>
					<a href={cvs.pt} download>
						{t("home.contact.curriculum")} <FaDownload />
					</a>
				</div>
			</div>
		</section>
	);
}

