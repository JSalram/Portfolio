import "../css/Project.css";
import { useTranslation } from "react-i18next";

export default function Project() {
  const lang = sessionStorage.getItem("lang");
  const { t } = useTranslation();
  const { projects } = require(`../assets/data/data_${lang}.json`);

  const open = (url) => {
    window.open(url);
  };

  return (
    <div id="projects" className="p-5">
      <h2 className="mb-5">{t("navbar.projects")}</h2>
      <div className="row">
        {projects.map((project) => (
          <div
            key={project.title}
            className="col-lg-4 mb-3"
            onClick={() => open(project.url)}
          >
            <div className="card bg-dark text-white">
              <img
                src={require(`../assets/img/${project.background}`)}
                className="card-img"
              />
              <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-center">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
