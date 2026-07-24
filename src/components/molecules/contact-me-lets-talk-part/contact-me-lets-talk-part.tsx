import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import profileConfig from "../../../configs/profile.config";
import { capitalizeFirstLetter } from "../../../utils/text/text-manipulation";

interface ContactMeLetsTalkPartProps {}

const ContactMeLetsTalkPart: FunctionComponent<ContactMeLetsTalkPartProps> = () => {
  const { email, contact_call_to_action } = profileConfig;

  const { t } = useTranslation();

  return (
    <div>
      <img src={"imgs/map.svg"} alt="Map background" className="uk-position-absolute" />
      <h6 className="uk-text-large uk-text-bold uk-text-emphasis">{t("talk_statment")}!</h6>
      {contact_call_to_action && <p className="uk-text-emphasis">{contact_call_to_action}</p>}
      <p className="uk-text-emphasis">
        {capitalizeFirstLetter(t("like_form_question"))}? {capitalizeFirstLetter(t("send_me"))}{" "}
        <a href={`mailto:${email}`}>
          <button className="uk-button uk-button-text uk-text-capitalize text-primary">Email</button>
        </a>
        . 👋
      </p>
    </div>
  );
};

export default ContactMeLetsTalkPart;
