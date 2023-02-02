import "../css/Header.css";
import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  return (
    <div id="header">
      <h1>Javier Salado Ramos</h1>
      <h4 className="my-3">{t('header.description')}</h4>
    </div>
  );
}
