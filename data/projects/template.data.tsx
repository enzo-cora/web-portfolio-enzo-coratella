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

const slug = Slugs.whoAmI //TODO REPLACE ME

const heroSectionData: ProjectHeroSectionData = {
    title: "{{PROJECT_TITLE}}",
    technical_tags: ["Backend", "Fullstack"], //Available values: ['Backend', 'Fullstack', 'Architecture', 'DevOps']
    subtitle_description: "{{ONE_LINE_SUBTITLE_DESCRIPTION}}",
    short_app_description: "{{SHORT_APP_DESCRIPTION (2 lignes max)}}",
    impact_metrics: [
        {
            value: '{{METRIC_1_VALUE}}', //Ex: '<200ms'
            label: '{{METRIC_1_LABEL}}',// temps de réponse
            icon: DocumentTextIcon,
        },
        {
            value: '{{METRIC_2_VALUE}}', //Ex: 200000
            label: '{{METRIC_2_LABEL}}', //ex: articles référencés
            icon: CloudIcon,
        },
        // ...ajoute d’autres métriques si besoin
    ],
    project_card: {
        app_type: "{{APP_TYPE}}",
        business_metrics: [
            {
                value: '{{BIZ_METRIC_1_VALUE}}', //Ex: 300
                label: '{{BIZ_METRIC_1_LABEL}}', //Ex:  clients actifs.
                icon: DocumentTextIcon,
            },
            // ...
        ],
        featuresPills: ['Cross-Platform', 'API-First', 'Scalable Architecture'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: fullPageScrolling, alt: 'xxxxxxxx'}
    ],
    column_2: [
        {image: searchLandingPage, alt: 'xxxxxxxx'},
        // ...ajoute d’autres images si besoin (au total 2 min, 4max)
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                - [LONG_DESCRIPTION_PLACEHOLDER] (Ici on s’attend à une description plus ou moins longue, avec contexte, objectifs, évolutions, etc.).
                - Sauter les ligne avec une seule balise BR entre les paragraphes.
            </p>
        </div>
    ),
    sources: [
        {
            icon: <BoltIcon className="text-yellow-400" width={16} height={16} />,
            label: "Fast try",
            link: "https://gitlab.com/xxxxxxxxxxxxxxxxxxx",
            description: "Easy try avec docker"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/xxxxxxxxxxxxxxxxxxx",
            description: "Racine du projet"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_skills: [
        {name: '{{CORE_SKILL_1}}' /*1 mot: exemple "mongodb"*/, level: 90 /*pourcentage d'utilisation dans le projet*/, description: "{{description}}" /*1 mot ou 2 max, ex: database */},
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

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = searchLandingPage

const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle_description,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Voir projet",
        link: `/projet/${slug}`
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
            "{{CHALLENGE_1_ITEM_1}}", //10 mots maxi, on essaye de resté court autant que possible.
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


/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/

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


export const templateFullData: FullProjectData = {
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