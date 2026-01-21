import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {DatabaseBackupIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import searchLandingPage from "@/public/projects-gallery/app-immobilier/search-landing-page.webp";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import fullPageScrolling from "@/public/projects-gallery/app-immobilier/full-page-scrolling.webp"
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {FullProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import {PinnedProject} from "@/components/landing-page/sections/PinnedProjectsSection";
import {BoltIcon} from "@heroicons/react/24/solid";
import React from "react";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.whoAmI

const heroSectionData: ProjectHeroSectionData = {
    title: "Who Am I game",
    technical_tags: ["Backend", "Fullstack", "Architecture"],
    subtitle_description: "Real-time web app multiplayer game",
    short_app_description: "Jeu multijoueur en temps réel inspiré de Guess Who?, jouable en ligne à plusieurs, via une interface interactive",
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
        featuresPills: ['Cross-Platform', 'API-First', 'Scalable Architecture'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: fullPageScrolling, alt: '{{GALLERY_ALT_1}}'}
    ],
    column_2: [
        {image: searchLandingPage, alt: '{{GALLERY_ALT_2}}'},
        // ...ajoute d’autres images si besoin
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                « Who Am I game » est une application web temps réel inspirée du jeu de société classique « Guess Who? ».
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
            </p>
        </div>
    ),
    sources: [
        {
            icon: <BoltIcon className="h-4 w-4 text-yellow-400"/>,
            label: "{{SOURCE_1_LABEL}}",
            link: "{{SOURCE_1_LINK}}",
            description: "{{SOURCE_1_DESCRIPTION}}"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "{{SOURCE_2_LABEL}}",
            link: "{{SOURCE_2_LINK}}",
            description: "{{SOURCE_2_DESCRIPTION}}"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_skills: [
        {name: '{{CORE_SKILL_1}}', level: 90, description: "{{CORE_SKILL_1_DESC}}"},
        {name: '{{CORE_SKILL_2}}', level: 80, description: "{{CORE_SKILL_2_DESC}}"},
        // ...
    ],
    specialized_skills: [
        {name: '{{SPEC_SKILL_1}}', level: 90},
        {name: '{{SPEC_SKILL_2}}', level: 70},
        // ...
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: UserGroupIcon,
        name: '{{FEATURE_1_NAME}}',
        description: "{{FEATURE_1_DESCRIPTION}}",
        tags: ['{{TAG_A}}', '{{TAG_B}}', '{{TAG_C}}'],
        feature_type: 'Backend',
    },
    {
        icon: PaintbrushIcon,
        name: '{{FEATURE_2_NAME}}',
        description: "{{FEATURE_2_DESCRIPTION}}",
        tags: ['{{TAG_D}}', '{{TAG_E}}'],
        feature_type: 'Frontend',
    },
    // ...ajoute d’autres features si besoin
];

/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/
const projectMainPicture = searchLandingPage

const pinToLandingPage: PinnedProject = {
    title: heroSectionData.title,
    smallDescription: heroSectionData.subtitle_description,
    image: projectMainPicture,
    slug: slug,
    bulletPointParagraphs: [
        {
            paragraphTitle: "Frontend",
            bulletsPoints: [
                "{{very short key achivment 1}}", //Ca doit tenir sur 5 mots clés maxi par ligne.
                "{{very short key achivment 2}}",
                "{{very short key achivment 3}}",
            ]
        },
        {
            paragraphTitle: "Backend Systems",
            bulletsPoints: [
                "{{very short key achivment 1}}",
                "{{very short key achivment 2}}",
                "{{very short key achivment 3}}",
            ]
        },
        {
            paragraphTitle: "Key Achievements",
            bulletsPoints: [
                "{{very short global key achivment 1}}",
                "{{very short global key achivment 2}}",
                "{{very short global key achivment 3}}",
            ]
        }
    ]
}

/* ----------------------- [PROJECT CAROUSEL] SECTION -----------------------------*/
const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle_description,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Voir projet",
        link: "{{link}}"
    },
    button_2: {
        label: "Gitlab",
        link: "{{link}}"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: '{{CHALLENGE_SCOPE_1_TITLE}}',
        scopeDescription: "{{CHALLENGE_SCOPE_1_DESC}}",
        icon: DatabaseBackupIcon,
        challengesList: [
            "{{CHALLENGE_1_ITEM_1}}",
            "{{CHALLENGE_1_ITEM_2}}",
            "{{CHALLENGE_1_ITEM_3}}",
            // ...
        ],
    },
    {
        scopeTitle: '{{CHALLENGE_SCOPE_2_TITLE}}',
        scopeDescription: "{{CHALLENGE_SCOPE_2_DESC}}",
        icon: ArrowPathIcon,
        challengesList: [
            "{{CHALLENGE_2_ITEM_1}}",
            "{{CHALLENGE_2_ITEM_2}}",
            // ...
        ],
    },
];


export const whoAmIGameFullData: FullProjectData = {
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