import {ArrowPathIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {ArrowRightLeftIcon, CoinsIcon, CombineIcon, DatabaseBackupIcon, FastForwardIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {BoltIcon, BuildingLibraryIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import React from "react";
import analyseBoardImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-analyse.webp";
import transaction2Image from "@/public/projects-gallery/crypto-arbitrage/arbitrage-transactions.webp";
import popupsArbitrageImages from "@/public/projects-gallery/crypto-arbitrage/arbitrage-pop-modules.webp";
import mobileViewImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-mobile-view.webp";
import mainDashboardImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-main-dashboard.png";
import transactionImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-transactions-2.webp";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.cryptoArbitrageV2

const heroSectionData: ProjectHeroSectionData = {
    title: "Crypto Arbitrage v2",
    subtitle: "Détection temps réel d’opportunités d’arbitrage sur des milliers de paires crypto à travers plusieurs plateformes.",
    short_app_description: "Analyse continue des carnets d’ordres multi-exchanges pour détecter, filtrer et exposer en temps réel les écarts de prix exploitables, afin d’exécuter automatiquement des trades.",
    technical_tags: ["Backend", "Architecture"],
    impact_metrics: [
        {
            value: '500+ ',
            label: 'Markets',
            icon: BuildingLibraryIcon,
        },
        {
            value: '2500+',
            label: 'Paires',
            icon: CoinsIcon,
        },
        {
            value: '~315 M',
            label: 'Combinaisons possibles',
            icon: CombineIcon,
        },
        {
            value: '<10s',
            label: "Fast trade déclenchement",
            icon: FastForwardIcon,
        },
    ],
    project_card: {
        app_type: "Multi microservices",
        business_metrics: [
            {
                value: '3x/jour',
                label: 'Extraction orderbook',
                icon: DocumentTextIcon,
            },
            {
                value: '10+ ',
                label: 'trades/semaine',
                icon: ArrowRightLeftIcon,
            },
            {
                value: '24h/7 ',
                label: 'Real-time watch',
                icon: MagnifyingGlassIcon,
            },
        ],
        featuresPills: ['BigData', 'Real-time', 'Microservices'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: analyseBoardImage, alt: 'analyseBoardImage'},
        {image: transaction2Image, alt: 'transaction2Image'},
        {image: popupsArbitrageImages, alt: 'popupsArbitrageImages'},
    ],
    column_2: [
        {image: mobileViewImage, alt: 'mobileViewImage'},
        {image: mainDashboardImage, alt: 'mainDashboardImage'},
        {image: transactionImage, alt: 'transactionImage'},
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/


const presentationData: ProjectPresentationData = {
    textComponent: (
      <div className="text-md text-justify leading-relaxed">
        Cette version <strong>V2</strong> du backend marque une <strong>refonte technique majeure</strong> du système de Crypto Arbitrage, conçue pour corriger les limites structurelles de la V1 en matière de <strong>couplage</strong>, de <strong>scalabilité</strong> et de gestion du <strong>temps réel</strong>.
        <br/><br/>
        L’architecture a été entièrement repensée autour d’un <strong>modèle event-driven</strong>, combiné aux principes de la <strong>Clean Architecture</strong>, afin de garantir une séparation stricte des responsabilités et une indépendance totale du cœur métier vis-à-vis des détails techniques.
        <br/><br/>
        Le système est désormais organisé en couches claires (<strong>Domain</strong>, <strong>Application</strong>, <strong>Infrastructure</strong>, <strong>Interface</strong>), permettant de faire évoluer la logique métier sans impacter les mécanismes de transport, de persistance ou de communication inter-services.
        <br/><br/>
        Les échanges entre services reposent exclusivement sur des <strong>événements métier</strong> transitant via un <strong>message broker (RabbitMQ)</strong> : ingestion d’orderbooks, détection d’opportunités, filtrage, agrégation ou supervision. Cette approche favorise un fort découplage, une meilleure résilience et un passage à l’échelle simplifié.
        <br/><br/>
        Pensée pour le <strong>big data</strong>, cette V2 supporte des volumes croissants d’orderbooks grâce à des <strong>traitements distribués</strong>, des consommateurs parallèles et un dimensionnement indépendant de chaque microservice.
        <br/><br/>
        Le backend devient ainsi un <strong>système orienté événements</strong>, modulaire, robuste et prêt à accueillir des évolutions futures telles que l’analyse avancée, le machine learning, l’alerting temps réel ou l’exécution automatique de stratégies.
      </div>
    ),
    sources: [
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab | v2",
            link: "https://gitlab.com/projects-and-chill/arbitrage-v2",
            description: "Code source du v2"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "GitLab | v1",
            link: "https://gitlab.com/projects-and-chill/arbitrage-v1",
            description: "Code source du v1"
        },
        {
            icon: <BoltIcon className="text-yellow-400" width={16} height={16}/>,
            label: "Fast try",
            link: "https://gitlab.com/projects-and-chill/arbitrage-v1/docker-crypto-arbitrage",
            description: "Essayer la v1"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'TypeScript', level: 100, description: 'typed backend'},
        {name: 'Node.js', level: 85, description: 'runtime'},
        {name: 'MongoDB', level: 95, description: 'database'},
        {name: 'RabbitMQ', level: 85, description: 'message broker'},
    ],
    specialized_stack: [
        {name: 'WebSocket', level: 80},
        {name: 'REST API', level: 75},
        {name: 'JWT / Sessions', level: 65},
        {name: 'EventBridge (cron)', level: 65},
        {name: 'Clean Architecture', level: 75},
        {name: 'Event-driven', level: 80},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: UserGroupIcon,
        name: 'Microservices spécialisés',
        description: "Architecture backend découpée en services dédiés : un service WebSocket pour l’analyse temps réel, un service d’extraction et parsing des orderbooks via cron, et une REST API centralisant l’accès aux données pour l’admin panel.",
        tags: ['Microservices', 'Event-driven', 'Scalable'],
        feature_type: 'Backend',
    },
    {
        icon: DatabaseBackupIcon,
        name: 'REST API – Admin Panel',
        description: "REST API sécurisée exposant les paires les plus profitables, avec filtres dynamiques (crypto, volume, exchange…), observation de paires spécifiques et exclusion manuelle des faux positifs détectés par l’algorithme.",
        tags: ['REST API', 'Security', 'Admin'],
        feature_type: 'Backend',
    },
    {
        icon: ArrowPathIcon,
        name: 'Cron jobs & extraction périodique',
        description: "Jobs planifiés exécutés 3 fois par jour pour scraper les orderbooks, avec gestion automatique des rate-limits grâce à un calcul dynamique adapté aux APIs des exchanges.",
        tags: ['Cron', 'Rate-limit', 'Automation'],
        feature_type: 'Backend',
    },
    {
        icon: BoltIcon,
        name: 'WebSocket – streaming temps réel',
        description: "Connexion aux APIs de streaming de plusieurs exchanges pour monitorer en live les mouvements de prix et détecter instantanément les opportunités d’arbitrage.",
        tags: ['WebSocket', 'Real-time', 'Streaming'],
        feature_type: 'Backend',
    },
    {
        icon: CombineIcon,
        name: 'Algorithme de comparaison avancé',
        description: "Analyse de milliers de combinaisons de paires crypto afin d’identifier des écarts de prix exploitables, avec optimisations Big Data pour maximiser la vitesse de traitement.",
        tags: ['Algorithm', 'BigData', 'Performance'],
        feature_type: 'Backend',
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = transaction2Image

const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Voir projet",
        link: `/projet/${slug}`
    },
    button_2: {
        label: "Gitlab",
        link: "https://gitlab.com/projects-and-chill/arbitrage-v2"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
  {
    scopeTitle: 'Big Data, performance & modélisation MongoDB',
    scopePresentation: "Concevoir un stockage et des traitements capables d’absorber des volumes massifs d’orderbooks tout en garantissant des temps de réponse compatibles avec l’arbitrage temps réel.",
    icon: DatabaseBackupIcon,
    challengesList: [
      "Modélisation orientée lecture pour l’analyse d’écarts de prix",
      "Indexation fine-grained par paires, exchanges et timestamps",
      "Optimisation avancée des requêtes MongoDB sur de très gros volumes",
      "Traitements batch et streaming combinés",
      "Consumers parallèles pour maximiser le débit d’analyse",
    ],
  },
  {
    scopeTitle: 'Temps réel, event-driven & résilience système',
    scopePresentation: "Garantir une détection rapide et fiable des opportunités malgré des APIs d’exchanges instables, des contraintes de rate-limit et une forte dépendance au temps réel.",
    icon: ArrowPathIcon,
    challengesList: [
      "Architecture event-driven basée sur RabbitMQ",
      "Gestion avancée des rate-limits, retries et backoff",
      "Stabilité des connexions WebSocket multi-exchanges",
      "Tolérance aux pannes via messages persistés",
      "Scalabilité horizontale des services et des consumers",
    ],
  },
];



export const cryptoArbitrageV2FullData: StandardProjectData = {
    type: 'standardProject',
    slug: slug,
    heroSectionData,
    gallery,
    presentation: presentationData,
    stack: projectStackData,
    features: features,
    technicalChallenges,
    projectPreview,
}