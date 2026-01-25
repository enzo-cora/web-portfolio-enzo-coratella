import {ArrowPathIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import {BatteryWarningIcon, CodeIcon, DatabaseBackupIcon, FastForwardIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import componentCreatorMiniaturePicture from "@/public/projects-gallery/npm-component-creator/component-creator.png"
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import npmLogo from "@/public/svg/npm-icon.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {CogIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.npmComponentCreator

const heroSectionData: ProjectHeroSectionData = {
    title: "Component Creator CLI",
    subtitle: "CLI ultra-rapide pour générer des composants 100% custom",
    short_app_description: "Package NPM offrant un CLI permettant de générer en 1 commande une structure complète (dossiers, fichiers, contenu) via des templates entièrement customisables avec placeholders.", //Une courte description qui décrit un peu plus le fonctionnement/la technique. 2 lignes max.
    technical_tags: ["Backend", "Architecture"],
    impact_metrics: [
        {
            value: '1',
            label: 'prêt en 1 commande',
            icon: CodeIcon,
        },
        {
            value: '≈1s',
            label: 'Scaffolding complet',
            icon: DocumentTextIcon,
        },
        {
            value: 'x10',
            label: 'Temps économisé',
            icon: FastForwardIcon,
        },
        {
            value: '-99%',
            label: "semanticals erreurs",
            icon: BatteryWarningIcon,
        },
    ],
    project_card: {
        app_type: "NPM package",
        business_metrics: [
            {
                value: '0',
                label: "boilerplate manuel",
                icon: DocumentTextIcon,
            },
            {
                value: '100%',
                label: 'Scaffolding auto',
                icon: DocumentTextIcon,
            },
            {
                value: '∞',
                label: 'language agnostique',
                icon: DocumentTextIcon,
            },
        ],
        featuresPills: ['Cross-Platform', 'Developer Experience', 'Custom Templates'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: componentCreatorMiniaturePicture, alt: 'component Creator Miniature'}
    ],
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-lg text-justify leading-relaxed">
            <p>
                Quand tu construis une architecture propre (DDD, Clean Architecture, React feature-folders, MVC…), tu te retrouves vite à recréer les mêmes structures de composants encore et encore.
            </p>
            <br />
            <p>
                <b>Component Creator CLI</b> automatise ce workflow : tu définis tes templates (arborescence + fichiers + contenu) avec des placeholders génériques (<i>$pascalCase$</i>, <i>$camelCase$</i>, <i>$name$</i>, …), puis tu génères un composant complet en <b>≈ 1 seconde</b>.
            </p>
            <br />
            <p>
                L’objectif : <b>gagner du temps</b> pendant le setup et l’évolution du projet, <b>standardiser</b> les patterns d’architecture et <b>éviter</b> le scaffolding manuel multi-fichiers.
            </p>
            <br />
            <p>
                Comment le “Angular CLI”, mais pour <b>tes</b> composants et <b>tes</b> conventions.
            </p>
            <div className="mt-4 space-y-2 font-mono text-sm">
                <div className="flex w-fit items-baseline gap-2 rounded-md bg-black px-3 py-2 text-white dark:bg-white dark:text-black">
                    <span className="opacity-60">$</span>
                    <code><span className="text-blue-400 dark:text-blue-600">ccc</span> init</code>
                    <span className="opacity-60"># init config & templates</span>
                </div>

                <div className="flex w-fit items-baseline gap-2 rounded-md bg-black px-3 py-2 text-white dark:bg-white dark:text-black">
                    <span className="opacity-60">$</span>
                    <code><span className="text-blue-400 dark:text-blue-600">ccc</span> list</code>
                    <span className="opacity-60"># list templates</span>
                </div>

                <div className="flex w-fit items-baseline gap-2 rounded-md bg-black px-3 py-2 text-white dark:bg-white dark:text-black">
                    <span className="opacity-60">$</span>
                    <code><span className="text-blue-400 dark:text-blue-600">ccc</span> generate &lt;template&gt; &lt;name&gt;</code>
                    <span className="opacity-60"># generate component</span>
                </div>
            </div>
        </div>
    ),
    sources: [
        {
            icon: <Image src={npmLogo} alt="GitLab" width={16} height={16}/>,
            label: "NPM",
            link: "https://www.npmjs.com/package/component-creator-cli",
            description: "Npm package"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "GitHub",
            link: "https://gitlab.com/projects-and-chill/component-creator-cli",
            description: "Code source"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'typescript', level: 100, description: 'langage'},
        {name: 'nodejs', level: 100, description: 'runtime'},
        {name: 'commanderjs', level: 100, description: 'cli'},
    ],
    specialized_stack: [
        {name: 'template parsing', level: 100},
        {name: 'placeholder engine', level: 100},
        {name: 'filesystem operations', level: 100},
        {name: 'npm', level: 100},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: CogIcon,
        name: 'Moteur de templates custom',
        description: "Moteur de templates entièrement libre permettant de définir arborescence, fichiers et contenu. Support des placeholders dynamiques dans le contenu.",
        tags: ['Templates', 'Placeholders', 'Architecture'],
        feature_type: 'Backend',
    },
    {
        icon: DatabaseBackupIcon,
        name: 'Pipeline de parsing & génération',
        description: "Pipeline chargé de parser les templates et garantir une génération cohérente et déterministe.",
        tags: ['Parsing', 'Scaffolding', 'Node.js'],
        feature_type: 'Backend',
    },
    {
        icon: CodeIcon,
        name: 'Commandes CLI & bootstrap projet',
        description: "Commandes backend dédiées pour initialiser un projet (ccc init), lister les templates disponibles (ccc list) et générer des composants avec options avancées (--subdomain).",
        tags: ['CLI', 'Commander.js', 'Tooling'],
        feature_type: 'Backend',
    },
    {
        icon: PaintbrushIcon,
        name: 'CLI UX',
        description: "Interface terminal claire et lisible avec commandes explicites, feedback immédiat, messages d’erreur compréhensibles et focus fort sur la Developer Experience.",
        tags: ['CLI UX', 'Terminal UI', 'DX'],
        feature_type: 'Frontend',
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = componentCreatorMiniaturePicture

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
        label: "GitHub",
        link: "https://github.com/enzo-cora/component-creator-cli"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: 'Template system flexible',
        scopePresentation: "Supporter des structures complexes (React, MVC, DDD layers…) sans imposer d’architecture.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Parser des templates custom (folders/files)",
            "Garder le système scalable & simple",
            "S’adapter à n’importe quel stack",
        ],
    },
    {
        scopeTitle: 'Placeholders & UX CLI',
        scopePresentation: "Remplacement dynamique des placeholders + expérience CLI clean.",
        icon: ArrowPathIcon,
        challengesList: [
            "Détecter/remplacer $pascalCase$/$camelCase$/$name$",
            "Messages d’erreur clairs & commandes intuitives",
            "Génération optionnelle via --subdomain",
        ],
    },
];




export const npmComponentCreatorFullData: StandardProjectData = {
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