import { FunctionComponent } from "react";
import profileConfig from "../../../configs/profile/profile";
import { useResponsive } from "../../../hooks/responsiveness";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import SectionHeader from "../../molecules/contact-me-header/section-header";
import HeaderParagraph from "../../molecules/header-paragraph/header-paragraph";
import ImageWithBadge from "../../molecules/image-with-badge/image-with-badge";
import SkillSetList from "../../molecules/skill-set-list/skill-set-list";
import AboutMeModalTrigger from "../../organisms/about-me-modal-trigger/about-me-modal-trigger";

interface AboutMePageProps {}

const AboutMePage: FunctionComponent<AboutMePageProps> = () => {
  const { bio } = profileConfig;

  const { isTabletOrMobile } = useResponsive();

  const containerResponsiveClass = isTabletOrMobile ? "uk-flex-column-reverse uk-flex-middle" : "";

  const containerResponsiveMarginClass = isTabletOrMobile ? "uk-margin-top uk-margin-bottom" : "";

  const responsiveFullWidthClass = isTabletOrMobile ? "uk-width-1-1" : "";

  return (
    <div className="uk-flex uk-flex-middle uk-animation-toggle" style={{ minHeight: "100vh" }}>
      <div className={`uk-margin-auto uk-container uk-container-xlarge ${containerResponsiveMarginClass}`} style={{ paddingInline: 50 }}>
        <div className={` uk-flex ${containerResponsiveClass}`}>
          <div className="uk-width-1-1 uk-width-1-2@m">
            <div className="uk-margin animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.5) }}>
              <SectionHeader>About Me</SectionHeader>
            </div>
            <div>
              <HeaderParagraph paragraphProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(0.8) } }} paragraph={bio} />
            </div>
            <div>
              <HeaderParagraph
                headerProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(1.1) } }}
                paragraphProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(1.4) } }}
                header="What is my skill level?"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus."
              />
            </div>
            <div className="uk-margin-large-top">
              <SkillSetList animationDelay={1.7} />
            </div>
            <div className={`${responsiveFullWidthClass} uk-margin-large-top uk-display-inline-block animate__animated animate__fadeInUp`} style={{ ...generateAnimationDelayStyle(3.3) }}>
              <AboutMeModalTrigger />
            </div>
          </div>

          {!isTabletOrMobile && (
            <div className={` uk-width-auto uk-width-1-2@m uk-text-right`}>
              <div className={` uk-display-inline-block animate__animated animate__pulse`} style={{ maxWidth: 500 }}>
                <ImageWithBadge />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
