import {ArrowPathIcon, CloudIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import {ArrowRightLeftIcon, CoinsIcon, CombineIcon, DatabaseBackupIcon, FastForwardIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import analyseBoardImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-analyse.webp"
import mobileViewImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-mobile-view.webp"
import mainDashboardImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-main-dashboard.png"
import transactionImage from "@/public/projects-gallery/crypto-arbitrage/arbitrage-transactions-2.webp"
import transaction2Image from "@/public/projects-gallery/crypto-arbitrage/arbitrage-transactions.webp"
import popupsArbitrageImages from "@/public/projects-gallery/crypto-arbitrage/arbitrage-pop-modules.webp"


import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {PinnedProject} from "@/components/landing-page/sections/project-list-section/components/PinnedProjects.js";
import {BoltIcon, BuildingLibraryIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.cryptoArbitrage

const heroSectionData: ProjectHeroSectionData = {
    title: "Crypto Arbitrage",
    technical_tags: ["Backend", "Fullstack", 'DevOps'],
    subtitle: "Détection d’opportunités d’arbitrage crypto multi-exchange en temps réel",
    short_app_description: "Plateforme qui collecte et compare-les order books de markets crypto (Binance, Kraken, …) afin d’identifier des écarts de prix exploitables, avec un admin panel et exécution automatique de trades.",
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
        app_type: "web app",
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
            Ce projet vise à automatiser la <strong>détection d’opportunités d’arbitrage</strong> sur le marché des
            cryptomonnaies. L’arbitrage consiste à exploiter des <strong>écarts de prix</strong> entre plusieurs
            plateformes d’échange afin de générer un profit. Ces écarts apparaissent souvent de manière très brève, en
            raison de la <strong>forte volatilité</strong> du marché, et nécessitent une capacité d’analyse rapide et
            continue.
            <br/>
            Le système repose sur l’analyse <strong>en temps réel des orderbooks</strong>, c’est-à-dire les carnets
            d’ordres d’achat et de vente disponibles sur chaque exchange. En traitant et en comparant ces données à
            grande échelle, la plateforme est capable d’identifier des opportunités parmi <strong>des milliers de
            combinaisons de paires de cryptomonnaies</strong>.
            <br/>
            L’ensemble du projet s’appuie sur une <strong>architecture complète et modulaire</strong> :
            <br/>
            <br/>
            <ul className="list-disc pl-6 space-y-2">
                <li> <strong>Un backend orienté microservices</strong>, spécialisé dans l’analyse de données, les flux
                    temps réel et la gestion des opérations.
                </li>
                <li> <strong>Une base de données optimisée</strong> pour le stockage et l’interrogation de grands volumes
                    d’informations liées aux paires et aux orderbooks.
                </li>
                <li> <strong>Une infrastructure cloud automatisée</strong> garantissant le déploiement, la scalabilité et
                    la résilience du système.
                </li>
            </ul>
            <br/>
            Chaque composant du projet a été conçu afin de garantir <strong>des performances élevées</strong>,
            une <strong>forte réactivité</strong> et une <strong>visualisation claire des résultats</strong>, aussi bien
            via l’interface d’administration que par les services backend.
        </div>
    ),
    sources: [
        {
            icon: <BoltIcon className="text-yellow-400" width={16} height={16}/>,
            label: "Fast try",
            link: "https://gitlab.com/projects-and-chill/arbitrage-v1/docker-crypto-arbitrage",
            description: "Easy try avec docker"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/projects-and-chill/arbitrage-v1",
            description: "Racine du projet"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'TypeScript', level: 90, description: 'language'},
        {name: 'MongoDB', level: 80, description: 'database'},
        {name: 'Angular', level: 70, description: 'admin UI'},
        {name: 'Docker', level: 85, description: 'containers'},
        {name: 'AWS', level: 70, description: 'ECS'},
        {name: 'WebSocket', level: 85, description: 'trading'},
    ],
    specialized_stack: [
        {name: 'Express.js', level: 80},
        {name: 'JWT ', level: 10},
        {name: 'CI/CD', level: 100},
        {name: 'Microservices', level: 95},
        {name: 'CloudFormation', level: 100},
        {name: 'Nginx / HAProxy', level: 60},
        {name: 'AWS Auto scaling', level: 25},
        {name: 'Chart.js', level: 55},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: DatabaseBackupIcon,
        name: 'Cron jobs & extractions périodiques',
        description: 'Exécution automatique 3 fois par jour pour scraper les orderbooks, avec gestion intelligente du rate-limit via calcul dynamique.',
        tags: ['Cron', 'Rate limit', 'Microservice'],
        feature_type: 'Backend',
    },
    {
        icon: ArrowPathIcon,
        name: 'WebSocket – Streaming temps réel',
        description: 'Connexion aux APIs de streaming de plusieurs exchanges pour monitorer en live les mouvements de prix et détecter des opportunités immédiates.',
        tags: ['WebSocket', 'Real-time', 'Microservice'],
        feature_type: 'Backend',
    },
    {
        icon: CoinsIcon,
        name: 'Algorithme de comparaison avancé',
        description: 'Analyse de milliers de combinaisons de paires afin d’identifier des écarts de prix exploitables, avec optimisations Big Data pour maximiser les performances.',
        tags: ['Arbitrage', 'Big Data', 'Performance'],
        feature_type: 'Backend',
    },
    {
        icon: DocumentTextIcon,
        name: 'Admin panel/Dahsboard + API Rest',
        description: 'Vue temps réel des meilleures opportunités, tables dynamiques (tri/recherche/pagination), watchlist et exclusion de faux positifs.',
        tags: ['Angular', 'Microservice', 'Chart.js'],
        feature_type: 'Fullstack',
    },
    {
        icon: BuildingLibraryIcon,
        name: 'Deployment on AWS (IaC + CI/CD)',
        description: 'Services packagés en containers, déployés sur ECS/Fargate derrière ELB + reverse proxy, infra provisionnée en IaC et pipelines GitLab CI.',
        tags: ['Docker', 'ECS', 'Terraform'],
        feature_type: 'DevOps',
    },
    {
        icon: FastForwardIcon,
        name: "Real-time arbitrage dashboard",
        description: "Dashboard temps réel centralisant les meilleures opportunités d’arbitrage : paires les plus profitables, mises à jour live (WebSocket/polling), tri avancé par profit, volume et exchange.",
        tags: ["Angular", "WebSocket", "Real-time", "Dashboard"],
        feature_type: "Frontend",
    },
    {
        icon: MagnifyingGlassIcon,
        name: "Admin panel & opportunity control",
        description: "Interface d’administration pour filtrer finement les paires (type, exchange, volume, volatilité), exclure les faux positifs, gérer une watchlist et consulter l’historique des opportunités.",
        tags: ["Admin", "Filtering", "Tracking", "Angular"],
        feature_type: "Frontend",
    },
    {
        icon: BoltIcon,
        name: "Analytics, UX & access control",
        description: "Visualisation graphique des opportunités (fréquence par exchange), navigation fluide en SPA responsive et gestion des rôles utilisateurs (read-only, admin).",
        tags: ["Chart.js", "SPA", "Responsive", "RBAC"],
        feature_type: "Frontend",
    }
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = mainDashboardImage

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
        link: "https://gitlab.com/projects-and-chill/arbitrage-v1"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: 'Performance & Big Data (orderbooks)',
        scopePresentation: (
            <div className="space-y-2">
                <p>
                    Analyser des millions de combinaisons de paires et stocker/interroger efficacement de gros volumes
                    d’orderbooks.
                </p>
                <div>
                    <b>Le backend est le cœur du système</b> :
                    <br/>
                    <br/>
                    <div>
                        <ul className="space-y-2">
                            <li> - Il orchestre la récupération des data, </li>
                            <li> - Analyse temps réel des opportunités, </li>
                            <li> - Déclenche des trades automatiquement,</li>
                            <li> - Communique avec le panel d’admin</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        icon: DatabaseBackupIcon,
        challengesList: [
            'Traitement de données massives issues des exchanges',
            'Scalabilité & performance tuning',
            'Indexation fine MongoDB / queries & aggregations optimisées',
        ],
    },
    {
        scopeTitle: 'Temps réel, stabilité & APIs externes',
        scopePresentation: 'Maintenir des connexions WebSocket stables et gérer rate limits/instabilités des endpoints publics.',
        icon: ArrowPathIcon,
        challengesList: [
            'Connexions WebSocket multi-exchange stables',
            'Réduction de la latence réseau',
            'Gestion dynamique des rate-limits',
            'Tolérance à l’instabilité des APIs externes',
            'Retry, backoff & gestion des erreurs',
        ],
    },
    {
        scopeTitle: 'Infra & déploiement (AWS)',
        scopePresentation: 'Isoler les services, automatiser les déploiements et garder une infra reproductible.',
        icon: CloudIcon,
        challengesList: [
            'Optimisation des coûts AWS (On-Demand, scale up/down)',
            'IaC & orchestration : Terraform / CloudFormation + ECS',
            'Monitoring des containers & health checks',
            'Gestion des crashes & auto-restart (ECS)',
        ],
    },
];


/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/

const pinToLandingPage: PinnedProject = {
    title: heroSectionData.title,
    smallDescription: heroSectionData.subtitle,
    image: projectMainPicture,
    slug: slug,
    bulletPointParagraphs: [
        {
            paragraphTitle: "WebSocket Microservice",
            bulletsPoints: [
                "Streaming temps réel multi-exchange",
                "Détection instantanée d’opportunités",
                "Faible latence & haute disponibilité",
            ]
        },
        {
            paragraphTitle: "REST API Microservice",
            bulletsPoints: [
                "Orchestration des analyses",
                "Déclenchement des trades",
                "Admin panel & historique",
            ]
        },
        {
            paragraphTitle: "Key Achievements",
            bulletsPoints: [
                "Trades automatiques en temps réel",
                "Arbitrage Big Data multi-exchange",
                "Architecture cloud scalable"
            ]
        }
    ]
}


export const cryptoArbitrageFullData: StandardProjectData = {
    type: 'standardProject',
    slug: slug,
    heroSectionData,
    gallery,
    presentation: presentationData,
    stack: projectStackData,
    features: features,
    technicalChallenges,
    projectPreview,
    pinToLandingPage,
}