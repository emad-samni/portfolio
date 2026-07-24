import { FunctionComponent, ReactNode } from "react";
import { useResponsive } from "../../../hooks/responsiveness";

interface ContactMeTemplateProps {
  firstSection?: ReactNode;
  secondSection?: ReactNode;
}

const ContactMeTemplate: FunctionComponent<ContactMeTemplateProps> = (props) => {
  const { firstSection, secondSection } = props;

  const { isTabletOrMobile } = useResponsive();

  const containerResponsiveClass = isTabletOrMobile ? "uk-flex-column" : "";
  const firstSectionStyle = isTabletOrMobile ? { width: "100%" } : { flex: "1 1 55%", maxWidth: 780 };
  const secondSectionStyle = isTabletOrMobile ? { width: "100%", marginTop: 40 } : { flex: "0 1 520px", minWidth: 460, maxWidth: 560 };

  return (
    <div className="uk-flex uk-flex-middle" style={{ minHeight: "100vh" }}>
      <div className={`uk-flex ${containerResponsiveClass} uk-container uk-container-large uk-flex-between uk-margin-auto uk-width-1-1 uk-height-1-1`} style={{ gap: !isTabletOrMobile ? 70 : 0 }}>
        <div style={firstSectionStyle}>
          {firstSection}
        </div>
        <div style={secondSectionStyle}>{secondSection}</div>
      </div>
    </div>
  );
};

export default ContactMeTemplate;
