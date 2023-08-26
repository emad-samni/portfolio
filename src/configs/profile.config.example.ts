import { i18next } from "../setups/languages";
import { switchConfigByLanguage } from "../utils/configs/configs-manipulation";
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import pythonIcon from "devicon/icons/python/python-original.svg";
import djangoIcon from "devicon/icons/django/django-plain.svg";
import mongoDBIcon from "devicon/icons/mongodb/mongodb-original.svg";
import Express from "devicon/icons/express/express-original.svg";
import Flask from "devicon/icons/flask/flask-original.svg";
import Bootstrap from "devicon/icons/bootstrap/bootstrap-original.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-plain.svg";
import QT from "devicon/icons/qt/qt-original.svg";
import circleciIcon from "devicon/icons/circleci/circleci-plain.svg";
import dockerIcon from "devicon/icons/docker/docker-plain.svg";
import graphqlIcon from "devicon/icons/graphql/graphql-plain.svg";
import gitIcon from "devicon/icons/git/git-plain.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-plain.svg";
import Postgresql from "devicon/icons/postgresql/postgresql-original.svg";
import htmlIcon from "devicon/icons/html5/html5-plain.svg";
import cssIcon from "devicon/icons/css3/css3-plain.svg";
import CPlusPlus from "devicon/icons/cplusplus/cplusplus-line.svg";
import Flutter from "devicon/icons/flutter/flutter-original.svg";
import React_icon from "devicon/icons/react/react-original.svg";

import { ProfileConfigs } from "../interfaces/profile-configs";

const profileConfig = {
  first_name: "Emad",

  last_name: "Samni",

  profile_pic_main: "/imgs/profile.png",

  profile_pic_about_me: "/imgs/my-rect-image.jpg",

  email: "emad.samni.it@gmail.com",

  bio_en:
    "As a seasoned software engineer with over 4 years of experience specializing in Python-based backend development, I have developed a passion for leveraging my technical expertise and project management skills to drive innovation and deliver high-quality software solutions. My dedication to continuous learning has enabled me to expand my knowledge and improve both my technical and soft skills. Through my experience in advanced software development environments, I have gained a deep understanding of what it takes to deliver successful projects. I am excited to continue applying my skills and experience to new challenges, and I am confident in my ability to make valuable contributions to any organization.",
  bio_de:
    "Als erfahrener Softwareingenieur mit über 4 Jahren Erfahrung, der sich auf die Entwicklung von Python-basierten Backends spezialisiert hat, habe ich eine Leidenschaft dafür entwickelt, mein technisches Fachwissen und meine Projektmanagementfähigkeiten einzusetzen, um Innovationen voranzutreiben und hochwertige Softwarelösungen zu liefern. Meine Hingabe zum kontinuierlichen Lernen hat es mir ermöglicht, mein Wissen zu erweitern und sowohl meine technischen als auch meine sozialen Fähigkeiten zu verbessern. Durch meine Erfahrungen in fortschrittlichen Softwareentwicklungsumgebungen habe ich ein tiefes Verständnis dafür entwickelt, was es braucht, um erfolgreiche Projekte umzusetzen. Ich freue mich darauf, meine Fähigkeiten und Erfahrungen in neuen Herausforderungen weiterhin einzusetzen, und ich bin zuversichtlich, wertvolle Beiträge zu jeder Organisation leisten zu können.",

  skills_introduction_en:
    "As I progressed in my career as a software engineer and worked on numerous small and medium-sized projects, I acquired a diverse set of skills from these experiences.",
  skills_introduction_de:
    "Im Laufe meiner Karriere als Softwareingenieur und durch die Arbeit an zahlreichen kleinen und mittelgroßen Projekten habe ich eine vielfältige Palette an Fähigkeiten erworben.",

  professions_en: ["Software engineer", "Python Developer"],
  professions_de: ["Softwareingenieur", "Python-Entwickler"],

  cvs: [
    {
      type: "Software-engineer",
      link: "/cvs/my-cv.pdf",
    },
  ],

  years_of_experiance: 5,

  social_media: [
    {
      link: "https://www.linkedin.com/in/emad-samni/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },

    { link: "https://github.com/emad-samni", icon: FaGithub, label: "Github" },

    {
      link: "mailto: emad.samni.it@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ],

  skill_set: [
    { icon: pythonIcon, value: 9, title: "Python", priorty: 1 },
    { icon: djangoIcon, value: 9, title: "Django", priorty: 2 },
    { icon: CPlusPlus, value: 9, title: "C++", priorty: 3 },
    { icon: Flutter, value: 7, title: "Flutter", priorty: 4 },
    { icon: circleciIcon, value: 4, title: "CI/CD", priorty: 6 },
    { icon: dockerIcon, value: 8, title: "Docker", priorty: 5 },
    { icon: undefined, value: 7, title: "Microservices", priorty: 7 },
    { icon: Flask, value: 9, title: "Flask", priorty: 8 },
    { icon: gitIcon, value: 8, title: "GIT", priorty: 10 },
    { icon: Express, value: 7, title: "Express.js", priorty: 11 },
    { icon: mysqlIcon, value: 9, title: "MySQL", priorty: 12 },
    { icon: mongoDBIcon, value: 4, title: "mongoDB", priorty: 13 },
    { icon: Bootstrap, value: 9, title: "Bootstrap", priorty: 14 },
    { icon: htmlIcon, value: 9, title: "HTML", priorty: 15 },
    { icon: cssIcon, value: 8, title: "CSS", priorty: 16 },
    { icon: undefined, value: 5, title: "Testing", priorty: 17 },
    { icon: QT, value: 6, title: "QT", priorty: 18 },
    { icon: undefined, value: 9, title: "MFC", priorty: 18 },
    { icon: Postgresql, value: 7, title: "PostgreSQL", priorty: 19 },
    { icon: React_icon, value: 7, title: "React", priorty: 20 },
    { icon: undefined, value: 9, title: "OpenCascade", priorty: 21 },
    { icon: javascriptIcon, value: 8, title: "JavaScript", priorty: 22 },
  ],

  personal_information: [
    { key_en: "first name", key_de: "Vorname", value: "Emad" },
    { key_en: "last name", key_de: "Nachname", value: "Samni" },
    { key_en: "age", key_de: "Alter", value: "28" },
    {
      key_en: "nationality",
      key_de: "Nationalität",
      value_en: "Syrian",
      value_de: "Syrisch",
    },
    {
      key_en: "freelance",
      key_de: "Freiberuflich",
      value_en: "Available",
      value_de: "Verfügbar",
    },
    {
      key_en: "address",
      key_de: "Adresse",
      value_en: "Damascus,Syria",
      value_de: "Damaskus, Syrien",
    },
    { key_en: "phone", key_de: "Telefon", value: "+963935702780" },
    {
      key_en: "Email",
      key_de: "E-Mail",
      value: "emad.samni.it@gmail.com",
    },
    {
      key_en: "Relocate",
      key_de: "Umzug möglich",

      value_en: "Available",
      value_de: "Verfügbar",
    },
    {
      key_en: "Languages",
      key_de: "Sprachen",
      value_en: "English(C1), Arabic(C1)",
      value_de: "Englisch(C1), Arabisch(C1)",
    },
  ],

  experince: [
    {
      icon: FaBriefcase,
      title_en: "Senior Software Engineer",
      title_de: "Front-End-Entwickler",
      time_en: "Nov/2020-Present",
      time_de: "2020-heute",
      description_list_en: [
        "Adept in following development lifecycle methodologies, including Agile and Scrum.",
        "Committing to writing comprehensive unit tests to ensure code quality.",
        "Proficient in developing APIs, and RESTful Web Services using these frameworks (Django, FastApi, Flask).",
        "Design creative approaches to solving technical challenges with data validation and integration scenarios",
        "Developing and deploying microservices in a high-performance environment",
        "Utilizing Prefect technology to streamline workflow automation",
        "Working with the Minio tool for object storage and management",
        "Utilizing Docker and Docker Compose for containerization and orchestration",
      ],
      description_list_de: [
        "Arbeit an einer beliebten Plattform, die sich auf die Bereitstellung von Dienstleistungen für Landwirte in Kenia spezialisiert hat, wie zum Beispiel den Verkauf von Ernten, die Vermietung von Feldern, statistische Dienstleistungen zu Ernten usw.",
        "Arbeit als Squad-Leiter.",
        "Verwendete Technologien sind Laravel, ReactJS, Typescript, Docker, Microservices, PostgreSQL und GraphQL.",
      ],
      place: "L-One systems GMBH",
    },
    {
      icon: FaBriefcase,
      title_en: "Mid-senior software Enginner",
      title_de: "Web-Entwickler",
      time_en: "April/2020-October/2021",
      time_de: "2017-heute",
      description_list_en: [
        "Demonstrated proficiency in writing unit test codes to ensure code quality and robustness.",
        "Developed software following established development lifecycle methodologies, including agile and waterfall approaches.",
        "Designed and implemented mathematical algorithms in C++ to solve complex problems.",
        "Utilized OpenCASCADE technology to design and build a robotic simulation path planning system.",
        "Created user-friendly graphical interfaces using QT for various software applications.",
        "Implemented multi-threading techniques to improve software performance and responsiveness.",
        "Integrated separate software components using DLL files to create seamless software systems.",
      ],
      description_list_de: [
        "In dieser Zeit habe ich mit einigen lokalen und internationalen Kunden an einer Reihe von mittel- und kurzfristigen Projekten gearbeitet",
        "Einige dieser Projekte sind im Abschnitt Portfolio zu finden.",
      ],
      place: "L-One systems GMBH",
    },
    {
      icon: FaBriefcase,
      title_en: "software Enginner",
      title_de: "Web-Entwickler",
      time_en: "January/2018-Febuary/2020",
      time_de: "2017-heute",
      description_list_en: [
        "Developing many platforms that provide entertainment and purchasing services to clients.",
      ],
      description_list_de: [
        "In dieser Zeit habe ich mit einigen lokalen und internationalen Kunden an einer Reihe von mittel- und kurzfristigen Projekten gearbeitet",
        "Einige dieser Projekte sind im Abschnitt Portfolio zu finden.",
      ],
      place: "IT-Zone",
    },
  ],

  education: [
    {
      icon: "FaGraduationCap",
      title_en: "Master in web sciences",
      title_de: "Master in Webwissenschaften",

      time: "April 2020 - till present",
      time_de: "April 2020 - bis heute",

      description_list_en: [
        "Enrolled in the Master of Web Science (MWS) program at SVU University, aimed at furthering education in the field of IT for IT specialists.",
        "Upon completion, awarded the degree of Master of Postgraduate Studies in Web Science by the University.",
        "Developed a systematic and critical understanding of current knowledge and techniques applied in the field of web science through the program.",
        "Equipped with the ability to tackle complex issues systematically and creatively, demonstrating problem-solving skills within the web science domain",
      ],
      description_list_de: [
        "Eingeschrieben im Masterstudiengang Web Science (MWS) an der SVU University mit dem Ziel, die Ausbildung im IT-Bereich für IT-Spezialisten voranzutreiben.",
        "Nach Abschluss wird der Abschluss Master of Postgraduate Studies in Web Science von der Universität verliehen.",
        "Entwicklung eines systematischen und kritischen Verständnisses für aktuelles Wissen und angewandte Techniken im Bereich der Web Science im Rahmen des Studiengangs.",
        "Ausgestattet mit der Fähigkeit, komplexe Probleme systematisch und kreativ anzugehen und dabei Problemlösungsfähigkeiten im Bereich der Web Science zu demonstrieren.",
      ],

      place_en: "SVU University",
      place_de: "SVU Universität",
    },

    {
      icon: "FaGraduationCap",
      title_en: "Bachelor in Software Engineering",
      title_de: "Bachelor in Softwareentwicklung",

      time: "October 2013 - Dec 2019",
      time_de: "Jan 2015 - Dez 2020",

      description_list_en: [
        "Specialized in Software Engineering, acquiring in-depth knowledge and practical skills necessary for developing, designing, and maintaining software systems.",
        "Completed a comprehensive program covering software development methodologies, programming languages, software testing, database management, algorithms, and data structures",
        "Successfully completed hands-on projects, showcasing skills in software development lifecycle, coding, debugging, and project management.",
        "Proficient in Java, C++, Python, HTML, CSS, and JavaScript, with knowledge of software design patterns, architecture, and database management systems.",
        "Developed strong analytical and problem-solving skills, with the ability to break down complex problems and propose effective solutions.",
        "Skilled in presenting technical concepts and producing clear and concise reports.",
        "Maintained a high level of academic performance throughout the program, demonstrating dedication and a strong work ethic",
        "Graduated with an average of 74.54%",
      ],
      description_list_de: [
        "Spezialisiert auf Software Engineering, Erwerb von fundiertem Wissen und praktischen Fähigkeiten für die Entwicklung, Gestaltung und Wartung von Softwaresystemen.",
        "Absolvierung eines umfassenden Programms, das Softwareentwicklungsmethoden, Programmiersprachen, Softwaretests, Datenbankmanagement, Algorithmen und Datenstrukturen abdeckt.",
        "Erfolgreiches Abschließen praktischer Projekte, die Fähigkeiten im Softwareentwicklungslebenszyklus, Codierung, Fehlerbehebung und Projektmanagement zeigen.",
        "Fundierte Kenntnisse in Java, C++, Python, HTML, CSS und JavaScript sowie Verständnis von Software-Designpatterns, Architektur und Datenbankmanagementsystemen.",
        "Entwicklung starker analytischer und Problemlösungsfähigkeiten mit der Fähigkeit, komplexe Probleme zu analysieren und effektive Lösungen vorzuschlagen.",
        "Fähigkeiten in der Präsentation technischer Konzepte und Erstellung klarer und prägnanter Berichte.",
        "Konstant hohe akademische Leistungen während des Studiums, was Engagement und eine starke Arbeitsmoral demonstriert.",
        "Abschluss mit einem Durchschnitt von 74,54%.",
      ],

      place_en: "Damascus University",
      place_de: "Universität von Damaskus",
    },
  ],

  statistics: [
    {
      value: "+5",
      title_en: "years of Experience",
      title_de: "Jahre Erfahrung",
    },
    {
      value: "+13",
      title_en: "Completed Projects",
      title_de: "Abgeschlossene Projekte",
    },
    { value: "+7", title_en: "Happy Customers", title_de: "Zufriedene Kunden" },
    { value: "+0", title_en: "Awards Winner", title_de: "Preisgewinner" },
  ],

  projects: [
    {
      date: "22-05-2023",
      type: "backend",
      name: "agriBORA",
      desc_en:
        "agriBORA is an agri-fintech company with a mission to transform agriculture in Africa by using digital tools and disruptive technologies combined with human touch. the goal is to de-risk smallholder agriculture, improve farm productivity and facilitate effective trading. building an end-to-end ecosystem around farmers, bringing farming inputs, financial services, and output markets closer to them in a way that makes the process affordable, convenient, and reliable for them and their business partners. in addition to be the preferred platform for smallholder farmers and their business partners to transact in a more affordable, efficient, transparent, and reliable way",
      desc_de:
        "agriBORA ist ein Agri-Fintech-Unternehmen mit der Mission, die Landwirtschaft in Afrika durch den Einsatz digitaler Werkzeuge und disruptiver Technologien in Verbindung mit persönlicher Betreuung zu transformieren. Das Ziel ist es, das Risiko für Kleinbauern zu verringern, die Produktivität auf den Farmen zu steigern und den Handel effektiver zu gestalten. Es wird eine umfassende End-to-End-Infrastruktur für Landwirte aufgebaut, die landwirtschaftliche Inputs, finanzielle Dienstleistungen und Absatzmärkte näher an sie heranführt, auf eine Weise, die den Prozess für sie und ihre Geschäftspartner bezahlbar, bequem und zuverlässig macht. Darüber hinaus strebt agriBORA an, die bevorzugte Plattform für Kleinbauern und ihre Geschäftspartner zu sein, um Transaktionen auf eine kostengünstigere, effizientere, transparentere und zuverlässigere Weise durchzuführen.",
      id: "1",
      data: [
        {
          id: "1",
          src: "/imgs/projects/1/1.JPG",
          thumb: "/imgs/projects/1/1.JPG",
          head_en: "Website link",
          head_de: "Website link",
          paragraph_en: `<a href="https://agribora.com">https://agribora.com</a>`,
          paragraph_de: `<a href="https://agribora.com">https://agribora.com</a>`,
        },
      ],
    },
    {
      date: "1-08-2022",
      type: "backend",
      name: "Nitrexo",
      desc_en:
        "An E-learning platform, for Thermal/Mechanical engineers, powered by Chatbot & a web-based 3D visualization scene.",
      desc_de:
        "Eine E-Learning-Plattform für thermische/mechanische Ingenieure, unterstützt von einem Chatbot und einer webbasierten 3D-Visualisierungsszene.",
      id: "2",
      data: [
        {
          id: "1",
          src: "/imgs/projects/4/1.png",
          thumb: "/imgs/projects/4/1.png",
          head_en: "official page",
          head_de: "Offizielle Seite",
          paragraph_en: `<a href="https://www.nitrexo.com">https://www.nitrexo.com</a>`,
          paragraph_de: `<a href="https://www.nitrexo.com">https://www.nitrexo.com</a>`,
        },
        {
          id: "2",
          src: "/imgs/projects/4/2.png",
          thumb: "/imgs/projects/4/2.png",
          head_en: "Register page",
          head_de: "Registrierungsseite",
          paragraph_en:
            "You can log in using your personal email as a student or as a teacher, and a welcome email will be sent to your email address",
          paragraph_de:
            "Sie können sich mit Ihrer persönlichen E-Mail-Adresse als Schüler oder Lehrer anmelden, und eine Willkommens-E-Mail wird an Ihre E-Mail-Adresse gesendet.",
        },
        {
          id: "3",
          src: "/imgs/projects/4/3.png",
          thumb: "/imgs/projects/4/3.png",
          head_en: "Chatbot Page",
          head_de: "Chatbot-Seite",
          paragraph_en:
            "You can you ask the chatbot any question related to using the platform or regarding mechanical or thermal engineering.",
          paragraph_de:
            "Sie können dem Chatbot jede Frage stellen, die sich auf die Verwendung der Plattform oder auf den Bereich Maschinenbau oder Thermodynamik bezieht.",
        },
        {
          id: "4",
          src: "/imgs/projects/4/4.png",
          thumb: "/imgs/projects/4/4.png",
          head_en: "Lesson page",
          head_de: "Lektionsseite",
          paragraph_en:
            "Lesson page that allows us to browse the materials of each lesson with the ability to chat with the chatbot.",
          paragraph_de:
            "Lektionsseite, die es uns ermöglicht, die Materialien jeder Lektion zu durchsuchen und mit dem Chatbot zu chatten.",
        },
        {
          id: "5",
          src: "/imgs/projects/4/6.png",
          thumb: "/imgs/projects/4/6.png",
          head_en: "Course timeline",
          head_de: "Kurszeitplan",
          paragraph_en:
            "Before joining the course, you can track the course timeline and know the timing of each event.",
          paragraph_de:
            "Bevor Sie dem Kurs beitreten, können Sie den Zeitplan des Kurses verfolgen und die Zeiten für jedes Ereignis erfahren.",
        },
        {
          id: "6",
          src: "/imgs/projects/4/7.png",
          thumb: "/imgs/projects/4/7.png",
          head_en: "Onboarding skills assessment",
          head_de: "Einführungs-Skills-Bewertung",
          paragraph_en:
            "Upon joining the course, the student is required to undergo a pre-assessment skills test to later compare it with the results of the post-assessment. This is done to determine the student's level of improvement after completing the course.",
          paragraph_de:
            "Beim Beitritt zum Kurs muss der Studierende eine vorherige Bewertung der Fähigkeiten absolvieren, um sie später mit den Ergebnissen der abschließenden Bewertung zu vergleichen. Dies dient dazu, den Nutzen des Studierenden nach Abschluss des Kurses festzustellen.",
        },
        {
          id: "7",
          src: "/imgs/projects/4/8.png",
          thumb: "/imgs/projects/4/8.png",
          head_en: "Inbox",
          head_de: "Eingangspostfach",
          paragraph_en:
            "When you join the course, invitations will be sent to you regarding all events, video meetings with instructors, and tests. You will be reminded of them later.",
          paragraph_de:
            "Wenn Sie dem Kurs beitreten, werden Ihnen Einladungen zu allen Veranstaltungen, Video-Meetings mit den Lehrern und Tests gesendet. Sie werden später daran erinnert.",
        },
        {
          id: "8",
          src: "/imgs/projects/4/9.png",
          thumb: "/imgs/projects/4/9.png",
          head_en: "Invitation email",
          head_de: "Einladungs-E-Mail",
          paragraph_en:
            "The invitation includes the time of the event and its details.",
          paragraph_de:
            "Die Einladung enthält die Zeit des Ereignisses und seine Details.",
        },
        {
          id: "8",
          src: "/imgs/projects/4/11.png",
          thumb: "/imgs/projects/4/11.png",
          head_en: "Model Viewer",
          head_de: "Model Viewer",
          paragraph_en: "",
          paragraph_de: "",
        },
      ],
    },
    {
      date: "27-06-2021",
      type: "desktop",
      desc_en:
        "The platform is a bridge between humans and robots, facilitating communication through user-friendly, intuitive interfaces. Users can design robot paths using a CAD model and view simulations in graphical form. The platform also provides visualization of robot and equipment models, enabling the extraction",

      desc_de:
        "Die Plattform ist eine Brücke zwischen Menschen und Robotern und erleichtert die Kommunikation durch benutzerfreundliche, intuitive Benutzeroberflächen. Benutzer können Roboterpfade mithilfe eines CAD-Modells entwerfen und Simulationen in grafischer Form anzeigen. Die Plattform bietet auch eine Visualisierung von Roboter- und Ausrüstungsmodellen, die Extraktion ermöglicht.",
      id: "3",
      name: "EASY-ROB",
      data: [
        {
          id: "1",
          src: "/imgs/projects/8/1.gif",
          thumb: "/imgs/projects/8/1.gif",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "2",
          src: "/imgs/projects/8/2.gif",
          thumb: "/imgs/projects/8/2.gif",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "3",
          src: "/imgs/projects/8/3.gif",
          thumb: "/imgs/projects/8/3.gif",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "4",
          src: "/imgs/projects/8/4.png",
          thumb: "/imgs/projects/8/4.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "5",
          src: "/imgs/projects/8/5.png",
          thumb: "/imgs/projects/8/5.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "6",
          src: "/imgs/projects/8/6.png",
          thumb: "/imgs/projects/8/6.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "7",
          src: "/imgs/projects/8/7.png",
          thumb: "/imgs/projects/8/7.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
      ],
    },
    {
      date: "27-01-2021",
      type: "desktop",
      desc_en:
        "EASY-ROB™ Geo Assist is a tool to convert the neutral 3D data format STEP into the triangulated format IGP and STL",
      desc_de:
        "EASY-ROB™ Geo Assist ist ein Tool zur Konvertierung des neutralen 3D-Datenformats STEP in das triangulierte Format IGP und STL",
      id: "4",
      name: "EASY-ROB Geo Assist – STEP file Converter",
      data: [
        {
          id: "1",
          src: "https://easy-rob.com/wp-content/uploads/2021/01/er-geo-assist.jpg",
          thumb:
            "https://easy-rob.com/wp-content/uploads/2021/01/er-geo-assist.jpg",
          head_en: "Website link",
          head_de: "Website link",
          paragraph_en: `<a href="https://easy-rob.com/en/2021/01/27/easy-rob-geo-assist-2">https://easy-rob.com/en/2021/01/27/easy-rob-geo-assist-2</a>`,

          paragraph_de: `<a href="https://easy-rob.com/en/2021/01/27/easy-rob-geo-assist-2">https://easy-rob.com/en/2021/01/27/easy-rob-geo-assist-2</a>`,
        },
      ],
    },
    {
      date: "17-9-2019",
      type: "mobile",
      id: "5",
      desc_en:
        "An android application that tracks syrian pound in front of the other international currency",
      desc_de:
        "Eine Android-Anwendung, die den syrischen Pfund im Vergleich zu anderen internationalen Währungen verfolgt.",

      name: "sp-stocks",
      data: [
        {
          id: "1",
          src: "/imgs/projects/2/1.jpg",
          thumb: "/imgs/projects/2/1.jpg",
          head_en: "The main screen",
          head_de: "Der Hauptbildschirm",
          paragraph_en:
            "An animated screen displaying the logo in a moving manner.",
          paragraph_de:
            "Ein animierter Bildschirm, der ein sich bewegendes Logo zeigt.",
        },
        {
          id: "2",
          src: "/imgs/projects/2/2.jpg",
          thumb: "/imgs/projects/2/2.jpg",
          head_en: "Currency exchange rate",
          head_de: "Währungsumrechnungskurs",
          paragraph_en:
            "Displaying the value of the Syrian currency against global and Arab currencies.",
          paragraph_de:
            "Anzeige des Wertes der syrischen Währung gegenüber globalen und arabischen Währungen.",
        },
        {
          id: "3",
          src: "/imgs/projects/2/3.jpg",
          thumb: "/imgs/projects/2/3.jpg",
          head_en: "Precious metals screen",
          head_de: "Edelmetall-Anzeige",
          paragraph_en:
            "Display screen showing the value of precious metals in front of the Syrian Lira.",
          paragraph_de:
            "Anzeigebildschirm, der den Wert von Edelmetallen vor dem syrischen Lira zeigt",
        },
        {
          id: "4",
          src: "/imgs/projects/2/4.jpg",
          thumb: "/imgs/projects/2/4.jpg",
          head_en: "urrency conversion machine",
          head_de: "Währungsumrechnungsmaschine",
          paragraph_en:
            "Calculator for converting between all Arab and global currencies.",
          paragraph_de:
            "Rechner zur Umrechnung zwischen allen arabischen und globalen Währungen.",
        },
      ],
    },
    {
      date: "25-11-2019",
      type: "mobile",
      id: "6",
      desc_en:
        "An android app for Emma-tell company which is a smart phones retailer that provides selling and after-sell service.",
      desc_de:
        "Eine Android-App für das Unternehmen Emma-tell, einen Einzelhändler für Smartphones, der Verkaufs- und Kundendienstleistungen anbietet.",

      name: "Emma-tel",
      data: [
        {
          id: "1",
          src: "/imgs/projects/3/1.jpg",
          thumb: "/imgs/projects/3/1.jpg",
          head_en: "Phones screen",
          paragraph_en:
            "Screen displaying all available mobile devices with the ability to filter by the producing company.",
          head_de: "Telefonbildschirm",
          paragraph_de:
            "Bildschirm, der alle verfügbaren Mobilgeräte anzeigt und die Möglichkeit bietet, nach dem Hersteller zu filtern.",
        },
        {
          id: "2",
          src: "/imgs/projects/3/2.jpg",
          thumb: "/imgs/projects/3/2.jpg",
          head_en: "Offers screen",
          paragraph_en:
            "Screen displaying all available offers in the company.",
          head_de: "Angebotsbildschirm",
          paragraph_de:
            "Bildschirm, der alle verfügbaren Angebote im Unternehmen anzeigt.",
        },
        {
          id: "3",
          src: "/imgs/projects/3/3.jpg",
          thumb: "/imgs/projects/3/3.jpg",
          head_en: "Mobile phone specifications",
          paragraph_en:
            "Screen for displaying the specifications of the selected mobile phone.",
          head_de: "Handy-Spezifikationen",
          paragraph_de:
            "Bildschirm zur Anzeige der Spezifikationen des ausgewählten Mobiltelefons",
        },
        {
          id: "4",
          src: "/imgs/projects/3/4.jpg",
          thumb: "/imgs/projects/3/4.jpg",
          head_en: "Company branches",
          paragraph_en:
            "Screen displaying all company branches in Syria on a map with the ability to browse information for each branch.",
          head_de: "Firmenfilialen",
          paragraph_de:
            "Bildschirm, der alle Filialen des Unternehmens in Syrien auf einer Karte anzeigt und die Möglichkeit bietet, Informationen für jede Filiale zu durchsuchen.",
        },
        {
          id: "5",
          src: "/imgs/projects/3/5.jpg",
          thumb: "/imgs/projects/3/5.jpg",
          head_en: "Accessories screen",
          paragraph_en:
            "Screen for displaying the available accessories in the company.",
          head_de: "Zubehör-Bildschirm",
          paragraph_de:
            "Bildschirm zur Anzeige des verfügbaren Zubehörs im Unternehmen.",
        },
        {
          id: "6",
          src: "/imgs/projects/3/6.jpg",
          thumb: "/imgs/projects/3/6.jpg",
          head_en: "Events screen",
          head_de: "Veranstaltungen-Bildschirm",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "7",
          src: "/imgs/projects/3/7.jpg",
          thumb: "/imgs/projects/3/7.jpg",
          head_en: "Tablet devices screen",
          head_de: "Tablet-Geräte-Bildschirm",
          paragraph_en:
            "Screen for displaying all available tablet devices in the company.",
          paragraph_de:
            "Bildschirm zur Anzeige aller verfügbaren Tablet-Geräte im Unternehmen.",
        },
        {
          id: "8",
          src: "/imgs/projects/3/8.jpg",
          thumb: "/imgs/projects/3/8.jpg",
          head_en: "Comparison screen",
          head_de: "Vergleichsbildschirm",
          paragraph_en: "TScreen for comparing device specifications.",
          paragraph_de: "Bildschirm zum Vergleich der Gerätespezifikationen.",
        },
        {
          id: "9",
          src: "/imgs/projects/3/9.jpg",
          thumb: "/imgs/projects/3/9.jpg",
          head_en: "Mobile phone status on the Syrian network",
          head_de: "Status des Mobiltelefons im syrischen Netzwerk",
          paragraph_en:
            "Screen to check the mobile phone status on the Syrian network by entering the device IMEI.",
          paragraph_de:
            "Bildschirm zur Überprüfung des Mobiltelefonstatus im syrischen Netzwerk durch Eingabe der Gerätekennung.",
        },
        {
          id: "10",
          src: "/imgs/projects/3/10.png",
          thumb: "/imgs/projects/3/10.png",
          head_en: "About Us screen",
          head_de: "Über uns-Bildschirm",
          paragraph_en:
            "Screen for displaying general information about the company.",
          paragraph_de:
            "Bildschirm zur Anzeige allgemeiner Informationen über das Unternehmen.",
        },
        {
          id: "11",
          src: "/imgs/projects/3/11.jpg",
          thumb: "/imgs/projects/3/11.jpg",
          head_en: "Profile screen",
          head_de: "Profil-Bildschirm",
          paragraph_en:
            "Screen for displaying personal profile information with the ability to edit.",
          paragraph_de:
            "Bildschirm zur Anzeige persönlicher Profilinformationen mit der Möglichkeit zur Bearbeitun.",
        },
        {
          id: "12",
          src: "/imgs/projects/3/12.jpg",
          thumb: "/imgs/projects/3/12.jpg",
          head_en: "Login screen",
          head_de: "Anmeldungs-Bildschirm",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "13",
          src: "/imgs/projects/3/13.jpg",
          thumb: "/imgs/projects/3/13.jpg",
          head_en: "Tips screen",
          head_de: "Tipps-Bildschirm",
          paragraph_en: "Screen for displaying tips for each mobile phone.",
          paragraph_de:
            "Bildschirm zur Anzeige von Tipps für jedes Mobiltelefon.",
        },
        {
          id: "14",
          src: "/imgs/projects/3/15.jpg",
          thumb: "/imgs/projects/3/15.jpg",
          head_en: "Notifications screen",
          head_de: "Benachrichtigungen-Bildschirm",
          paragraph_en: "",
          paragraph_de: "",
        },
      ],
    },
    {
      date: "16-10-2023",
      type: "desktop",
      name: "Sales of Point",
      desc_en:
        "A desktop application for a company dealing with grain and seed trading. The application aims to organize products, generate invoices, and store the purchase history for each customer. Additionally, it has the ability to print invoices and convert them to PDF files.",
      desc_de:
        "Eine Desktop-Anwendung für ein Unternehmen, das mit Getreide- und Saatguthandel beschäftigt ist. Die Anwendung soll Produkte organisieren, Rechnungen erstellen und den Kaufverlauf für jeden Kunden speichern. Darüber hinaus verfügt sie über die Möglichkeit, Rechnungen auszudrucken und in PDF-Dateien umzuwandeln.",
      id: "7",
      data: [
        {
          id: "1",
          src: "/imgs/projects/5/1.png",
          thumb: "/imgs/projects/5/1.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "2",
          src: "/imgs/projects/5/2.png",
          thumb: "/imgs/projects/5/2.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "3",
          src: "/imgs/projects/5/3.png",
          thumb: "/imgs/projects/5/3.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "4",
          src: "/imgs/projects/5/4.png",
          thumb: "/imgs/projects/5/4.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "5",
          src: "/imgs/projects/5/5.png",
          thumb: "/imgs/projects/5/5.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "6",
          src: "/imgs/projects/5/6.png",
          thumb: "/imgs/projects/5/6.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "7",
          src: "/imgs/projects/5/7.png",
          thumb: "/imgs/projects/5/7.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
        {
          id: "2",
          src: "/imgs/projects/5/8.png",
          thumb: "/imgs/projects/5/8.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
      ],
    },

    {
      date: "12-12-2020",
      type: "fullstack",
      name: "Mabsoot",
      desc_en:
        "Events project in Beirut, help users to book an event, in addition, to create their own events, the event can be a party or any entertainment activities, in this project, I dealt with banking API, SMS API and images cloud hosting I used ASP.NET to build the backend and Flutter framework to make the mobile frontend",
      desc_de:
        "Eine Desktop-Anwendung für ein Unternehmen, das mit Getreide- und Saatguthandel beschäftigt ist. Die Anwendung soll Produkte organisieren, Rechnungen erstellen und den Kaufverlauf für jeden Kunden speichern. Darüber hinaus verfügt sie über die Möglichkeit, Rechnungen auszudrucken und in PDF-Dateien umzuwandeln.",
      id: "9",
      data: [
        {
          id: "1",
          src: "/imgs/projects/7/ (1).png",
          thumb: "/imgs/projects/7/ (1).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "2",
          src: "/imgs/projects/7/ (2).png",
          thumb: "/imgs/projects/7/ (2).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "3",
          src: "/imgs/projects/7/ (3).png",
          thumb: "/imgs/projects/7/ (3).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "4",
          src: "/imgs/projects/7/ (4).png",
          thumb: "/imgs/projects/7/ (4).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "5",
          src: "/imgs/projects/7/ (5).png",
          thumb: "/imgs/projects/7/ (5).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "6",
          src: "/imgs/projects/7/ (6).png",
          thumb: "/imgs/projects/7/ (6).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "7",
          src: "/imgs/projects/7/ (7).png",
          thumb: "/imgs/projects/7/ (7).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "8",
          src: "/imgs/projects/7/ (8).png",
          thumb: "/imgs/projects/7/ (8).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "9",
          src: "/imgs/projects/7/ (9).png",
          thumb: "/imgs/projects/7/ (9).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "10",
          src: "/imgs/projects/7/ (10).png",
          thumb: "/imgs/projects/7/ (10).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "11",
          src: "/imgs/projects/7/ (11).png",
          thumb: "/imgs/projects/7/ (11).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "12",
          src: "/imgs/projects/7/ (12).png",
          thumb: "/imgs/projects/7/ (12).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "13",
          src: "/imgs/projects/7/ (13).png",
          thumb: "/imgs/projects/7/ (13).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "14",
          src: "/imgs/projects/7/ (14).png",
          thumb: "/imgs/projects/7/ (14).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "15",
          src: "/imgs/projects/7/ (15).png",
          thumb: "/imgs/projects/7/ (15).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "16",
          src: "/imgs/projects/7/ (16).png",
          thumb: "/imgs/projects/7/ (16).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "17",
          src: "/imgs/projects/7/ (17).png",
          thumb: "/imgs/projects/7/ (17).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "18",
          src: "/imgs/projects/7/ (18).png",
          thumb: "/imgs/projects/7/ (18).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "19",
          src: "/imgs/projects/7/ (19).png",
          thumb: "/imgs/projects/7/ (19).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "20",
          src: "/imgs/projects/7/ (20).png",
          thumb: "/imgs/projects/7/ (20).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "21",
          src: "/imgs/projects/7/ (21).png",
          thumb: "/imgs/projects/7/ (21).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "22",
          src: "/imgs/projects/7/ (23).png",
          thumb: "/imgs/projects/7/ (23).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "24",
          src: "/imgs/projects/7/ (24).png",
          thumb: "/imgs/projects/7/ (24).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "25",
          src: "/imgs/projects/7/ (25).png",
          thumb: "/imgs/projects/7/ (25).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "26",
          src: "/imgs/projects/7/ (26).png",
          thumb: "/imgs/projects/7/ (26).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "27",
          src: "/imgs/projects/7/ (27).png",
          thumb: "/imgs/projects/7/ (27).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "28",
          src: "/imgs/projects/7/ (28).png",
          thumb: "/imgs/projects/7/ (28).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "29",
          src: "/imgs/projects/7/ (29).png",
          thumb: "/imgs/projects/7/ (29).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "30",
          src: "/imgs/projects/7/ (30).png",
          thumb: "/imgs/projects/7/ (30).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "31",
          src: "/imgs/projects/7/ (31).png",
          thumb: "/imgs/projects/7/ (31).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
        {
          id: "32",
          src: "/imgs/projects/7/ (32).png",
          thumb: "/imgs/projects/7/ (32).png",
          head_en: "",
          head_de: "",
          paragraph_en: "",
          paragraph_de: "",
        },
      ],
    },
    {
      date: "7-16-2018",
      type: "fullstack",
      name: "Syria Shop",
      desc_en: `
      Shop Website supported by these features: 
      1-  using three algorithms to make the recommendation system:
        - collaborative filtering
        -  content-based system
        -  hybrid recommendation system (our own system), we made a new recommendation system by merging both algorithms above.
      2- evaluation system (to ensure that our new recommendation system produces good results and determine the best recommendation algorithm. We distributed the three algorithms across Syria regions and developed an evaluation system to make a decision on the system to be used in all regions later on).
      3- smart comment system (users can comment on products, and the owner of the product can determine the percentage of positive and negative comments using a circular chart without reading the comments).
      4- independent banking system (in Syria, where there is no electronic payment option, we built our independent banking system to enable users to make purchases).
      5- search engine (we developed our own search engine to help users easily find their desired products).
      6- statistics (product owners can access various statistics about their products, such as profit depending on the time period, market share, client loyalty, top requested and most profitable products, profit depending on regions).
      7- related products (when users view a product, they can see related products based on mathematical calculations of similarity between products).
    
    Finally, we used the waterfall process model to manage the project. This model is one of the plan-driven processes`,
      desc_de: `
      Shop-Website unterstützt von folgenden Funktionen:
1- Verwendung von drei Algorithmen zur Erstellung des Empfehlungssystems:

Kollaborative Filterung
Inhaltsbasiertes System
Hybrides Empfehlungssystem (unser eigenes System), wir haben ein neues Empfehlungssystem erstellt, indem wir beide oben genannten Algorithmen kombiniert haben.
2- Evaluierungssystem (um sicherzustellen, dass unser neues Empfehlungssystem gute Ergebnisse liefert und den besten Empfehlungsalgorithmus ermitteln. Wir haben die drei Algorithmen auf die Regionen in Syrien verteilt und ein Evaluierungssystem entwickelt, um später eine Entscheidung über das System zu treffen, das in allen Regionen verwendet werden soll).
3- Intelligentes Kommentarsystem (Benutzer können Produkte kommentieren, und der Produktbesitzer kann mithilfe eines Kreisdiagramms den Prozentsatz positiver und negativer Kommentare ohne das Lesen der Kommentare ermitteln).
4- Unabhängiges Bankensystem (In Syrien gibt es keine elektronische Zahlungsmöglichkeit, daher haben wir unser unabhängiges Bankensystem entwickelt, um Benutzern den Kauf zu ermöglichen).
5- Suchmaschine (Wir haben unsere eigene Suchmaschine entwickelt, um Benutzern dabei zu helfen, ihre gewünschten Produkte leicht zu finden).
6- Statistiken (Produktbesitzer können verschiedene Statistiken über ihre Produkte abrufen, wie z.B. Gewinn abhängig von der Zeitspanne, Markanteil, Kundenloyalität, am häufigsten nachgefragte und profitabelste Produkte, Gewinn abhängig von Regionen).
7- Verwandte Produkte (Wenn Benutzer ein Produkt ansehen, können sie ähnliche Produkte basierend auf mathematischen Berechnungen der Ähnlichkeit zwischen Produkten sehen).
Abschließend haben wir das Wasserfall-Modell verwendet, um das Projekt zu verwalten. Dieses Modell ist eines der plangetriebenen Verfahren.`,
      id: "8",
      data: [
        {
          id: "1",
          src: "/imgs/projects/6/1.png",
          thumb: "/imgs/projects/6/1.png",
          head_en: "",
          head_de: "",
          paragraph_en: "",

          paragraph_de: "",
        },
      ],
    },
  ],

  volunteering: [
    {
      date: "22-05-2020",
      name_en: "Vocational training & Youth development officer",
      name_de: "Berufsausbildung & Jugendentwicklungsbeauftragter",
      desc_en: `- Developed an information system to streamline benefit data organization and automate administrative tasks for the foundation.
      - Led the planning process for a new training round, including conducting a needs analysis, researching potential trainers, and handling procurement documentation.
      - Completed ICDL training program, attaining proficiency in essential computer skills.
      - Delivered comprehensive IT support services to the foundation, ensuring smooth operations and resolving technical issues promptly`,
      desc_de: `-Entwickelte ein Informationssystem zur Optimierung der Organisation von Leistungsdaten und zur Automatisierung administrativer Aufgaben für die Stiftung.
      - Leitete den Planungsprozess für eine neue Schulungsrunde, einschließlich Durchführung einer Bedarfsanalyse, Recherche potenzieller Trainer und Bearbeitung von Beschaffungsdokumenten.
      - Schloss das ICDL-Schulungsprogramm ab und erwarb Kenntnisse in grundlegenden Computerfähigkeiten.
      - Erbrachte umfassende IT-Supportdienste für die Stiftung, gewährleistete reibungslose Abläufe und löste technische Probleme umgehend`,
      id: "1",
      data: [
        {
          id: "1",
          src: "/imgs/volunteering/12.jpg",
          thumb: "/imgs/volunteering/12.jpg",
        },
        {
          id: "2",
          src: "/imgs/volunteering/10.jpg",
          thumb: "/imgs/volunteering/10.jpg",
        },
        {
          id: "3",
          src: "/imgs/volunteering/4.jpg",
          thumb: "/imgs/volunteering/4.jpg",
        },
      ],
    },
    {
      date: "22-05-2021",
      name_en: "ICDL Trainer",
      name_de: "Berufsausbildung & Jugendentwicklungsbeauftragter",
      desc_en: `With a proven track record of excellence in education and professional development, I have had the privilege of instructing and guiding a diverse cohort of 260 students through an extensive curriculum encompassing 13 comprehensive ICDL courses. My role as an ICDL trainer goes beyond imparting technical skills; it involves cultivating a dynamic and engaging learning environment that fosters not only the mastery of essential computer competencies but also the development of critical thinking, problem-solving, and digital literacy`,
      desc_de: `Mit einer nachgewiesenen Erfolgsbilanz in der Bildung und beruflichen Entwicklung hatte ich das Privileg, eine vielfältige Gruppe von 260 Studierenden durch einen umfassenden Lehrplan zu unterrichten und anzuleiten, der 13 umfassende ICDL-Kurse umfasst. Meine Rolle als ICDL-Trainer geht über die Vermittlung technischer Fähigkeiten hinaus. Sie beinhaltet die Gestaltung einer dynamischen und ansprechenden Lernumgebung, die nicht nur die Meisterschaft in grundlegenden Computerkompetenzen fördert, sondern auch die Entwicklung von kritischem Denken, Problemlösungsfähigkeiten und digitaler Kompetenz`,
      id: "2",
      data: [
        {
          id: "1",
          src: "/imgs/volunteering/8.jpg",
          thumb: "/imgs/volunteering/8.jpg",
        },
        {
          id: "2",
          src: "/imgs/volunteering/2.jpg",
          thumb: "/imgs/volunteering/2.jpg",
        },
        {
          id: "3",
          src: "/imgs/volunteering/3.jpg",
          thumb: "/imgs/volunteering/3.jpg",
        },
        {
          id: "3",
          src: "/imgs/volunteering/5.jpg",
          thumb: "/imgs/volunteering/5.jpg",
        },
      ],
    },
  ],

  project_filters: {
    "data-stack": {
      trigger: "filter",
      data: [
        { label: "Front-End", value: "frontend" },
        { label: "Back-End", value: "backend" },
        { label: "Full-Stack", value: "fullstack" },
        { label: "Mobile", value: "mobile" },
        { label: "Desktop", value: "desktop" },
      ],
    },
    "data-date": {
      trigger: "sort",
      data: [
        { label_en: "Newest", value: "desc", label_de: "Neueste" },
        { label_en: "Oldest", value: "asc", label_de: "Älteste" },
      ],
    },
  },
};

export default switchConfigByLanguage(
  profileConfig,
  i18next.language.replace(/-.*/, ""),
  [...i18next.languages]
) as ProfileConfigs;
