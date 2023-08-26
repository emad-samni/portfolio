/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { useSoundEffects } from "../../../hooks/sounds-effects";
import { ThemeContext } from "../../providers/theme-provider";

interface ExperienceCardProps {
  onClick?: () => void;
  item_id?: string;
  title?: string;
  src?: string;
  name?: string;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = (props) => {
  const { onClick, item_id, name, src, title } = props;

  const theme = useContext(ThemeContext);

  const backgroundColorClass =
    theme?.theme === "dark" ? "uk-overlay-primary" : "uk-overlay-default";

  const aligh =
    parseInt(item_id!) % 2 !== 0
      ? "uk-card-media-left uk-cover-container"
      : "uk-flex-last@s uk-card-media-right uk-cover-container";

  const textClass = theme?.theme === "dark" ? "uk-light" : "";

  const { playHoverSound } = useSoundEffects();

  return (
    <div
      className={`uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-flex ${backgroundColorClass} `}
      uk-grid
    >
      <div className={`${aligh}`}>
        <img src={src} alt="resource" style={{ height: "400px" }} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className={`${textClass}`}> {name}</h3>
          <p className={`${textClass}`} style={{ whiteSpace: "pre-line" }}>
            {title}.
          </p>

          <button className="uk-button uk-button-danger" onClick={onClick}>
            more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
