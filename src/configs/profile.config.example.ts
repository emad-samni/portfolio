import { i18next } from "../setups/languages";
import { switchConfigByLanguage } from "../utils/configs/configs-manipulation";
import {
  FaBehance,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedinIn,
} from "react-icons/fa";
import reactIcon from "devicon/icons/react/react-original.svg";
import mongoDBIcon from "devicon/icons/mongodb/mongodb-original.svg";
import phpIcon from "devicon/icons/php/php-original.svg";
import nestJsIcon from "devicon/icons/nestjs/nestjs-plain.svg";
import laravelIcon from "devicon/icons/laravel/laravel-plain.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-plain.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-plain.svg";
import circleciIcon from "devicon/icons/circleci/circleci-plain.svg";
import dockerIcon from "devicon/icons/docker/docker-plain.svg";
import graphqlIcon from "devicon/icons/graphql/graphql-plain.svg";
import gitIcon from "devicon/icons/git/git-plain.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-plain.svg";
import reduxIcon from "devicon/icons/redux/redux-original.svg";
import htmlIcon from "devicon/icons/html5/html5-plain.svg";
import cssIcon from "devicon/icons/css3/css3-plain.svg";
import angularjsIcon from "devicon/icons/angularjs/angularjs-plain.svg";

import { ProfileConfigs } from "../interfaces/profile-configs";

const profileConfig = {
  first_name: "Emad",

  last_name: "Samni",

  profile_pic_main: "/imgs/profile.png",

  profile_pic_about_me: "/imgs/my-rect-image.jpg",

  email: "emad.samni.it@gmail.com",

  bio_en: `Well-qualified developer familiar with a wide range of programming utilities and languages, knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease. Collaborative team player with excellent technical abilities, offering 6 years of related experience.`,
  bio_de: `Qualifizierter Entwickler mit umfassender Erfahrung in einer Vielzahl von Programmierwerkzeugen und -sprachen, der mit Backend- und Frontend-Entwicklungsanforderungen vertraut ist. In der Lage, jeden Teil des Prozesses mühelos zu handhaben. Kollaborativer Teamplayer mit ausgezeichneten technischen Fähigkeiten und 6 Jahren einschlägiger Erfahrung.`,

  skills_introduction_en:
    "As I progressed in my career as a software developer and worked on numerous small and medium-sized projects, I acquired a diverse set of skills from these experiences.",
  skills_introduction_de:
    "Im Laufe meiner Karriere als Softwareentwickler und durch die Arbeit an zahlreichen kleinen und mittelgroßen Projekten habe ich eine vielfältige Palette an Fähigkeiten erworben.",

  professions_en: ["Frontend Developer", "Fullstack Developer"],
  professions_de: ["Frontend-Entwickler", "Fullstack-Entwickler"],

  cvs: [
    {
      type: "Front-End",
      link: "/cvs/my-cv.pdf",
    },
  ],

  years_of_experiance: 6,

  social_media: [
    {
      link: "https://www.linkedin.com/in/ammar-amame-158931167/",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },

    { link: "https://github.com/ammaramame", icon: FaGithub, label: "Github" },

    {
      link: "https://www.behance.net/ammaramami",
      icon: FaBehance,
      label: "Behance",
    },

    {
      link: "mailto: ammar.amami.it@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ],

  skill_set: [
    { icon: reactIcon, value: 9, title: "React.JS", priorty: 1 },
    { icon: typescriptIcon, value: 7, title: "Typescript", priorty: 2 },
    { icon: javascriptIcon, value: 8, title: "Javascript", priorty: 3 },
    { icon: nestJsIcon, value: 7, title: "NestJs", priorty: 4 },
    { icon: circleciIcon, value: 4, title: "CI/CD", priorty: 6 },
    { icon: dockerIcon, value: 7, title: "Docker", priorty: 5 },
    { icon: undefined, value: 7, title: "Microservices", priorty: 7 },
    { icon: laravelIcon, value: 7, title: "Laravel", priorty: 8 },
    { icon: graphqlIcon, value: 7, title: "graphQL", priorty: 9 },
    { icon: gitIcon, value: 7, title: "GIT", priorty: 10 },
    { icon: phpIcon, value: 7, title: "PHP", priorty: 11 },
    { icon: mysqlIcon, value: 6, title: "MySQL", priorty: 12 },
    { icon: mongoDBIcon, value: 4, title: "mongoDB", priorty: 13 },
    { icon: reduxIcon, value: 9, title: "Redux", priorty: 14 },
    { icon: htmlIcon, value: 9, title: "HTML", priorty: 15 },
    { icon: cssIcon, value: 8, title: "CSS", priorty: 16 },
    { icon: undefined, value: 3, title: "Testing", priorty: 17 },
    { icon: angularjsIcon, value: 5, title: "Angular", priorty: 18 },
  ],

  personal_information: [
    { key_en: "first name", key_de: "Vorname", value: "Ammar" },
    { key_en: "last name", key_de: "Nachname", value: "Amami" },
    { key_en: "age", key_de: "Alter", value: "26" },
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
      value: "ammar.amami.it@gmail.com",
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
      value_en: "English(C1), Arabic(C1), German(A1)",
      value_de: "Englisch(C1), Arabisch(C1), Deutsch(A1)",
    },
  ],

  experince: [
    {
      icon: FaBriefcase,
      title_en: "Web Developer",
      title_de: "Web-Entwickler",
      time_en: "2017-Present",
      time_de: "2017-heute",
      description_list_en: [
        "During this period, I have worked with some local and international clients on a number of medium- and small-term projects.",
        "Some of these projects can be found in the Portfolio section.",
      ],
      description_list_de: [
        "In dieser Zeit habe ich mit einigen lokalen und internationalen Kunden an einer Reihe von mittel- und kurzfristigen Projekten gearbeitet",
        "Einige dieser Projekte sind im Abschnitt Portfolio zu finden.",
      ],
      place: "Freelance",
    },
    {
      icon: FaBriefcase,
      title_en: "Front-end Developer",
      title_de: "Front-End-Entwickler",
      time_en: "2020-Present",
      time_de: "2020-heute",
      description_list_en: [
        "Working on a popular platform specialized in providing services to farmers in Kenya such as selling crops, renting fields, statistical services on crops, etc.",
        "Working as a squad leader.",
        "Technologies used include Laravel, ReactJS, Typescript, Docker, Microservices, PostgreSQL, and GraphQL.",
      ],
      description_list_de: [
        "Arbeit an einer beliebten Plattform, die sich auf die Bereitstellung von Dienstleistungen für Landwirte in Kenia spezialisiert hat, wie zum Beispiel den Verkauf von Ernten, die Vermietung von Feldern, statistische Dienstleistungen zu Ernten usw.",
        "Arbeit als Squad-Leiter.",
        "Verwendete Technologien sind Laravel, ReactJS, Typescript, Docker, Microservices, PostgreSQL und GraphQL.",
      ],
      place: "L-One systems GMBH",
    },
  ],

  education: [
    {
      icon: "FaGraduationCap",
      title_en: "Bachelor in Computer Technologies",
      title_de: "Bachelor in Computertechnologien",

      time: "Jan 2015 - Dec 2020",
      time_de: "Jan 2015 - Dez 2020",

      description_list_en: [
        "Successfully completed a number of mini-projects in multiple programming languages such as C#, Visual Basic C++, and Java.",
        "Gained extensive training and successfully accomplished all courses for Computer programming.",
        "Completed a graduation project entitled User tracking technology across browsers",
        "Graduated with an average of 77.87%",
      ],
      description_list_de: [
        "Erfolgreiche Durchführung einer Reihe von Mini-Projekten in mehreren Programmiersprachen wie C#, Visual Basic C++ und Java.",
        "Erhalt umfangreicher Schulungen und erfolgreicher Abschluss aller Kurse für Computerprogrammierung.",
        "Abschluss eines Abschlussprojekts mit dem Titel User-Tracking-Technologie über Browser hinweg",
        "Abschluss mit einem Durchschnitt von 77,87%.",
      ],

      place_en: "Damascus University",
      place_de: "Universität von Damaskus",
    },
    {
      icon: "FaGraduationCap",
      title_en: "Computer Technology Profession Diploma",
      title_de: "Diplom für Computer-Technologieberufe",
      time: "Dec 2012 - Jul 2015",
      description_list_en: [
        "Academic Excellence in Programming, Networking and Mathematics",
        "Graduated with an average of 91.07%",
      ],
      description_list_de: [
        "Akademische Exzellenz in Programmierung, Netzwerktechnologie und Mathematik",
        "Mit einem Durchschnitt von 91,07% abgeschlossen",
      ],
      place_en: "BAB AL-JABIYA HIGH SCHOOL",
      place_de: "BAB AL-JABIYA HIGH SCHOOL",
    },
  ],

  statistics: [
    {
      value: "+5",
      title_en: "years of Experience",
      title_de: "Jahre Erfahrung",
    },
    {
      value: "+12",
      title_en: "Completed Projects",
      title_de: "Abgeschlossene Projekte",
    },
    { value: "+6", title_en: "Happy Customers", title_de: "Zufriedene Kunden" },
    { value: "+0", title_en: "Awards Winner", title_de: "Preisgewinner" },
  ],

  projects: [
    {
      date: "10-12-2018",
      type: "frontend",
      name: "Social M",
      id: "1",
      data: [
        {
          id: "1",
          src: "/imgs/projects/1/787c10133829781.61c71c52c0570.png",
          thumb: "/imgs/projects/1/787c10133829781.61c71c52c0570.png",
          head_en: "Feedback Page",
          head_de: "Feedback-Seite",
          paragraph_en:
            "This page contains all the main events happening in your network.",
          paragraph_de:
            "Diese Seite enthält alle wichtigen Ereignisse, die in Ihrem Netzwerk stattfinden.",
        },
        {
          id: "2",
          src: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          thumb: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          head_en: "Media Page",
          head_de: "Medienseite",
          paragraph_en:
            "This page shows all the media events in your network (videos, images, etc.).",
          paragraph_de:
            "Diese Seite zeigt alle Medienereignisse in Ihrem Netzwerk (Videos, Bilder usw.).",
        },
        {
          id: "3",
          src: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          thumb: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          head_en: "Profile Page",
          head_de: "Profilseite",
          paragraph_en:
            "This page will contain your profile data and activities.",
          paragraph_de: "Diese Seite enthält Ihre Profildaten und Aktivitäten.",
        },
        {
          id: "4",
          src: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          thumb: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          head_en: "Messenger",
          head_de: "Messenger",
          paragraph_en:
            "This is a dialog that pops up and shows all the contacts and messages that you have received and sent over time.",
          paragraph_de:
            "Dies ist ein Dialogfeld, das alle Kontakte und Nachrichten anzeigt, die Sie im Laufe der Zeit erhalten und gesendet haben.",
        },
        {
          id: "5",
          src: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          thumb: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          head_en: "Create Chat Dialog",
          head_de: "Chat-Dialog erstellen",
          paragraph_en:
            "This dialog allows you to create a new chat with one or more users in your contact list.",
          paragraph_de:
            "Dieser Dialog ermöglicht es Ihnen, einen neuen Chat mit einem oder mehreren Benutzern in Ihrer Kontaktliste zu erstellen.",
        },
        {
          id: "6",
          src: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          thumb: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          head_en: "Delete Chat Dialog",
          head_de: "Löschen Sie Chat-Dialog",
          paragraph_en:
            "This dialog is used to confirm deleting one chat member.",
          paragraph_de:
            "Dieser Dialog wird verwendet, um das Löschen eines Chat-Mitglieds zu bestätigen.",
        },
        {
          id: 7,
          src: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          thumb: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          head_en: "Settings Menu",
          head_de: "Einstellungen-Menü",
          paragraph_en:
            "This menu contains some general yet frequently used settings.",
          paragraph_de:
            "Dieses Menü enthält einige allgemeine und häufig verwendete Einstellungen.",
        },
        {
          id: 8,
          src: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          thumb: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          head_en: "Change Chat Color",
          head_de: "Ändern Sie Chat-Farbe",
          paragraph_en: "This dialog is used to change the chat color.",
          paragraph_de:
            "Dieser Dialog wird verwendet, um die Chat-Farbe zu ändern.",
        },
      ],
    },
    {
      date: "05-01-2018",
      type: "fullstack",
      id: "2",
      name: "My Manga",
      data: [
        {
          id: "1",
          src: "/imgs/projects/2/41beae134108299.61cdef7398cb1.png",
          thumb: "/imgs/projects/2/41beae134108299.61cdef7398cb1.png",
          head_en: "Home Page",
          head_de: "Startseite",
          paragraph_en:
            "This page contains an overview of the latest activities that occurred on the platform (manage, chapters, comments, etc.).",
          paragraph_de:
            "Diese Seite enthält eine Übersicht über die neuesten Aktivitäten auf der Plattform (verwalten, Kapitel, Kommentare usw.).",
        },
        {
          id: "2",
          src: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          thumb: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          head_en: "Manga Details Page",
          head_de: "Manga-Detailseite",
          paragraph_en:
            "This page is used to show all the details about a specific manga.",
          paragraph_de:
            "Diese Seite wird verwendet, um alle Details zu einem bestimmten Manga anzuzeigen.",
        },
        {
          id: "3",
          src: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          thumb: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          head_en: "Profile Page",
          head_de: "Profilseite",
          paragraph_en:
            "This page shows all the details about the user's profile as well as past activities on the platform.",
          paragraph_de:
            "Diese Seite zeigt alle Details zum Profil des Benutzers sowie vergangene Aktivitäten auf der Plattform an.",
        },
        {
          id: "4",
          src: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          thumb: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          head_en: "Team Page",
          head_de: "Teamseite",
          paragraph_en:
            "This page shows one team's details and their achievements on the platform (team members, added chapters, projects, etc.).",
          paragraph_de:
            "Diese Seite zeigt die Details eines Teams und deren Leistungen auf der Plattform (Teammitglieder, hinzugefügte Kapitel, Projekte usw.) an.",
        },
        {
          id: "5",
          src: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          thumb: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          head_en: "News Page",
          head_de: "Nachrichtenseite",
          paragraph_en:
            "The page is used to show all the manga news worldwide as well as news of the mymanga platform.",
          paragraph_de:
            "Die Seite wird verwendet, um alle Manga-Nachrichten weltweit sowie Nachrichten der MyManga-Plattform anzuzeigen.",
        },
        {
          id: "6",
          src: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          thumb: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          head_en: "Dashboard Main Page",
          head_de: "Hauptseite des Dashboards",
          paragraph_en:
            "This page shows general information about the platform and general info about the hosting server.",
          paragraph_de:
            "Diese Seite zeigt allgemeine Informationen zur Plattform und allgemeine Informationen zum Hosting-Server.",
        },
        {
          id: "7",
          src: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          thumb: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          head_en: "Dashboard Main Page",
          head_de: "Hauptseite des Dashboards",
          paragraph_en:
            "This page shows general information about the platform and general info about the hosting server.",
          paragraph_de:
            "Diese Seite zeigt allgemeine Informationen zur Plattform und allgemeine Informationen zum Hosting-Server.",
        },
        {
          id: "8",
          src: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          thumb: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          head_en: "Dashboard User Activities",
          head_de: "Aktivitäten des Benutzers auf dem Dashboard",
          paragraph_en:
            "This section shows one member's detailed activities over the platform.",
          paragraph_de:
            "Dieser Abschnitt zeigt die detaillierten Aktivitäten eines Mitglieds auf der Plattform.",
        },
        {
          id: "9",
          src: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          thumb: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          head_en: "Dashboard Users Management",
          head_de: "Benutzerverwaltung auf dem Dashboard",
          paragraph_en: "This table shows and manages all MyManga users' data.",
          paragraph_de:
            "Diese Tabelle zeigt und verwaltet alle Daten der MyManga-Benutzer.",
        },
        {
          id: "10",
          src: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          thumb: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          head_en: "Mangas Overview Page",
          head_de: "Übersichtsseite für Mangas",
          paragraph_en:
            "This page shows overview data for the mangas in the platform with the ability to filter the manga using the sidebar filter form.",
          paragraph_de:
            "Diese Seite zeigt eine Übersicht der Daten für die Mangas auf der Plattform mit der Möglichkeit, den Manga mithilfe des Sidebar-Filterformulars zu filtern.",
        },
        {
          id: "11",
          src: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          thumb: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          head_en: "Chat Bar",
          paragraph_en:
            "This bar shows all the conversations with other members.",
          head_de: "Chat-Leiste",
          paragraph_de:
            "Diese Leiste zeigt alle Gespräche mit anderen Mitgliedern.",
        },
        {
          id: "12",
          src: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          thumb: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          head_en: "Messages Box",
          paragraph_en: "This box shows all the chats for the current user.",
          head_de: "Nachrichtenfeld",
          paragraph_de:
            "Dieses Feld zeigt alle Chats für den aktuellen Benutzer.",
        },
        {
          id: "13",
          src: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          thumb: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          head_en: "Manga Releases Dialog",
          paragraph_en:
            "This dialog shows the recently added chapters to the platform by teams.",
          head_de: "Manga-Veröffentlichungsdialog",
          paragraph_de:
            "Dieser Dialog zeigt die kürzlich von Teams zur Plattform hinzugefügten Kapitel.",
        },
        {
          id: "14",
          src: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          thumb: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          head_en: "Ticketing System",
          paragraph_en:
            "This dialog is used to open new support tickets in MyManga platform that admins can respond to.",
          head_de: "Ticket-System",
          paragraph_de:
            "Dieser Dialog wird verwendet, um neue Support-Tickets in der MyManga-Plattform zu öffnen, auf die Administratoren antworten können.",
        },
        {
          id: "15",
          src: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          thumb: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          head_en: "Notification Menu",
          paragraph_en: "This menu shows all the user notifications.",
          head_de: "Benachrichtigungsmenü",
          paragraph_de:
            "Dieses Menü zeigt alle Benachrichtigungen des Benutzers.",
        },
        {
          id: "16",
          src: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          thumb: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          head_en: "Add Manga Form",
          head_de: "Manga hinzufügen Formular",
          paragraph_en:
            "This form is used by platform teams to add new manga series.",
          paragraph_de:
            "Dieses Formular wird von Plattform-Teams verwendet, um neue Manga-Serien hinzuzufügen.",
        },
        {
          id: "17",
          src: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          thumb: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          head_en: "Add Team Form",
          head_de: "Team hinzufügen Formular",
          paragraph_en: "This form is used to create a new team.",
          paragraph_de:
            "Dieses Formular wird verwendet, um ein neues Team zu erstellen.",
        },
        {
          id: "18",
          src: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          thumb: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          head_en: "Add Chapter Form",
          head_de: "Kapitel hinzufügen Formular",
          paragraph_en:
            "This form is used to add and manage new chapters on the MyMange platform.",
          paragraph_de:
            "Dieses Formular wird verwendet, um neue Kapitel auf der MyMange-Plattform hinzuzufügen und zu verwalten.",
        },
        {
          id: "19",
          src: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          thumb: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          head_en: "Chapters Reader",
          head_de: "Kapitel-Leser",
          paragraph_en:
            "This component is used to view and manage chapter pages.",
          paragraph_de:
            "Dieser Komponente wird verwendet, um Kapitelseiten anzuzeigen und zu verwalten.",
        },
        {
          id: "20",
          src: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          thumb: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          head_en: "Chapters Pages Order Change Dialog",
          head_de: "Dialog zum Ändern der Kapitelseiten-Reihenfolge",
          paragraph_en: "This dialog is used to switch between chapter pages.",
          paragraph_de:
            "Dieser Dialog wird verwendet, um zwischen den Kapitelseiten zu wechseln.",
        },
        {
          id: "21",
          src: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          thumb: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          head_en: "Chapter Settings Dialog",
          head_de: "Kapiteleinstellungen Dialog",
          paragraph_en: "This dialog is used to modify chapter data.",
          paragraph_de:
            "Dieser Dialog wird verwendet, um Kapiteldaten zu ändern.",
        },
        {
          id: "22",
          src: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          thumb: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          head_en: "Chapter Usage Guideline",
          head_de: "Kapitel-Nutzungsrichtlinie",
          paragraph_en:
            "This dialog shows instructions on how to use the MyMange reader.",
          paragraph_de:
            "Dieser Dialog zeigt Anweisungen zur Verwendung des MyMange-Readers an.",
        },
        {
          id: "23",
          src: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          thumb: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          head_en: "Reader Reading Settings",
          head_de: "Leseeinstellungen des Lesers",
          paragraph_en:
            "This dialog can be used to adjust the reader's general settings.",
          paragraph_de:
            "Mit diesem Dialog können Sie die allgemeinen Einstellungen des Lesers anpassen.",
        },
        {
          id: "24",
          src: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          thumb: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          head_en: "Profile Settings Dialog",
          head_de: "Profil-Einstellungen-Dialog",
          paragraph_en:
            "This dialog is used to update the basic information of current and other users.",
          paragraph_de:
            "Dieser Dialog wird verwendet, um die Grundinformationen der aktuellen und anderer Benutzer zu aktualisieren.",
        },
        {
          id: "25",
          src: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          thumb: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          head_en: "Main Menu",
          head_de: "Hauptmenü",
          paragraph_en:
            "This menu contains general yet most used commands in the platform.",
          paragraph_de:
            "Dieses Menü enthält die allgemeinen und am häufigsten verwendeten Befehle auf der Plattform.",
        },
        {
          id: "26",
          src: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          thumb: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          head_en: "Team Settings Dialog",
          head_de: "Team-Einstellungsdialog",
          paragraph_en:
            "This dialog is responsible for modifying team information.",
          paragraph_de:
            "Dieser Dialog ist verantwortlich für die Modifizierung von Teaminformationen.",
        },
        {
          id: "27",
          src: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          thumb: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          head_en: "Report Team",
          head_de: "Team melden",
          paragraph_en:
            "This dialog meets the needs of users by reporting any abuse by any team.",
          paragraph_de:
            "Dieser Dialog erfüllt die Bedürfnisse der Benutzer, indem er Missbrauch durch ein Team meldet.",
        },
        {
          id: "28",
          src: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          thumb: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          head_en: "Comments Dialog",
          head_de: "Kommentare-Dialog",
          paragraph_en:
            "This component is used by users to add comments on the manage chapters.",
          paragraph_de:
            "Dieses Komponente wird von Benutzern verwendet, um Kommentare zu den Kapiteln zu hinterlassen.",
        },
        {
          id: "29",
          src: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          thumb: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          head_en: "News Dialog",
          head_de: "Nachrichten-Dialog",
          paragraph_en:
            "This dialog is used by admins to add news to the platform.",
          paragraph_de:
            "Dieser Dialog wird von Admins verwendet, um Neuigkeiten zur Plattform hinzuzufügen.",
        },
      ],
    },
    {
      date: "6-8-2020",
      type: "frontend",
      id: "3",
      name: "liferpfeife",
      data: [
        {
          id: "1",
          src: "/imgs/projects/4/26dffe133833139.61c734188724e.png",
          thumb: "/imgs/projects/4/26dffe133833139.61c734188724e.png",
          head_en: "Startseite",
          head_de: "Startseite",
          paragraph_en:
            "Diese Seite enthält grundlegende Anweisungen zur Verwendung der App zum Bestellen von Essen.",
          paragraph_de:
            "Diese Seite enthält grundlegende Anweisungen zur Verwendung der App zum Bestellen von Essen.",
        },
        {
          id: "2",
          src: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          thumb: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          head_en: "Übersichtsseite für Restaurants",
          head_de: "Übersichtsseite für Restaurants",
          paragraph_en:
            "Diese Seite zeigt einen Überblick über die in der Plattform registrierten Restaurants mit der Möglichkeit, nach bestimmten Kriterien zu filtern.",
          paragraph_de:
            "Diese Seite zeigt einen Überblick über die in der Plattform registrierten Restaurants mit der Möglichkeit, nach bestimmten Kriterien zu filtern.",
        },
        {
          id: "3",
          src: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          thumb: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          head_en: "Box-Ansicht für Restaurants",
          head_de: "Box-Ansicht für Restaurants",
          paragraph_en:
            "Dieses Bild zeigt die Übersichtsseite für Restaurants mit Box-Ansicht anstelle von Listenansicht.",
          paragraph_de:
            "Dieses Bild zeigt die Übersichtsseite für Restaurants mit Box-Ansicht anstelle von Listenansicht.",
        },
        {
          id: "4",
          src: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          thumb: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          head_en: "Restaurant-Details-Seite",
          head_de: "Restaurant-Details-Seite",
          paragraph_en:
            "Diese Seite zeigt detaillierte Informationen über das Restaurant sowie alle angebotenen Artikel an.",
          paragraph_de:
            "Diese Seite zeigt detaillierte Informationen über das Restaurant sowie alle angebotenen Artikel an.",
        },
        {
          id: "5",
          src: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          thumb: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          head_en: "Bestellungs-Box für Artikel",
          head_de: "Bestellungs-Box für Artikel",
          paragraph_en:
            "Diese Box zeigt eine Eingabe an, um eine Bestellung für einen bestimmten Lebensmittelartikel hinzuzufügen.",
          paragraph_de:
            "Diese Box zeigt eine Eingabe an, um eine Bestellung für einen bestimmten Lebensmittelartikel hinzuzufügen.",
        },
        {
          id: "6",
          src: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          thumb: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          head_en: "Lebensmittel Liste",
          head_de: "Lebensmittel Liste",
          paragraph_en:
            "This is a small view of the food list of one restaurant.",
          paragraph_de:
            "Dies ist eine kleine Ansicht der Lebensmittelliste eines Restaurants.",
        },
        {
          id: "7",
          src: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          thumb: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          head_en: "Neues Lebensmittel hinzufügen",
          head_de: "Neues Lebensmittel hinzufügen",
          paragraph_en:
            "This form is used by restaurant managers to add a new dish to the menu.",
          paragraph_de:
            "Dieses Formular wird von Restaurantmanagern verwendet, um ein neues Gericht zum Menü hinzuzufügen.",
        },
        {
          id: "8",
          src: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          thumb: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          head_en: "Restaurant Details Dialog",
          head_de: "Restaurantdetails Dialog",
          paragraph_en:
            "This dialog tab shows detailed information about this restaurant (closing/opening time, payment methods, etc.).",
          paragraph_de:
            "Dieser Dialog-Tab zeigt detaillierte Informationen zu diesem Restaurant (Öffnungs-/Schließzeiten, Zahlungsmethoden, etc.).",
        },
        {
          id: "9",
          src: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          thumb: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          head_en: "Restaurant Reviews Dialog",
          head_de: "Restaurantbewertungen Dialog",
          paragraph_en:
            "This dialog tab shows reviews for the current restaurant",
          paragraph_de:
            "Dieser Dialog-Tab zeigt Bewertungen für das aktuelle Restaurant an.",
        },
        {
          id: "10",
          src: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          thumb: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          head_en: "Favoriten Dialog",
          head_de: "Favoriten Dialog",
          paragraph_en:
            "This dialog is used by users to save any restaurant for later view",
          paragraph_de:
            "Dieser Dialog wird von Benutzern verwendet, um jedes Restaurant für eine spätere Ansicht zu speichern.",
        },
        {
          id: "11",
          src: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          thumb: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          head_en: "Add Restaurant Dialog",
          head_de: "Dialog zum Hinzufügen eines Restaurants",
          paragraph_en:
            "This form is used by admins to add a new restaurant to the platform",
          paragraph_de:
            "Dieses Formular wird von Administratoren verwendet, um ein neues Restaurant zur Plattform hinzuzufügen",
        },
        {
          id: "12",
          src: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          thumb: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          head_en: "Recommend Restaurant Page",
          head_de: "Empfehlen Sie Restaurantseite",
          paragraph_en:
            "This page is used by guests to recommend a restaurant to the platform operation team",
          paragraph_de:
            "Diese Seite wird von Gästen genutzt, um dem Betriebsteam der Plattform ein Restaurant zu empfehlen",
        },
        {
          id: "13",
          src: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          thumb: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          head_en: "Topics Form",
          head_de: "Themenformular",
          paragraph_en:
            "This form is used to add a new support topic by admins to the platform",
          paragraph_de:
            "Dieses Formular wird von Administratoren verwendet, um ein neues Support-Thema zur Plattform hinzuzufügen",
        },
        {
          id: "14",
          src: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          thumb: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          head_en: "Support Form",
          head_de: "Support-Formular",
          paragraph_en:
            "This form is filled by users to get support by the operation team with detailed information about the issue",
          paragraph_de:
            "Dieses Formular wird von Benutzern ausgefüllt, um Unterstützung durch das Betriebsteam mit detaillierten Informationen zu dem Problem zu erhalten",
        },
        {
          id: "15",
          src: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          thumb: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          head_en: "Login Page",
          head_de: "Anmeldeseite",
          paragraph_en:
            "This page is used to login all platform users (managers, users, operation user, etc.)",
          paragraph_de:
            "Diese Seite wird verwendet, um alle Plattformbenutzer (Manager, Benutzer, Betriebsbenutzer usw.) anzumelden",
        },
        {
          id: "16",
          src: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          thumb: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          head_en: "Anmeldeseite",
          head_de: "Anmeldeseite",
          paragraph_en:
            "Diese Seite wird verwendet, um neue Benutzerkonten auf der Plattform anzumelden.",
          paragraph_de:
            "Diese Seite wird verwendet, um neue Benutzerkonten auf der Plattform anzumelden.",
        },
        {
          id: "17",
          src: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          thumb: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          head_en: "Passwort zurücksetzen Seite",
          head_de: "Passwort zurücksetzen Seite",
          paragraph_en:
            "Diese Seite wird verwendet, um das Passwort jedes Benutzers zurückzusetzen.",
          paragraph_de:
            "Diese Seite wird verwendet, um das Passwort jedes Benutzers zurückzusetzen.",
        },
        {
          id: "18",
          src: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          thumb: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          head_en: "Lebensmittelposition",
          head_de: "Lebensmittelposition",
          paragraph_en:
            "Diese Box zeigt Details zu einem bestimmten Lebensmittel in einem Restaurant an.",
          paragraph_de:
            "Diese Box zeigt Details zu einem bestimmten Lebensmittel in einem Restaurant an.",
        },
      ],
    },
    {
      date: "01-10-2020",
      type: "fullstack",
      id: "4",
      name: "Vocational Training Center",
      data: [
        {
          id: "1",
          src: "/imgs/projects/3/b31d24133932501.61ca03b0e6609.png",
          thumb: "/imgs/projects/3/b31d24133932501.61ca03b0e6609.png",
          head_en: "Home Page",
          paragraph_en:
            "This page contains a form to register new students to the website.",
          head_de: "Startseite",
          paragraph_de:
            "Diese Seite enthält ein Formular zur Registrierung neuer Schüler auf der Website.",
        },
        {
          id: "2",
          src: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          thumb: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          head_en: "About Page",
          paragraph_en:
            "This section shows brief information about the institution.",
          head_de: "Über Uns",
          paragraph_de:
            "Dieser Abschnitt zeigt kurze Informationen über die Institution.",
        },
        {
          id: "3",
          src: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          thumb: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          head_en: "Vision Section",
          paragraph_en:
            "This section shows the vision and the goals of the institution.",
          head_de: "Vision Bereich",
          paragraph_de:
            "Dieser Abschnitt zeigt die Vision und Ziele der Institution.",
        },
        {
          id: "4",
          src: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          thumb: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          head_en: "Why Us",
          paragraph_en:
            "This section shows a timer for the next session, as well as some reasons why to choose SPA over any other competitors.",
          head_de: "Warum wir",
          paragraph_de:
            "Dieser Abschnitt zeigt einen Timer für die nächste Sitzung sowie einige Gründe, warum man sich für SPA gegenüber anderen Mitbewerbern entscheiden sollte.",
        },
        {
          id: "5",
          src: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          thumb: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          head_en: "Prominent Courses",
          paragraph_en:
            "This section shows a brief overview of some prominent courses run by SPA.",
          head_de: "Hervorragende Kurse",
          paragraph_de:
            "Dieser Abschnitt zeigt einen kurzen Überblick über einige herausragende Kurse, die von SPA angeboten werden.",
        },
        {
          id: "6",
          src: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          thumb: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          head_en: "Courses Dialog",
          head_de: "Kurs-Dialog",
          paragraph_en:
            "This dialog shows all the courses provided by SPA on the platform, with teachers' details and prices.",
          paragraph_de:
            "Dieser Dialog zeigt alle Kurse, die SPA auf der Plattform anbietet, mit Details zu Lehrern und Preisen.",
        },
        {
          id: "7",
          src: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          thumb: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          head_en: "Contact Us Section",
          head_de: "Kontaktieren Sie uns Abschnitt",
          paragraph_en:
            "This section shows some information about the location, as well as a form for direct contact with the management team.",
          paragraph_de:
            "Dieser Abschnitt zeigt einige Informationen zum Standort sowie ein Formular für eine direkte Kontaktaufnahme mit dem Managementteam.",
        },
        {
          id: "8",
          src: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          thumb: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          head_en: "Footer Section",
          head_de: "Fußzeilen-Abschnitt",
          paragraph_en:
            "This footer contains some information about how to reach out and a small map for the website.",
          paragraph_de:
            "Diese Fußzeile enthält einige Informationen darüber, wie man in Kontakt treten kann, sowie eine kleine Karte für die Website.",
        },
        {
          id: "9",
          src: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          thumb: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          head_en: "User Menu",
          head_de: "Benutzermenü",
          paragraph_en:
            "This menu used by admins to manage website data (courses,courses dates,contact list,...)",
          paragraph_de:
            "Dieses Menü wird von Administratoren zur Verwaltung von Website-Daten (Kurse, Kursdaten, Kontaktliste usw.) verwendet.",
        },
      ],
    },
    {
      date: "10-16-2023",
      type: "fullstack",
      name: "Water Treatment Company Website",
      id: "5",
      data: [
        {
          id: "1",
          src: "/imgs/projects/5/8e5410133982397.61cb28530dadf.png",
          thumb: "/imgs/projects/5/8e5410133982397.61cb28530dadf.png",
          head_en: "Home Page",
          paragraph_en:
            "This section is a slider that shows all the recent events for a water industry company (MAP).",
          head_de: "Startseite",
          paragraph_de:
            "Dieser Abschnitt ist ein Schieberegler, der alle aktuellen Ereignisse für ein Unternehmen in der Wasserindustrie (MAP) anzeigt.",
        },
        {
          id: "2",
          src: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          thumb: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          head_en: "About Us Page",
          paragraph_en:
            "This section shows a brief overview of the company's vision, mission, and values.",
          head_de: "Über Uns Seite",
          paragraph_de:
            "Dieser Abschnitt zeigt eine kurze Übersicht über die Vision, Mission und Werte des Unternehmens.",
        },
        {
          id: "3",
          src: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          thumb: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          head_en: "About Page",
          paragraph_en:
            "This section shows the main core values of the company.",
          head_de: "Über Uns Seite",
          paragraph_de:
            "Dieser Abschnitt zeigt die wichtigsten Kernwerte des Unternehmens.",
        },
        {
          id: "4",
          src: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          thumb: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          head_en: "Products Section",
          paragraph_en:
            "This section shows all the products that MAP provides.",
          head_de: "Produktbereich",
          paragraph_de:
            "Dieser Abschnitt zeigt alle Produkte, die MAP anbietet.",
        },
        {
          id: "5",
          src: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          thumb: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          head_en: "Our Team Section",
          paragraph_en:
            "This section shows the MAP company team as well as their professions.",
          head_de: "Unser Team Bereich",
          paragraph_de:
            "Dieser Abschnitt zeigt das MAP Unternehmens-Team sowie ihre Berufe.",
        },
        {
          id: "6",
          src: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          thumb: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          head_en: "Contact Us Page",
          paragraph_en:
            "This page is used to connect clients with the MAP operations team.",
          head_de: "Kontaktiere uns Seite",
          paragraph_de:
            "Diese Seite wird verwendet, um Kunden mit dem MAP-Team zu verbinden.",
        },
        {
          id: "7",
          src: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          thumb: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          head_en: "Career Page",
          paragraph_en:
            "This page is used to display available vacancies in the MAP company.",
          head_de: "Karriere-Seite",
          paragraph_de:
            "Diese Seite wird verwendet, um verfügbare Stellenangebote im MAP-Unternehmen anzuzeigen.",
        },
        {
          id: "8",
          src: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          thumb: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          head_en: "Footer Section",
          paragraph_en:
            "This footer contains information on how to reach out and a small map of the website.",
          head_de: "Fußzeile",
          paragraph_de:
            "Diese Fußzeile enthält Informationen darüber, wie man Kontakt aufnehmen und eine kleine Karte der Website anzeigen kann.",
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
