import styles from "../css/Training.module.css";
import { useTranslation } from "react-i18next";

export default function Training() {
  const lang = sessionStorage.getItem("lang");
  const { t } = useTranslation();
  const { trainings } = require(`../assets/data/data_${lang}.json`);

  return (
    <div id="training" className={"p-5 " + styles.trainings}>
      <h2 className="mb-5">{t("navbar.training")}</h2>
      {trainings.map((training) => (
        <div key={training.title} className={styles.training}>
          {/* <span className={styles.dot} /> */}
          <h5 className={styles.dot}>{training.title}</h5>
          <p>
            {training.college}
            <br />
            <small>
              {training.dates}
              <br />
              {training.location}
            </small>
          </p>
        </div>
      ))}
    </div>
  );
}
