import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  CircleStackIcon,
  CloudIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  UserIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import profilePageView from "@/public/projects-gallery/who-am-i/profile-page.png"
import lobbyView from "@/public/projects-gallery/who-am-i/Lobby-who-am-i.png"
import inGameView from "@/public/projects-gallery/who-am-i/in-game.png"
import createRoomView from "@/public/projects-gallery/who-am-i/create-room.png"
import mobileView from "@/public/projects-gallery/who-am-i/mobile-version.webp"
import loginView from "@/public/projects-gallery/who-am-i/login-page.png"
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {PinnedProject} from "@/components/landing-page/sections/project-list-section/components/PinnedProjects.js";
import {BoltIcon, ServerIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.whoAmI

const heroSectionData: ProjectHeroSectionData = {
  title: "Jeux web: Qui suis-je ? ",
  technical_tags: ["Backend", "Fullstack", "Architecture", 'DevOps'],
  subtitle: "Un jeu multijoueur sur navigateur en temps réel",
  short_app_description: "Jeu multijoueur en temps réel inspiré de Guess Who?, jouable en ligne à plusieurs, sur tous les navigateurs",
  impact_metrics: [
    {
      value: "<30ms",
      label: "De latence",
      icon: BoltIcon,
    },
    {
      value: "1k+",
      label: "Connexions simultanées",
      icon: UserGroupIcon,
    },
    {
      value: "99.9%",
      label: "Disponibilité",
      icon: CloudIcon,
    },
    {
      value: "0",
      label: "Downtime prod",
      icon: DocumentTextIcon,
    },
  ],
  project_card: {
    app_type: "Web App",
    business_metrics: [
      {
        value: "2–16",
        label: "Joueurs par salon",
        icon: UserGroupIcon,
      },
      {
        value: "0",
        label: "Session desync",
        icon: ArrowPathIcon,
      },
      {
        value: "60+",
        label: "Salons simultanés",
        icon: CloudIcon,
      },
    ],
    featuresPills: ["Temps réel", "Multijoueur", "Low-latency"],
  },
}


const gallery: GalleryData = {
  column_1: [
    {image: lobbyView, alt: 'lobbyView'},
    {image: loginView, alt: 'loginView'},
    {image: createRoomView, alt: 'createRoomView'},
  ],
  column_2: [
    {image: mobileView, alt: 'mobileView'},
    {image: profilePageView, alt: 'profilePageView'},
    {image: inGameView, alt: 'inGameView'},
  ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
  textComponent: (
    <div className="text-md text-justify leading-relaxed">
      <div>
        « Who Am I game » est une application web temps réel inspirée du jeu de société classique « Guess Who?
        ».
        <br/>
        Objectif : permettre à deux joueurs de s’affronter en ligne via une interface interactive et responsive.
        Le projet a été conçu pour allier réactivité, expérience utilisateur fluide et infrastructure DevOps
        moderne. Il est structuré en plusieurs dépôts indépendants afin d’assurer scalabilité et maintenabilité.
        <br/>
        La partie se déroule en étapes claires :
        <ul className="list-disc list-inside mt-2">
          <li>Le premier joueur saisit un mot à deviner</li>
          <li>Les autres posent des questions fermées (oui / non)</li>
          <li>La partie continue jusqu’à ce que quelqu’un trouve le mot</li>
        </ul>
        <br/>
        L’interface s’adapte dynamiquement au rôle du joueur (devineur ou maître du mot) et à l’état de la
        partie. Les échanges sont synchronisés instantanément via <strong>Socket.IO</strong>.
        <br/>
        L’état de l’application est décentralisé et plusieurs salons peuvent être joués en parallèle, permettant
        à chaque joueur de suivre l’avancement, de voir qui est connecté, ainsi que les questions posées et les
        réponses données.
      </div>
    </div>
  ),
  sources: [
    {
      icon: <BoltIcon className="text-yellow-400" width={16} height={16}/>,
      label: "Fast try",
      link: "https://gitlab.com/projects-and-chill/who-am-i/docker-env-who-am-i",
      description: "Easy try avec docker"
    },
    {
      icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
      label: "Gitlab",
      link: "https://gitlab.com/projects-and-chill/who-am-i",
      description: "Racine du projet"
    },
  ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
  core_stack: [
    {name: 'TypeScript', level: 90, description: "Language"},
    {name: 'React', level: 85, description: "Frontend"},
    {name: 'Socket.IO', level: 80, description: "WebSocket"},
    {name: 'MongoDb', level: 75, description: "Database"},
  ],
  specialized_stack: [
    {name: 'Architecture temps réel', level: 80},
    {name: 'Docker', level: 75},
    {name: 'CI/CD (GitLab)', level: 70},
    {name: 'Terraform', level: 60},
  ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
  {
    icon: WifiIcon,
    name: "Temps réel via WebSocket",
    description: "Gestion complète de la logique interactive du jeu via Socket.IO : questions/réponses, progression, synchronisation. Chaque joueur rejoint un salon via un canal dédié ; les événements sont nommés, typés et organisés autour du cycle de vie de la partie.",
    tags: ['Socket.IO', 'Rooms', 'Events typés'],
    feature_type: 'Backend',
  },
  {
    icon: CircleStackIcon,
    name: "API REST de gestion",
    description: "Endpoints REST pour les opérations classiques : création/suppression de salons, récupération de l’état de la partie, enregistrement de profils/scores. Coexiste avec le WebSocket et partage la même base MongoDB.",
    tags: ['REST API', 'MongoDB', 'Room management'],
    feature_type: 'Backend',
  },
  {
    icon: UserIcon,
    name: "Interface de connexion",
    description: "Choix d’un pseudo, création ou connexion à un salon existant via une interface simple et rapide.",
    tags: ['Login', 'Rooms', 'UX'],
    feature_type: 'Frontend',
  },
  {
    icon: PaintBrushIcon,
    name: "Vue de jeu interactive",
    description: "Affichage des actions de jeu en temps réel avec feedback visuel clair sur les questions, réponses et choix des joueurs.",
    tags: ['UI', 'Realtime', 'Feedback'],
    feature_type: 'Frontend',
  },
  {
    icon: ArrowPathIcon,
    name: "Synchronisation des événements",
    description: "Tous les événements joueurs (questions, réponses, fin de partie) sont propagés instantanément à l’ensemble des participants via WebSocket.",
    tags: ['WebSocket', 'Sync', 'Events'],
    feature_type: 'Backend',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    name: "Gestion d’état du jeu",
    description: "State management basé sur l’état courant de la partie : lobby, en jeu, fin de partie, transitions sécurisées.",
    tags: ['State', 'Game lifecycle', 'Consistency'],
    feature_type: 'Frontend',
  },
  {
    icon: ExclamationTriangleIcon,
    name: "Gestion des erreurs et états spéciaux",
    description: "Prise en charge des cas limites : reconnexion automatique, joueur manquant, abandon, fin de partie et erreurs réseau.",
    tags: ['Resilience', 'Reconnection', 'Edge cases'],
    feature_type: 'Backend',
  },
  {
    icon: BoltIcon,
    name: "CI/CD GitLab automatisé",
    description: "Pipeline CI/CD complet via GitLab : lint, tests, build, création d’images Docker et déploiement automatisé sur AWS selon la branche (staging / main), avec variables chiffrées et accès sécurisés.",
    tags: ['GitLab CI', 'Docker', 'AWS'],
    feature_type: 'DevOps',
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "Infrastructure as Code (Terraform)",
    description: "Infrastructure AWS entièrement pilotée par Terraform : ECS, EC2, Load Balancer, S3, base de données, VPC et security groups. Environnements reproductibles et versionnés.",
    tags: ['Terraform', 'AWS', 'IaC'],
    feature_type: 'DevOps',
  },
  {
    icon: RocketLaunchIcon,
    name: "Environnements de staging",
    description: "Workflow GitLab Flow avec environnement de staging déployé automatiquement, pour des mises en production sécurisées.",
    tags: ['GitLab Flow', 'Staging', 'Production'],
    feature_type: 'DevOps',
  },
];

/* ----------------------- [PROJECT CAROUSEL] SECTION -----------------------------*/

const projectMainPicture = lobbyView

const projectPreview: ProjectPreview = {
  slug: slug,
  title: heroSectionData.title,
  description: heroSectionData.subtitle,
  image: mobileView,
  technicalTag: heroSectionData.technical_tags,
  view_project_button: {
    label: "Voir projet",
    link: `/projet/${slug}`
  },
  button_2: {
    label: "Gitlab",
    link: "https://gitlab.com/projects-and-chill/who-am-i"
  },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
  {
    scopeTitle: 'Backend',
    scopePresentation: (
      <p>
        Le backend de Who Am I game est le moteur de l’application. Il orchestre toute la logique de jeu, gère
        l’état de la partie en temps réel et assure une communication fluide entre les joueurs.
        <br/> <br/>
        Construit autour de WebSockets pour une interaction instantanée, il s’appuie sur une architecture
        event-driven robuste avec une stack moderne.
      </p>),
    icon: ServerIcon,
    challengesList: [
      "Temps réel robuste malgré latence et refresh",
      "Reconnexion automatique avec du state recovery",
      "API WebSocket claire, documentée et typée",
      "Cohérence WebSocket / REST sans logique dupliquée",
      "Interfaces partagées client <->",
    ],
  },
  {
    scopeTitle: 'Frontend',
    scopePresentation: (
      <p>
        Le frontend de Who Am I game est conçu comme une application React modulaire, organisée autour des
        entités du jeu : joueurs, équipes, règles, scores, etc.
        <br/><br/>
        L’interface permet à un joueur de saisir un mot secret pendant que les autres posent des questions pour
        le deviner, dans un environnement entièrement temps réel. L’ensemble repose sur un state management
        centralisé et une communication WebSocket efficace via un module dédié.
      </p>),
    icon: CloudIcon,
    challengesList: [
      "Client-side real-time state synchronisation",
      "Dynamic game map rendering",
      "UI components organisation et réutilisabilité",
      "WebSocket error handling et fallback states",
    ],
  },
  {
    scopeTitle: 'DevOps',
    scopePresentation: (
      <p>
        Le composant <strong>DevOps</strong> de <em>Who Am I game</em> a été conçu pour garantir une <strong>expérience
        développeur fluide</strong> et des <strong>déploiements rapides et sécurisés</strong>.
        <br/><br/>
        Un système de <strong>versioning automatique</strong> génère des versions claires et cohérentes avec le
        cycle de développement.
        <br/><br/>
        Chaque release est <strong>automatique, traçable et stable</strong>, de la phase code jusqu’à la
        production, tout en assurant la scalabilité long terme de l’infrastructure.
      </p>
    ),
    icon: PaintBrushIcon,
    challengesList: [
      "CI/CD full automatisé: lint, tests, Docker build, push registry, deploy Terraform",
      "Staging auto depuis `develop`, isolé prod, promos via `main`",
      "Versioning auto via semantic-release + Conventional Commits",
      "AWS IaC Terraform : ECS, VPC, ALB, S3 reproductibles",
    ],
  },
];


/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/

// eslint-disable-next-line
const pinToLandingPage: PinnedProject = {
  title: heroSectionData.title,
  smallDescription: heroSectionData.short_app_description,
  image: projectMainPicture,
  slug: slug,
  bulletPointParagraphs: [
    {
      paragraphTitle: "Frontend",
      bulletsPoints: [
        "Real-time React UI",
        "WebSocket state sync",
        "Responsive multi-role UX",
      ]
    },
    {
      paragraphTitle: "Backend Systems",
      bulletsPoints: [
        "Socket.IO rooms scalable",
        "Event-driven game engine",
        "State recovery & résilience",
      ]
    },
    {
      paragraphTitle: "DevOps",
      bulletsPoints: [
        "Env de Staging & CI/CD prod-ready",
        "100% Terraform AWS IaC",
        "semantic-release versioning",
      ]
    },
    {
      paragraphTitle: "Key Achievements",
      bulletsPoints: [
        "<30ms latency",
        "1k+ users simultanés",
        "99.9% uptime",
      ]
    }
  ]
}


export const whoAmIGameFullData: StandardProjectData = {
  type: 'standardProject',
  slug: slug,
  heroSectionData,
  gallery,
  presentation: presentationData,
  stack: projectStackData,
  features: features,
  technicalChallenges,
  projectPreview,
  /*    pinToLandingPage,*/
}