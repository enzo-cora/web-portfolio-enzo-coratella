import {ArrowPathIcon, CloudIcon, ServerStackIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {DatabaseBackupIcon, GlassesIcon, MapPinHouseIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import landingPageImage from "@/public/projects-gallery/tictactrip/result-page-tictactrip.png";
import fullPage1Image from "@/public/projects-gallery/tictactrip/full-page-1-tictactrip.png";
import fullPage2Image from "@/public/projects-gallery/tictactrip/full-page-2-trictactrip.png";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import {EyeIcon, GlobeEuropeAfricaIcon, MapPinIcon, TruckIcon} from "@heroicons/react/24/solid";
import React from "react";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.tictactripIntermodalTransport

const heroSectionData: ProjectHeroSectionData = {
    title: "Tictactrip voyage",
    subtitle: "TicTacTrip est une application web qui permet de réserver des voyages multi-modaux en europe sur une plateforme unique.",
    short_app_description: "Plateforme de réservation intermodale combinant train, bus et covoiturage, avec un moteur de prédiction tarifaire afin d'aider les voyageurs à réserver leurs trajets au bon moment.",
    technical_tags: ["Backend", "Fullstack", "DevOps"],
    impact_metrics: [
        {
            value: "3 modes",
            label: "train, bus, covoiturage",
            icon: TruckIcon,
        },
        {
            value: "6500",
            label: "villes desservies",
            icon: MapPinHouseIcon,
        },
        {
            value: "+100",
            label: "compagnies",
            icon: UserGroupIcon,
        },
        {
            value: "3M+/jour",
            label: "de prix prédits",
            icon: GlassesIcon,
        },
    ],
    project_card: {
        app_type: "Web application",
        business_metrics: [
            {
                value: "10",
                label: "Pays en Europe",
                icon: GlobeEuropeAfricaIcon,
            },
            {
                value: "∞",
                label: "de bout en bout",
                icon: MapPinIcon,
            },
        ],
        featuresPills: ["BigData", "High-Traffic", "Observability"],
    },
}

/* ----------------------- [GALLERY] SECTION -----------------------------*/


const gallery: GalleryData = {
    column_1: [
        {image: landingPageImage, alt: 'landingPageImage'},
        {image: fullPage2Image, alt: 'fullPage2Image'},
    ],
    column_2: [
        {image: fullPage1Image, alt: 'fullPage1Image'},

    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                TicTacTrip est une plateforme de réservation qui combine train, bus et covoiturage pour construire des
                trajets optimisés.
                L’écosystème s’appuie sur une architecture microservices, pensée pour absorber un trafic élevé et
                fiabiliser les échanges avec des fournisseurs externes.
            </p>
            <br/>
            <p>
                Le backend embarque un moteur de <strong>prédiction de prix</strong> conçu à partir de l’analyse <strong>BigData</strong> de données historiques,
                afin d’anticiper les variations tarifaires et d’améliorer la pertinence des recommandations.
                En parallèle, une stratégie de <strong>caching</strong> a été renforcée pour industrialiser le
                traitement de contenus à grande échelle.
            </p>
            <br/>
            <p>
                Le socle technique couvre l’intégration d’APIs transport via des connecteurs dédiés, l’observabilité
                (dashboards, alerting),
                ainsi que l’exploitation d’une infrastructure AWS ECS maintenue et optimisée via Terraform.
                Côté produit, le frontend est maintenu dans la durée pour garantir une UX stable et cohérente.
            </p>
        </ div>
    ),
    sources: [
        {
            icon: <EyeIcon className="text-red-400" width={16} height={16}/>,
            label: "Tictactrip",
            link: "https://www.tictactrip.eu/",
            description: "Voir la plateforme"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: "Node.js", level: 90, description: "backend"},
        {name: "TypeScript", level: 90, description: "typing"},
        {name: "PostgreSQL", level: 80, description: "database"},
        {name: "React", level: 60, description: "frontend"},
        {name: "Redis", level: 70, description: "cache"},
    ],
    specialized_stack: [
        {name: "AWS (ECS/EC2)", level: 80},
        {name: "Terraform", level: 80},
        {name: "RabbitMQ", level: 60},
        {name: "Docker", level: 70},
        {name: "CI/CD", level: 75},
        {name: "Tests (unit/E2E/acceptance)", level: 70},
        {name: "SOLID", level: 65},
        {name: "Observability", level: 70},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: GlassesIcon,
        name: "Moteur de prédiction de prix",
        description: "TicTacTrip embarque un système de prédiction haute perf basé sur l’analyse de données historiques pour anticiper les variations tarifaires.",
        tags: ["price-prediction", "data", "performance"],
        feature_type: "Backend",
    },
    {
        icon: DatabaseBackupIcon,
        name: "Caching & content processing",
        description: "La stratégie de cache est renforcée pour industrialiser le traitement de contenus à grande échelle (plus de 3M lignes/jour) et réduire la charge sur les services.",
        tags: ["redis", "caching", "throughput"],
        feature_type: "Backend",
    },
    {
        icon: ArrowPathIcon,
        name: "Connecteurs APIs transport",
        description: "Des connecteurs intègrent les APIs de fournisseurs (train/bus/covoit.) et synchronisent les données dans la base applicative avec contrôle de qualité et reprise sur erreur.",
        tags: ["connectors", "api", "postgres"],
        feature_type: "Architecture",
    },
    {
        icon: CloudIcon,
        name: "CI/CD & quality gates",
        description: "Les pipelines executent lint, tests unit/E2E/acceptance, build Docker et déploiement reproductible, afin de fiabiliser la livraison en continu.",
        tags: ["ci-cd", "tests", "docker"],
        feature_type: "DevOps",
    },
    {
        icon: ServerStackIcon,
        name: "Infra AWS ECS & Terraform modules",
        description: "L’infrastructure ECS est maintenue et optimisée, avec des modules Terraform réutilisables pour standardiser les environnements et accélérer les évolutions.",
        tags: ["aws", "ecs", "terraform"],
        feature_type: "DevOps",
    },
    {
        icon: PaintbrushIcon,
        name: "Maintenance Frontend",
        description: "Le frontend React est maintenu dans la durée pour stabiliser les parcours de recherche/réservation et garantir une UX cohérente côté produit.",
        tags: ["react", "ui", "maintenance"],
        feature_type: "Frontend",
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
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: "Prédiction de prix à fort trafic",
        scopePresentation: "Le backend doit calculer et servir des signaux de prédiction rapidement, malgré des volumes importants et des variations de charge.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Modéliser des signaux à partir de prix historiques",
            "Optimiser latence et throughput côté services",
            "Gérer les edge-cases et données incomplètes",
        ],
    },
    {
        scopeTitle: "Intégrations fournisseurs & fiabilité",
        scopePresentation: "Les APIs transport sont hétérogènes et évolutives : les connecteurs doivent rester robustes, observables et résilients.",
        icon: ArrowPathIcon,
        challengesList: [
            "Normaliser des schémas de données multi-providers",
            "Reprises sur erreur et idempotence des sync",
            "Gestion du rate-limit et des timeouts",
        ],
    },
    {
        scopeTitle: "Infra, CI/CD & observability",
        scopePresentation: "L’exploitation sur AWS ECS impose une discipline d’automatisation, de monitoring et de déploiement reproductible.",
        icon: CloudIcon,
        challengesList: [
            "Modules Terraform réutilisables et versionnés",
            "Pipelines avec tests (unit/E2E/acceptance)",
            "Alerting & dashboards orientés incidents",
        ],
    },
];


export const tictactripProjectData: StandardProjectData = {
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