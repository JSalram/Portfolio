import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer text-white">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-4">
            <p className="fw-bold">© All rights reserved 2023</p>
          </div>
          <div className="col-lg-4">
            <h4>{t("footer.social")}</h4>
            <p>
              <i class="fa-brands fa-github" />{" "}
              <a href="https://github.com/JSalram" className="text-light">
                Github
              </a>
            </p>
            <p>
              <i class="fa-brands fa-linkedin" />{" "}
              <a
                href="https://www.linkedin.com/in/javier-salado/"
                className="text-light"
              >
                Linkedin
              </a>
            </p>
          </div>
          <div id="contact" className="col-lg-4">
            <h4>{t("navbar.contact")}</h4>
            <p>
              <i class="fa-solid fa-envelope" /> javisr997@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-phone" /> 677343352
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
