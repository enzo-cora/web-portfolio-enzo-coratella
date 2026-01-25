import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {DatabaseBackupIcon, HouseIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import landingPageImage from "@/public/projects-gallery/bridgeapi/bridge-landing-page.png";
import fullPage1Image from "@/public/projects-gallery/bridgeapi/full-page-one.png";
import fullPage2Image from "@/public/projects-gallery/bridgeapi/full-page-two.png";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {BoltIcon, EyeIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.bridgeapiOpenBanking

const heroSectionData: ProjectHeroSectionData = {
    title: "Bridgeapi · Connecteurs Openbanking",
    subtitle: "Connexion sécurisée aux banques pour agréger les données et initier des paiements en environnement financier critique",
    short_app_description: "Développement et maintenance de connecteurs bancaires en Agrégation & Paiement dans une archi microservices, avec un focus reliability, observability et clean architecture.",
    technical_tags: ["Backend", "Architecture"],
    impact_metrics: [
        {
            value: "+200",
            label: "Api banques intégrées",
            icon: HouseIcon,
        },
        {
            value: "99.9%+",
            label: "Uptime",
            icon: CloudIcon,
        },
        {
            value: "< 2h",
            label: "MTTR incidents",
            icon: BoltIcon,
        },
        {
            value: "80%+",
            label: "Test coverage",
            icon: DocumentTextIcon,
        },
    ],
    project_card: {
        app_type: "FinTech Platform",
        business_metrics: [
            {
                value: "24/7",
                label: "monitoring auto",
                icon: CloudIcon,
            },
            {
                value: "100%",
                label: "Agile",
                icon: DocumentTextIcon,
            },
            {
                value: "1",
                label: "environment staging",
                icon: ArrowPathIcon,
            },
        ],
        featuresPills: [
            "OpenBanking",
            "Aggregation",
            "Microservices",
        ],
    },
}

/* ----------------------- [GALLERY] SECTION -----------------------------*/

const gallery: GalleryData = {
    column_1: [
        {image: fullPage1Image, alt: 'fullPage1Image'},

    ],
    column_2: [
        {image: fullPage2Image, alt: 'fullPage2Image'},
        {image: landingPageImage, alt: 'landingPageImage'},
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Bridge API est une solution d’<strong>open banking</strong> permettant l’agrégation de données bancaires
                et l’initiation de paiements pour les acteurs du secteur financier.
                La plateforme repose sur des <strong>connecteurs bancaires backend</strong> intégrés via des APIs
                hétérogènes, au sein d’une <strong>architecture microservices</strong> conçue pour la fiabilité, la
                scalabilité et la qualité de service.
            </p>
            <br/>
            <p>
                Les connecteurs assurent l’intégration continue avec les systèmes bancaires, en prenant en compte leurs
                spécificités, limitations et évolutions fréquentes.
                Les mécanismes mis en place couvrent l’adaptation aux changements d’API, la gestion des incidents et,
                lorsque nécessaire, des approches de <strong>reverse engineering</strong> ou
                de <strong>scraping</strong> afin de maintenir la compatibilité fonctionnelle.
            </p>
            <br/>
            <p>
                L’architecture met l’accent sur la maintenabilité et la robustesse, avec l’application
                de <strong>SOLID</strong>, de la <strong>Clean Architecture</strong> et une stratégie
                d’<strong>observability</strong> complète
                (monitoring, dashboards, alerting), facilitant le diagnostic rapide et la stabilité des services
                exposés.
            </p>
        </div>
    ),
    sources: [
        {
            icon: <EyeIcon className="text-red-400" width={16} height={16}/>,
            label: "BridgeAPI",
            link: "https://www.bridgeapi.io/",
            description: "Voir la plateform"
        }
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: "Node.js", level: 90, description: "services"},
        {name: "TypeScript", level: 90, description: "typing"},
        {name: "PostgreSQL", level: 75, description: "database"},
        {name: "Nestjs", level: 30, description: 'api rest'},
        {name: "Clean Architecture", level: 85, description: "layers"},
    ],
    specialized_stack: [
        {name: "REST API", level: 80},
        {name: "Docker", level: 75},
        {name: "AWS", level: 60},
        {name: "CI/CD", level: 70},
        {name: "SOLID", level: 85},
        {name: "Unit/E2E Tests", level: 85},
        {name: "Acceptance Tests", level: 75},
        {name: "Observability", level: 80},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: CloudIcon,
        name: "Connecteurs bancaires en microservices",
        description: "Développement et maintenance de connecteurs (agrégation & paiement) isolés par domaine, avec un design orienté reliability et une montée en charge maîtrisée.",
        tags: ["Node.js", "TypeScript", "Microservices"],
        feature_type: "Backend",
    },
    {
        icon: ArrowPathIcon,
        name: "Compatibilité continue malgré les changements banques",
        description: "Reverse engineering + scraping pour adapter rapidement les intégrations quand les systèmes bancaires évoluent, tout en gardant une API stable côté produit.",
        tags: ["Reverse engineering", "Scraping", "Resilience"],
        feature_type: "Backend",
    },
    {
        icon: DocumentTextIcon,
        name: "Stratégie de tests multi-couches",
        description: "Pyramide de tests avec unit tests, acceptance tests et end-to-end pour sécuriser les parcours critiques et réduire les régressions en prod.",
        tags: ["Unit", "Acceptance", "E2E"],
        feature_type: "Architecture",
    },
    {
        icon: UserGroupIcon,
        name: "Incident management & observability",
        description: "Monitoring, dashboards et alerting pour détecter tôt, diagnostiquer vite (MTTR réduit) et communiquer proactivement avec les banques lors d’incidents.",
        tags: ["Monitoring", "Dashboards", "Alerting"],
        feature_type: "DevOps",
    },
    {
        icon: DatabaseBackupIcon,
        name: "Refactor & migrations (legacy → clean)",
        description: "Participation aux décisions d’architecture : migrations, refactor legacy, application de SOLID et Clean Architecture pour améliorer la maintenabilité.",
        tags: ["SOLID", "Clean Architecture", "Refactor"],
        feature_type: "Architecture",
    },
    {
        icon: PaintbrushIcon,
        name: "Tooling & delivery industrialisés",
        description: "Pipelines CI/CD, build Docker, déploiement AWS et checks qualité automatisés pour livrer rapidement sans sacrifier la stabilité.",
        tags: ["CI/CD", "Docker", "AWS"],
        feature_type: "DevOps",
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = landingPageImage

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
        label: "BridgeAPI",
        link: "https://www.bridgeapi.io/"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: "Banking connectors & intégrations",
        scopePresentation: "Assurer une intégration robuste face à des APIs hétérogènes et des comportements banques parfois instables.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Normaliser des flux bancaires hétérogènes",
            "Gérer erreurs, timeouts et retries",
            "Adapter vite aux changements côté banque",
            "Reverse engineering / scraping quand nécessaire",
        ],
    },
    {
        scopeTitle: "Qualité, tests & contrats",
        scopePresentation: "Sécuriser les parcours critiques avec une stratégie de tests et des API contracts stables.",
        icon: DocumentTextIcon,
        challengesList: [
            "Pyramide de tests (unit/acceptance/E2E)",
            "Réduire les régressions en production",
            "Stabiliser les contrats REST (backward compat)",
        ],
    },
    {
        scopeTitle: "Reliability & delivery (CI/CD + observability)",
        scopePresentation: "Industrialiser la livraison tout en gardant un haut niveau de disponibilité et une bonne capacité de diagnostic.",
        icon: ArrowPathIcon,
        challengesList: [
            "Dashboards & alerting actionnables",
            "Incident response + réduction du MTTR",
            "Pipelines CI/CD avec checks qualité",
            "Runbooks et suivi post-incident",
        ],
    },
];


export const bridgeApiProjectData: StandardProjectData = {
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