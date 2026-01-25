import {CloudIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import articleIllustration
    from "@/public/projects-gallery/refactoring-with-clean-archi/refactoring-clean-archi-illustration.png";
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {ArticleProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {NewspaperIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.refactoringWithCleanArchi

const heroSectionData: ProjectHeroSectionData = {
    title: "Refactoring en Clean Architecture",
    subtitle: "Une stratégie de refacto progressive (sans Big Bang) pour rendre un legacy testable, scalable et maintenable",
    short_app_description: "Document + POC pour restructurer un service nommé 'worker-refresh' autour de UseCases - Gateways - Connectors - Channels - Presenters, en réutilisant ~99% du code existant.",
    technical_tags: ["Architecture"],
    impact_metrics: [
        {
            value: "99%",
            label: "refactor progressif",
            icon: DocumentTextIcon,
        },
        {
            value: "3 mois",
            label: "fini le legacy",
            icon: CloudIcon,
        },
        {
            value: "1",
            label: "ticket par connecteur",
            icon: CloudIcon,
        },
        {
            value: "1–2",
            label: "difficulté moyenne",
            icon: DocumentTextIcon,
        },
    ],
    project_card: {
        app_type: "Architecture / Refactoring strategy",
        business_metrics: [
            {
                value: "5",
                label: "tickets par sprint",
                icon: DocumentTextIcon,
            },
            {
                value: "1",
                label: "ticket par connecteur",
                icon: CloudIcon,
            },
        ],
        featuresPills: ['Clean Architecture', 'Refactoring progressif', 'Backend'],
    },
}



/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Sur ce projet, je suis parti d’un service legacy (&#34;worker-refresh&#34;) devenu difficile à faire évoluer : forte dette technique,
                faible testabilité, onboarding long, et chaque changement risquait de casser des comportements existants.
            </p>
            <br />
            <p>
                Plutôt que de repartir de zéro, j’ai proposé une stratégie de <b>refactoring progressif</b> basée sur les principes de
                <b> Clean Architecture / Hexagonale</b> : séparation stricte <i>Domain → Application (UseCases) → Infrastructure</i>, avec des
                <i> ports/adapters</i> pour découpler la logique métier des détails techniques.
            </p>
            <br />
            <p>
                Le document décrit une nouvelle &#34;core&#34; (entrypoints, controllers, usecases, presenters, bank-gateway) et un flow clair :
                <b> controller → usecase → bank gateway → connector → channels → merge → presenter</b>. Chaque banque est modélisée via un
                <b> connector</b> qui orchestre des <b> channels</b> autonomes (auth, retrieval, parsing) puis merge les résultats selon des règles
                explicites.
            </p>
            <br />
            <p>
                Résultat attendu : un backend plus lisible, testable (unit + intégration au bon niveau), et plus simple à monitorer/logguer.
                La migration est pensée pour se faire <b>connecteur par connecteur</b>, en conservant ~99% du code, avec des techniques de type
                <i> coexistence</i>, <i>shadow read/write</i> et <i>phased rollout</i>.
            </p>
            <br />
            <p>
                Le POC est lançable en mode API et expose un endpoint de démonstration pour exécuter un refresh et récupérer les comptes.
            </p>
        </div>
    ),
    sources: [
        {
            icon: <NewspaperIcon className="text-red-500" width={16} height={16} />,
            label: "Article",
            link: "https://coratella-enzo.notion.site/Architecture-Clean-architecture-Structural-reflection-for-refactoring-open-banking-solution-1d82726c8dca80c6bb32e10505f53d4d?pvs=74",
            description: "Lire sur notion",
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/projects-and-chill/open-banking-ais-refactoring",
            description: "Voir le POC"
        },
    ]
};



/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = articleIllustration

const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Lire l'article",
        link: `/projet/${slug}`
    },
    button_2: {
        label: "Voir le POC",
        link: "https://gitlab.com/projects-and-chill/open-banking-ais-refactoring"
    },
}


export const refactoringWithCleanArchiData: ArticleProjectData = {
    type: 'articleProjectView',
    slug: slug,
    heroSectionData,
    presentation: presentationData,
    projectPreview,
}