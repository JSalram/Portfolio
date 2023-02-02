import styles from "../css/Experience.module.css";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const lang = sessionStorage.getItem("lang");
  const { t } = useTranslation();
  const { experiences } = require(`../assets/data/data_${lang}.json`);

  return (
    <div id="experience" className="p-5 text-end">
      <h2 className="mb-5">{t("navbar.experience")}</h2>
      {experiences.map((experience) => (
        <div key={experience.title} className={styles.experience}>
          <h5 className={styles.dot}>{experience.title}</h5>
          <p>
            {experience.company} - {experience.workday} <br />
            <small>
              {experience.dates} <br />
              {experience.location} ({experience.modality})
            </small>
          </p>
        </div>
      ))}
    </div>
  );
}
