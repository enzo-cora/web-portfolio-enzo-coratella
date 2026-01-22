import {ArrowPathIcon, CloudIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import {CopyIcon, DatabaseBackupIcon, HammerIcon, InfoIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import ciProcessImage from "@/public/projects-gallery/pipeline-model-devops/ci-process.png"
import ciChildPipelineImage from "@/public/projects-gallery/pipeline-model-devops/ci-child-pipeline.png"
import gitFlowImage from "@/public/projects-gallery/pipeline-model-devops/gitlab-flow.png"
import ciStagingEnvImage from "@/public/projects-gallery/pipeline-model-devops/ci-staging-env.png"
import ciQualityStage from "@/public/projects-gallery/pipeline-model-devops/ci-quality-stage.png"
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import React from "react";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.pipelineModelDevOps

const heroSectionData: ProjectHeroSectionData = {
    title: "CI/CD Pipeline Model",
    subtitle: "Delivery system industrialisable pour web apps | Test → Build → Deploy",
    short_app_description: "Modèle générique de pipeline GitLab CI/CD, modulaire et réutilisable, intégrant tests, build Docker, versioning et déploiements multi-environnements via Terraform.",
    technical_tags: ["DevOps"],
    impact_metrics: [
        {
            value: "÷4",
            label: "Temps de mise en place CI",
            icon: DocumentTextIcon,
        },
        {
            value: "∞",
            label: "Réutilisation cross-projets",
            icon: CloudIcon,
        },
        {
            value: "<7 min",
            label: "Staging to prod",
            icon: ArrowPathIcon,
        },
        {
            value: "100%",
            label: "Déploiements traçables",
            icon: DocumentTextIcon,
        },
    ],
    project_card: {
        app_type: "DevOps / CI-CD model",
        business_metrics: [
            {
                value: "1 modèle",
                label: "Standard CI/CD",
                icon: DocumentTextIcon,
            },
            {
                value: "0 drift",
                label: "Staging ≈ Prod",
                icon: CloudIcon,
            },
            {
                value: "1 click",
                label: "Release prod",
                icon: DocumentTextIcon,
            },
        ],
        featuresPills: ['GitLab CI Templates', 'Docker Build', 'Terraform Deploy'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: ciProcessImage, alt: 'ciProcessImage'},
        {image: gitFlowImage, alt: 'gitFlowImage'},
    ],
    column_2: [
        {image: ciStagingEnvImage, alt: 'ciStagingEnvImage'},
        {image: ciQualityStage, alt: 'ciTestingStage'},
        {image: ciChildPipelineImage, alt: 'ciChildPipelineImage'},
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Ce projet est un <b>modèle CI/CD industrialisable</b>, conçu pour standardiser et accélérer le cycle de delivery des web apps.
                Il repose sur <b>GitLab CI/CD</b> et des bonnes pratiques modernes (CI, CD, IaC, containerization), tout en restant <b>modulaire</b>,
                <b>scalable</b> et <b>réutilisable</b>.
            </p>
            <br/>
            <p>
                L’architecture est pensée <b>multi-repositories</b> avec une logique unifiée : <b>test → build → deploy → versioning</b>, déclinée par stack
                (frontend, backend, database, infra). La partie CI est centralisée via des <b>templates GitLab</b> (include) pour garantir la cohérence et éviter
                la duplication.
            </p>
            <br/>
            <p>
                Le pipeline orchestre des tests selon le besoin (unit, integration, lint/quality, E2E, load testing) en <b>parallèle</b> ou en <b>séquence</b>,
                puis génère des artefacts traçables : <b>images Docker versionnées</b> et <b>Git tags</b> (vX.Y.Z). Enfin, les déploiements sont gérés
                en <b>multi-environnements</b> via <b>GitLab Flow</b> : staging auto depuis <i>develop</i>, production semi-automatique depuis <i>main</i>.
            </p>
            <br/>
            <p>
                <b>Objectifs principaux</b> : réduire le time-to-market, limiter les erreurs manuelles, renforcer la qualité logicielle et améliorer la collaboration
                dev/ops.
            </p>
            <br/>
            <ul className="list-disc pl-5">
                <li><b>CI templates DRY</b> : une mise à jour propagée à tous les projets.</li>
                <li><b>Infra as Code</b> : environnements reproductibles via Terraform (ECS/ELB/S3/DB…).</li>
                <li><b>Local dev reproductible</b> : Docker Compose pour simuler prod/staging en local.</li>
            </ul>
        </div>
    ),
    sources: [
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/models8/pipeline-model-group",
            description: "Racine du projet"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'GitLab CI', level: 90, description: "pipelines"},
        {name: 'Docker', level: 85, description: "build"},
        {name: 'Terraform', level: 80, description: "IaC"},
        {name: 'AWS', level: 70, description: "deploy"},
    ],
    specialized_stack: [
        {name: 'semantic-release', level: 75},
        {name: 'Docker Compose', level: 70},
        {name: 'GitLab Flow', level: 70},
        {name: 'YAML', level: 85},
        {name: 'Bash Scripts', level: 20},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: DocumentTextIcon,
        name: 'Templates CI/CD centralisés (DRY)',
        description: "CI logic factorisée via templates GitLab (include) : pipelines uniformes, maintenance simplifiée et réutilisation cross-projets.",
        tags: ['GitLab CI', 'Templates', 'DRY'],
        feature_type: 'DevOps',
    },
    {
        icon: ArrowPathIcon,
        name: 'Tests continus',
        description: "Stages unit/integration/quality/E2E/load test exécutables en parallèle ou en série, avec dépendances explicites (build → deploy → e2e).",
        tags: ['Unit', 'E2E', 'Parallel'],
        feature_type: 'DevOps',
    },
    {
        icon: HammerIcon,
        name: 'Build Docker et versioning',
        description: "Chaque commit produit une image Docker versionnée (tag vX.Y.Z selon branche) et injecte la version dans les jobs de déploiement et la doc.",
        tags: ['Docker', 'Registry', 'Tags'],
        feature_type: 'DevOps',
    },
    {
        icon: CloudIcon,
        name: 'Déploiement multi-env',
        description: "Provisioning et déploiement automatisé avec Terraform (workspaces/variables) : staging auto sur develop, prod semi-auto sur main.",
        tags: ['Terraform', 'Staging', 'Prod'],
        feature_type: 'DevOps',
    },
    {
        icon: InfoIcon,
        name: 'Feedback rapide',
        description: "Feedback rapide côté GitLab (status checks, logs, artifacts, environments) pour sécuriser les merges et rendre le delivery lisible.",
        tags: ['MR', 'Artifacts', 'Visibility'],
        feature_type: 'DevOps',
    },
    {
        icon: CopyIcon,
        name: 'Local dev reproductible (Compose)',
        description: "Environnement Docker Compose léger pour reproduire staging/prod en local, faciliter les tests end-to-end et éviter les divergences de config.",
        tags: ['Docker Compose', 'Local', 'Parity'],
        feature_type: 'DevOps',
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = gitFlowImage

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
        link: "https://gitlab.com/models8/pipeline-model-group"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: 'Automation end-to-end du delivery',
        scopePresentation: "Orchestrer un pipeline complet (lint → tests → build → push registry → deploy Terraform) avec des dépendances claires, de la visibilité, et des garde-fous de qualité.",
        icon: ArrowPathIcon,
        challengesList: [
            "Automation complète du delivery: lint, tests, Docker build, push registry, deploy Terraform",
            "Jobs chaînés via needs/dependencies (build → deploy → e2e) + parallélisation maîtrisée",
            "Tests conditionnels selon criticité / env (unit, integration, quality, E2E, load)",
            "Artifacts & logs exploitables pour un feedback loop rapide dans GitLab (MR checks, environments)",
            "Pipeline performant malgré la matrice de tests (optimisation stages, cache, exécution ciblée)",
        ],
    },
    {
        scopeTitle: 'Multi-environnements & GitLab Flow',
        scopePresentation: "Mettre en place une stratégie staging/prod fiable: staging auto depuis develop, production semi-auto depuis main, avec isolation et reproductibilité garanties.",
        icon: CloudIcon,
        challengesList: [
            "Gestion multi-environnements (staging ≠ prod) avec isolation claire et règles de promotion",
            "Staging auto-deploy sur develop, prod déclenchable manuellement sur main (GitLab Flow)",
            "Post-deploy checks & observation (sanity checks, smoke tests, endpoints/health)",
            "Gestion d’erreurs, rollback et re-déploiement contrôlé",
            "Préservation de la cohérence en contexte multi-contributeurs (MR, approvals, protections)",
        ],
    },
    {
        scopeTitle: 'Versioning & infra reproductible (IaC)',
        scopePresentation: "Garantir une traçabilité totale: chaque changement est versionné, et l’infra AWS est codée en Terraform pour recréer les environnements à l’identique.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Versioning automatique et consistant (tags vX.Y.Z, semantic-release / Conventional Commits)",
            "Synchronisation des versions entre code, images Docker et déploiements Terraform",
            "Infrastructure reproductible: AWS 100% Terraform (ECS/ELB/S3/DB/VPC/Security Groups…)",
            "Staging ≈ Prod via Terraform workspaces/variables (parity, zéro config drift)",
            "Support complet du local au cloud: Docker Compose pour éviter toute divergence de config",
            "Sécurité: variables chiffrées, accès verrouillés, séparation des secrets par env",
        ],
    },
];


/* ----------------------- [PINNED PROJECT] SECTION -----------------------------*/


export const pipelineModelDevOpsFullData: StandardProjectData = {
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