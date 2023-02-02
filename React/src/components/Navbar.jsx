import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(sessionStorage.getItem("lang"));

  useEffect(() => {
    window.addEventListener("wheel", unselect);
  }, []);

  const changeLanguage = () => {
    const language = lang === "es" ? "en" : "es";
    i18n.changeLanguage(language);
    sessionStorage.setItem("lang", language);
    setLang(language);
  };

  const select = (event) => {
    unselect();
    event.target.classList.add("active");
  };

  const unselect = () => {
    let activeNavLink = document.querySelector("a.active");
    if (activeNavLink) {
      activeNavLink.classList.remove("active");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <a onClick={select} className="navbar-brand" href="#">
          Salram
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              onClick={select}
              className="nav-link active"
              aria-current="page"
              href="#about"
            >
              {t("navbar.about")}
            </a>
            <a onClick={select} className="nav-link" href="#experience">
              {t("navbar.experience")}
            </a>
            <a onClick={select} className="nav-link" href="#training">
              {t("navbar.training")}
            </a>
            <a onClick={select} className="nav-link" href="#projects">
              {t("navbar.projects")}
            </a>
            <a onClick={select} className="nav-link" href="#contact">
              {t("navbar.contact")}
            </a>
            <a onClick={changeLanguage} className="nav-link fw-bold">
              <i class="fa-solid fa-language" />{" "}
              {lang === "es" ? "Inglés" : "Spanish"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
