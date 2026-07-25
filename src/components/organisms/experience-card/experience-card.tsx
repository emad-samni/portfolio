import { FunctionComponent, useContext } from "react";
import { FaArrowRight, FaCalendarAlt, FaFolderOpen } from "react-icons/fa";
import { ThemeContext } from "../../providers/theme-provider";

interface ExperienceCardProps {
  onClick?: () => void;
  item_id?: string;
  title?: string;
  src?: string;
  name?: string;
  date?: string;
  type?: string;
  ctaLabel?: string;
}

const formatDate = (date?: string) => {
  if (!date) return undefined;
  const [day, month, year] = date.split("-");
  if (!day || !month || !year) return date;
  return `${month}/${year}`;
};

const ExperienceCard: FunctionComponent<ExperienceCardProps> = (props) => {
  const { onClick, name, src, title, date, type, ctaLabel } = props;

  const theme = useContext(ThemeContext);
  const themeClass = theme?.theme === "dark" ? "modern-project-card-dark" : "modern-project-card-light";

  return (
    <article className={`modern-project-card portfolio-card ${themeClass}`}>
      <div className="modern-project-media portfolio-card-image">
        <img src={src} alt={`${name ?? "Portfolio item"} preview`} />
        <div className="modern-project-media-overlay" />
        {!!type && <span className="modern-project-type">{type}</span>}
      </div>

      <div className="modern-project-content">
        <div className="modern-project-meta">
          <span>
            <FaFolderOpen />
            {type ? type.replace("-", " ") : "portfolio"}
          </span>
          {!!formatDate(date) && (
            <span>
              <FaCalendarAlt />
              {formatDate(date)}
            </span>
          )}
        </div>

        <h3 className="modern-project-title">{name}</h3>
        <p className="modern-project-description">{title}</p>

        <button className="modern-project-button" onClick={onClick}>
          <span>{ctaLabel ?? "View details"}</span>
          <FaArrowRight />
        </button>
      </div>
    </article>
  );
};

export default ExperienceCard;
