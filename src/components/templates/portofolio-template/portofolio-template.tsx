import { FunctionComponent, ReactNode } from "react";

import { useResponsive } from "../../../hooks/responsiveness";

interface PortofolioTemplateProps {
  tagElement?: ReactNode;
  content?: ReactNode;
  filter?: ReactNode;
}

const PortofolioTemplate: FunctionComponent<PortofolioTemplateProps> = (props) => {
  const { tagElement, content, filter } = props;

  const { isTabletOrMobile } = useResponsive();

  const responsiveClass = isTabletOrMobile ? "uk-flex-column" : "";
  return (
    <div className="uk-container uk-container-large portfolio-page-content portfolio-section-container" style={{ minHeight: "100vh" }}>
      <div className={`uk-flex ${responsiveClass} uk-flex-between uk-flex-middle`}>
        <div className={isTabletOrMobile ? "uk-width-1-1 uk-text-center portfolio-section-header" : "portfolio-section-header"}>{tagElement}</div>
        <div className={isTabletOrMobile ? "uk-width-1-1 portfolio-filter-bar" : ""}>{filter}</div>
      </div>

      <div className="uk-margin-top">{content}</div>
    </div>
  );
};

export default PortofolioTemplate;
