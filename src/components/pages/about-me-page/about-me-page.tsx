import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile.config";
import { useResponsive } from "../../../hooks/responsiveness";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import SectionHeader from "../../molecules/contact-me-header/section-header";
import HeaderParagraph from "../../molecules/header-paragraph/header-paragraph";
import ImageWithBadge from "../../molecules/image-with-badge/image-with-badge";
import SkillSetList from "../../molecules/skill-set-list/skill-set-list";
import AboutMeModalTrigger from "../../organisms/about-me-modal-trigger/about-me-modal-trigger";
import { FaCode, FaDocker, FaLayerGroup, FaTools } from "react-icons/fa";
import { ThemeContext } from "../../providers/theme-provider";

interface AboutMePageProps {}

const AboutMePage: FunctionComponent<AboutMePageProps> = () => {
  const { bio, skills_introduction, services } = profileConfig;

  const { isTabletOrMobile } = useResponsive();

  const { t } = useTranslation();

  const theme = useContext(ThemeContext);
  const serviceCardThemeClass = theme?.theme === "dark" ? "service-card-dark" : "service-card-light";
  const serviceIcons = [FaCode, FaDocker, FaLayerGroup, FaTools];

  const containerResponsiveClass = isTabletOrMobile ? "uk-flex-column-reverse uk-flex-middle" : "";

  const containerResponsiveMarginClass = isTabletOrMobile ? "uk-margin-top uk-margin-bottom" : "";

  const responsiveFullWidthClass = isTabletOrMobile ? "uk-width-1-1" : "";

  return (
    <div className="uk-flex uk-flex-middle uk-animation-toggle portfolio-page-content" style={{ minHeight: "100vh" }}>
      <div className={`uk-margin-auto uk-container uk-container-xlarge portfolio-section-container ${containerResponsiveMarginClass}`}>
        <div className={` uk-flex ${containerResponsiveClass}`}>
          <div className="uk-width-1-1 uk-width-1-2@m">
            <div className="uk-margin animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(0.5) }}>
              <div className="portfolio-section-header"><SectionHeader>
                {t("about")} {t("me")}
              </SectionHeader></div>
            </div>
            <div>
              <HeaderParagraph paragraphProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(0.8) } }} paragraph={bio} />
            </div>
            <div>
              <HeaderParagraph
                headerProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(1.1) } }}
                paragraphProps={{ className: " animate__animated animate__fadeInUp", style: { ...generateAnimationDelayStyle(1.4) } }}
                header={t("skill_level_question") ?? undefined}
                paragraph={skills_introduction}
              />
            </div>
            {!!services?.length && (
              <div className="services-section uk-margin-large-top animate__animated animate__fadeInUp" style={{ ...generateAnimationDelayStyle(1.7) }}>
                <div className="services-section-heading">
                  <span className="services-eyebrow">Services</span>
                  <h6 className="uk-text-bold uk-text-large uk-margin-remove">{t("how_i_can_help")}</h6>
                </div>
                <div className="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="">
                  {services.map((service, index) => {
                    const ServiceIcon = serviceIcons[index % serviceIcons.length];
                    return (
                      <div key={service.title}>
                        <div className={`service-card ${serviceCardThemeClass}`}>
                          <div className="service-card-topline" />
                          <div className="service-card-header">
                            <div className="service-card-icon">
                              <ServiceIcon />
                            </div>
                            <span className="service-card-index">0{index + 1}</span>
                          </div>
                          <h5 className="service-card-title">{service.title}</h5>
                          <p className="service-card-description">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="uk-margin-large-top">
              <SkillSetList animationDelay={2.0} />
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
