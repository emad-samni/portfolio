import { FunctionComponent } from "react";
import ExperienceCard from "../experience-card/experience-card";
import { useLogic } from "./portofolio-list.logic";

export interface IPortofolioItem {
  label?: string;
  date?: string;
  type?: string;
  id: string;
  desc: string;
  name?: string;
  src?: string;
}

interface PortofolioListProps {
  contents: IPortofolioItem[];
  show_form_projects: Boolean;
}

const PortofolioList: FunctionComponent<PortofolioListProps> = (props) => {
  const { contents, show_form_projects } = props;

  const { handleShowPortofolioViewer } = useLogic();

  return (
    <ul className="js-filter modern-project-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@xl" uk-grid="">
      {contents.map((item) => (
        <li key={`${item.id}-${item.date}`} data-date={item.date} data-stack={item.type}>
          <ExperienceCard
            item_id={item.id}
            src={item.src}
            name={item.name}
            title={item.desc}
            date={item.date}
            type={show_form_projects ? item.type : "volunteering"}
            ctaLabel={show_form_projects ? "View case study" : "View gallery"}
            onClick={() =>
              handleShowPortofolioViewer(
                item.id,
                show_form_projects ? true : false
              )
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default PortofolioList;
