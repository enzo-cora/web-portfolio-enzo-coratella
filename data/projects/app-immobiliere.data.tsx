import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {BuildingIcon, DatabaseBackupIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import searchLandingPage from "@/public/projects-gallery/app-immobilier/search-landing-page.webp";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import fullPageScrolling from "@/public/projects-gallery/app-immobilier/full-page-scrolling.webp"
import houseInfo from "@/public/projects-gallery/app-immobilier/house-information-page.webp"
import phoneVersion from "@/public/projects-gallery/app-immobilier/phone-version.webp"
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {PinnedProject} from "@/components/landing-page/sections/project-list-section/components/PinnedProjects.js";
import {BoltIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.immobilier

const heroSectionData: ProjectHeroSectionData = {
    title: "Plateforme de gestion immobilière",
    technical_tags: ["Backend", "Fullstack"],
    subtitle: "Application immobilière dédiée à la gestion centralisée des biens, clients et agents",
    short_app_description: "Transactimo est une application immobilière centralisant la gestion des biens, des clients et des agents, évoluée vers une plateforme CRM sur mesure améliorant performances et expérience utilisateur.",
    impact_metrics: [
        {
            value: '+180',
            label: 'Annonces',
            icon: DocumentTextIcon,
        },
        {
            value: '<200ms',
            label: 'Temps de réponse',
            icon: CloudIcon,
        },
        {
            value: '500+',
            label: 'Clients suivis',
            icon: UserGroupIcon,
        },
        {
            label: 'Automatisation',
            value: 'CI/CD',
            icon: ArrowPathIcon
        },
    ],
    project_card: {
        app_type: "Web application",
        business_metrics: [
            {
                value: '5',
                label: 'Catégories de biens',
                icon: DocumentTextIcon,
            },
            {
                value: '+25',
                label: 'Articles publiés',
                icon: CloudIcon,
            },
            {
                value: '70+',
                label: 'Biens en gestion',
                icon: UserGroupIcon,
            },
        ],
        featuresPills: ['Cross-Platform', 'API-First', 'Scalable Architecture'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: fullPageScrolling, alt: 'Full page scrolling'}
    ],
    column_2: [
        {image: searchLandingPage, alt: 'Recherche - landing page'},
        {image: phoneVersion, alt: 'Ecrans version mobile'},
        {image: houseInfo, alt: 'Fiche du bien'}
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p><b>Transactimo</b> est une application métier conçue pour répondre aux besoins spécifiques d’une agence immobilière
                spécialisée dans la vente et la location de biens résidentiels et commerciaux. Son objectif principal est de
                digitaliser et centraliser la gestion des annonces, le suivi des clients et le travail des agents au sein d’un
                outil unique.</p>
            <br/>
            <p>L’application permet notamment la création et la publication de biens immobiliers, la gestion des profils
                clients et agents, un système de mise en relation entre les biens et les critères de recherche, ainsi qu’un espace
                de rédaction d’articles destiné à informer ou attirer de potentiels acquéreurs.</p>
            <br/>
            <p>Le projet a connu plusieurs cycles d’évolution : initialement développé avec Angular, il a ensuite été migré vers React
                afin de mieux répondre aux exigences de performance, de maintenabilité et d’expérience utilisateur. Cette transition a
                permis une refonte complète de l’UX/UI et une amélioration significative de la fluidité de navigation, tout en conservant
                la logique métier et les fonctionnalités clés. L’application a ainsi évolué d’une simple interface de gestion vers une
                plateforme CRM entièrement sur mesure, adaptée aux réalités du secteur immobilier.</p>
            <br/>
            <p>Ce type de plateforme est aujourd’hui essentiel pour les agences souhaitant moderniser leurs outils,
                fluidifier la communication interne et optimiser la conversion des prospects.</p>
        </div>
    ),
    sources: [
        {
            icon: <BoltIcon className="text-yellow-400" width={16} height={16} />,
            label: "Fast try",
            link: "https://gitlab.com/projects-and-chill/immobilier/docker-immo-angular",
                description: "Easy try avec docker"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/projects-and-chill/immobilier",
            description: "Racine du projet"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'Nodejs', level: 95, description: "Main language"},
        {name: 'PostgresSql', level: 90, description: "Database"},
        {name: 'Angular', level: 80, description: "Frontend"},
        {name: 'Flutter', level: 85, description: "Mobile"},
        {name: 'React', level: 85, description: "Refonte"},
        {name: 'AWS', level: 80, description: "Cloud"},
    ],
    specialized_stack: [
        {name: 'Rest API', level: 100},
        {name: 'UI/UX', level: 30},
        {name: 'Clean architecture', level: 30},
        {name: 'AWS', level: 90},
        {name: 'Terraform', level: 20},
        {name: 'ECS', level: 90},
        {name: 'Docker', level: 80},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: UserGroupIcon,
        name: 'Gestion utilisateurs & authent',
        description: "Inscription, login et gestion multi-rôles (admin, agent, client) avec authente sécurisée via JWT et mots de passe hashés en bcrypt.",
        tags: ['JWT', 'RBAC', 'bcrypt'],
        feature_type: 'Backend',
    },
    {
        icon: BuildingIcon,
        name: 'Admin panel (agents)',
        description: "Back-office pour les agents : dashboard des annonces, CRUD des biens et allocation/gestion des biens par agent.",
        tags: ['Dashboard', 'CRUD', 'Agents'],
        feature_type: 'Backend',
    },
    {
        icon: CloudIcon,
        name: 'Publishing system (annonces)',
        description: "Système de publication d’annonces : édition enrichie (titre, description, prix, photos…), filtres (type, budget, localisation) et search avancée.",
        tags: ['Search', 'Filtres', 'Media'],
        feature_type: 'Backend',
    },
    {
        icon: ArrowPathIcon,
        name: 'Matching clients ↔ biens',
        description: "Matching engine simple basé sur les critères client et des requêtes DB optimisées selon chaque profil.",
        tags: ['Matching', 'Query opti', 'Perf'],
        feature_type: 'Backend',
    },
    {
        icon: DocumentTextIcon,
        name: 'Édition d’articles',
        description: "Rédaction en Markdown pour publier du contenu sur le site, avec gestion par catégorie, date et auteur.",
        tags: ['Markdown', 'CMS', 'Content'],
        feature_type: 'Backend',
    },
    {
        icon: PaintbrushIcon,
        name: 'Interface client',
        description: "UI côté client : système de filtres (localisation, prix, surface…), listing d’annonces (liste + détail) et affichage responsive desktop/mobile.",
        tags: ['Filters', 'Responsive', 'UX'],
        feature_type: 'Frontend',
    },
    {
        icon: UserGroupIcon,
        name: 'Interface agent immobilier',
        description: "Espace agents : login, dashboard de gestion des annonces et formulaires pour créer / éditer / supprimer des annonces.",
        tags: ['Dashboard', 'Forms', 'Auth'],
        feature_type: 'Fullstack',
    },
    {
        icon: DocumentTextIcon,
        name: 'Gestion de contenu',
        description: "Publication d’actus & tips immo, avec affichage côté client et classement chronologique.",
        tags: ['Content', 'Articles', 'Timeline'],
        feature_type: 'Fullstack',
    },
];

/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/
const projectMainPicture = searchLandingPage

const pinToLandingPage: PinnedProject = {
    title: heroSectionData.title,
    smallDescription: heroSectionData.subtitle,
    image: projectMainPicture,
    slug: slug,
    bulletPointParagraphs: [
        {
            paragraphTitle: "Frontend",
            bulletsPoints: [
                "Migration Angular → React",
                "Recherche avec filtres avancés",
                "Optimisations performance frontend",
            ]
        },
        {
            paragraphTitle: "Backend Systems",
            bulletsPoints: [
                "API REST Node.js",
                "PostgreSQL optimisé",
                "Authentification sécurisée multi-rôles",
            ]
        },
        {
            paragraphTitle: "Key Achievements",
            bulletsPoints: [
                "CRM immobilier centralisé",
                "API <200ms",
                "Docker, CI/CD, AWS",
            ]
        }
    ]
}

/* ----------------------- [PROJECT CAROUSEL] SECTION -----------------------------*/

const projectPreview : ProjectPreview = {
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
        link: "https://gitlab.com/projects-and-chill/immobilier"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: 'Backend & Architecture',
        scopePresentation: "API REST Node.js pensée pour la scalabilité et la maintenabilité, avec un découpage clair des responsabilités.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Clean Architecture : isolation domain / application / infrastructure",
            "Use-cases + ports/adapters pour limiter le coupling",
            "Gestion métier : biens, utilisateurs, agents, matching, publication, permissions",
            "Modélisation data + indexes pour requêtes rapides",
            "Tests unitaires centrés sur le domain + règles métier",
            "Perf & observabilité : logs, métriques, latence"
        ],
    },
    {
        scopeTitle: 'DevOps & Sécurité',
        scopePresentation: "Déploiement containerisé sur AWS et sécurisation des secrets / routes sensibles.",
        icon: ArrowPathIcon,
        challengesList: [
            "Dockerisation des services (Dockerfile, build pipeline)",
            "Déploiement AWS via ECS (task definitions, services)",
            "Infra scalable + rollouts (rolling / blue-green selon besoin)",
            "Secrets via AWS Parameter Store (config centralisée)",
            "Middleware de protection : validation, auth, guards",
            "Hardening : contrôle inputs, limitation surface d’attaque"
        ],
    },
    {
        scopeTitle: 'Frontend & Accès',
        scopePresentation: "Interface responsive orientée UX, avec séparation claire entre espace public et espace agent.",
        icon: PaintbrushIcon,
        challengesList: [
            "UX/UI sur-mesure : interface clean, fluide, responsive",
            "Mise en valeur des annonces : liste + détail, visuels clairs",
            "Design system / composants réutilisables",
            "Routing : espaces public vs privé",
            "Navigation protégée agents + redirections conditionnelles selon rôles",
            "Optimisation perfs : lazy loading, images, cache"
        ],
    },
];


export const immobilierFullData: StandardProjectData = {
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