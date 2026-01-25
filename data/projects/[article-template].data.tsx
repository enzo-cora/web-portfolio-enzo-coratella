import {CloudIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import searchLandingPage from "@/public/projects-gallery/app-immobilier/search-landing-page.webp";
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {ArticleProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {BoltIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.pipelineModelDevOps

const heroSectionData: ProjectHeroSectionData = {
    title: "{{PROJECT_TITLE}}",
    subtitle: "", //Un titre un peu plus éloquant et plus long que le titre principal
    short_app_description: "", //Une courte description qui décrit un peu plus en profondeur l'app, 2 lignes max.
    technical_tags: ["Backend", "Fullstack"], //Available values: ['Backend', 'Fullstack', 'Architecture', 'DevOps']
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
        // ... 4 IMPACTS METRICS MINIMUM
    ],
    project_card: {
        app_type: "{{APP_TYPE}}",
        business_metrics: [
            {
                value: '{{BIZ_METRIC_1_VALUE}}', //Ex: 300
                label: '{{BIZ_METRIC_1_LABEL}}', //Ex:  clients actifs.
                icon: DocumentTextIcon,
            },
            // ... 3 BUSINESS METRICS MINIMUM
        ],
        featuresPills: ['Cross-Platform', 'API-First', 'Scalable Architecture'],
    },
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



/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = searchLandingPage

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
        link: "{{link}}"
    },
}


export const articleProjectTemplateData: ArticleProjectData = {
    type: 'articleProjectView',
    slug: slug,
    heroSectionData,
    presentation: presentationData,
    projectPreview,
}