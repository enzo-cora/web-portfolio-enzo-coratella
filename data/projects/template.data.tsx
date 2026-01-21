import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {DatabaseBackupIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import searchLandingPage from "@/public/images/projet-immobilier/search-landing-page.webp";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import fullPageScrolling from "@/public/images/projet-immobilier/full-page-scrolling.webp"
import gitlabLogo from "@/public/images/gitlab-logo-500-rgb.svg"
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

const heroSectionData: ProjectHeroSectionData = {
    title: "{{PROJECT_TITLE}}",
    technical_tags: ["Backend", "Fullstack", "Architecture"],
    subtitle_description: "{{ONE_LINE_SUBTITLE_DESCRIPTION}}",
    short_app_description: "{{SHORT_APP_DESCRIPTION (2–3 lignes max)}}",
    impact_metrics: [
        {
            value: '{{METRIC_1_VALUE}}',
            label: '{{METRIC_1_LABEL}}',
            icon: DocumentTextIcon,
        },
        {
            value: '{{METRIC_2_VALUE}}',
            label: '{{METRIC_2_LABEL}}',
            icon: CloudIcon,
        },
        // ...ajoute d’autres métriques si besoin
    ],
    project_card: {
        app_type: "{{APP_TYPE}}",
        business_metrics: [
            {
                value: '{{BIZ_METRIC_1_VALUE}}',
                label: '{{BIZ_METRIC_1_LABEL}}',
                icon: DocumentTextIcon,
            },
            // ...
        ],
        featuresPills: ['{{PILL_1}}', '{{PILL_2}}', '{{PILL_3}}'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {imageSrc: fullPageScrolling.src, alt: '{{GALLERY_ALT_1}}'}
    ],
    column_2: [
        {imageSrc: searchLandingPage.src, alt: '{{GALLERY_ALT_2}}'},
        // ...ajoute d’autres images si besoin
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                <b>{{PROJECT_NAME}}</b> — {{INTRO_SENTENCE}}.
            </p>
            <br/>
            <p className="text-sm opacity-80">
                "{{LONG_DESCRIPTION_PLACEHOLDER}}" (Ici on s’attend à une description plus ou moins longue, avec contexte, objectifs, évolutions, etc.).
            </p>
        </div>
    ),
    sources: [
        {
            icon: <BoltIcon className="h-4 w-4 text-yellow-400" />,
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
    imageSrc: projectMainPicture,
    slug: Slugs.immobilier,
    bulletPointParagraphs: [
        {
            paragraphTitle: "{{PIN_SECTION_1_TITLE}}",
            bulletsPoints: [
                "{{PIN_BULLET_1}}",
                "{{PIN_BULLET_2}}",
                // ...
            ]
        },
        {
            paragraphTitle: "{{PIN_SECTION_2_TITLE}}",
            bulletsPoints: [
                "{{PIN_BULLET_3}}",
                "{{PIN_BULLET_4}}",
            ]
        },
    ]
}

/* ----------------------- [PROJECT CAROUSEL] SECTION -----------------------------*/
const projectPreview : ProjectPreview = {
    slug: Slugs.immobilier,
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


export const immobilierFullData: FullProjectData = {
    slug: Slugs.immobilier,
    heroSectionData,
    gallery,
    presentation: presentationData,
    stack: projectStackData,
    features: features,
    technicalChallenges,
    projectPreview,
    pinToLandingPage,
}