import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { FaExclamationTriangle } from "react-icons/fa";
import { capitalizeFirstLetter } from "../../../utils/text/text-manipulation";
import profileConfig from "../../../configs/profile.config";
import { generateAnimationDelayStyle } from "../../../utils/animation/animation";
import SectionHeader from "../../molecules/contact-me-header/section-header";
import PortofolioList from "../../organisms/portofolio-list/portofolio-list";
import PortofolioTemplate from "../../templates/portofolio-template/portofolio-template";
interface TestimonialsPageProps {}

const TestimonialsPage: FunctionComponent<TestimonialsPageProps> = () => {
  const { volunteering } = profileConfig;

  const { t } = useTranslation();

  const items = volunteering.map((item) => ({
    ...item,
    src: item?.data?.[0].thumb,
  }));

  return (
    <PortofolioTemplate
      tagElement={
        <div
          className="animate__animated animate__fadeInUp"
          style={{ ...generateAnimationDelayStyle(0.5) }}
        >
          <SectionHeader>{t("testimonials")}</SectionHeader>
        </div>
      }
      content={
        <div
          className="animate__animated animate__fadeIn uk-display-inline-block uk-width-1-1"
          style={{ ...generateAnimationDelayStyle(1.1) }}
        >
          <div>
            <PortofolioList show_form_projects={false} contents={items} />
          </div>
        </div>
      }
    />
  );
};

export default TestimonialsPage;
