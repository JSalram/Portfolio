import "../css/About.css";
import pfp from "../assets/img/jsr.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="p-5">
      <div className="row">
        <div className="col-lg-5">
          <img
            src={pfp}
            className="img-fluid rounded align-center float-lg-end"
            alt="Foto de perfil"
          />
        </div>
        <div className="col-lg-7 pe-5">
          <h2 className="mb-5">{t("navbar.about")}</h2>
          <p>{t("about.description-line-1")}</p>
          <p>{t("about.description-line-2")}</p>
          <p>{t("about.description-line-3")}</p>
        </div>
      </div>
    </div>
  );
}
