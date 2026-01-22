import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {CrossIcon, DatabaseBackupIcon, HandIcon, PaintbrushIcon, TimerIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg"
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import ansibleIllustration from "@/public/projects-gallery/ansible-playbook/ansible-illustration.png"
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

const slug = Slugs.ansiblePlaybookDevOps

const heroSectionData: ProjectHeroSectionData = {
    title: "Ansible Runner Provisioning",
    subtitle: "Provisionnement automatisé et reproductible de GitLab Runners Linux via Ansible",
    short_app_description: "Playbooks et rôles Ansible pour installer et configurer des GitLab Runners sur Ubuntu/Debian de manière idempotente, reproductible et testable en local.",
    technical_tags: ["DevOps"],
    impact_metrics: [
        {
            value: '2',
            label: 'distros supportées',
            icon: DocumentTextIcon,
        },
        {
            value: '100%',
            label: 'idempotent',
            icon: CrossIcon,
        },
        {
            value: '~5min',
            label: 'ready to work',
            icon: TimerIcon,
        },
        {
            value: '0',
            label: 'config manuelle',
            icon: HandIcon,
        },
    ],
    project_card: {
        app_type: "DevOps / Infrastructure as Code",
        business_metrics: [
            {
                value: '- heures',
                label: 'Pas temps perdu',
                icon: TimerIcon,
            },
            {
                value: '1',
                label: 'role réutilisable',
                icon: DatabaseBackupIcon,
            },
            {
                value: 'Multi',
                label: 'local / hosts',
                icon: CloudIcon,
            },
        ],
        featuresPills: ['IaC', 'Idempotent', 'Local Testing'],
    },
}


const gallery: GalleryData = {
    column_1: [
        {image: ansibleIllustration, alt: 'ansibleIllustration'}
    ],
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Dans un monde où l’automatisation de l’infrastructure devient indispensable, des outils comme <b>Ansible</b> apportent fiabilité, rapidité et maintenabilité. L’approche <b>Infrastructure as Code (IaC)</b> est aujourd’hui une pratique clé pour les développeurs et DevOps souhaitant industrialiser les déploiements et réduire les erreurs liées aux configurations manuelles.
            </p>
            <br/>
            <p>
                Ce projet présente un ensemble de <b>playbooks et rôles Ansible</b> conçus pour automatiser l’installation et la configuration de <b>GitLab Runners</b> sur des environnements Linux locaux. Grâce à une structure modulaire et au respect des best practices Ansible, la solution est <b>réutilisable</b>, <b>adaptable</b> et garantit des déploiements <b>cohérents</b> et <b>reproductibles</b> d’un système à l’autre.
            </p>
        </div>
    ),
    sources: [
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "GitLab",
            link: "https://gitlab.com/infrastructure-as-code6/ansible/playbooks/ansible-playbook-linux-gitlab-runner",
            description: "Ansible playbooks"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/infrastructure-as-code6/ansible/roles/ansible-role-gitlab-runner-install",
            description: "Ansible role"
        },
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {name: 'Ansible', level: 90, description: "IaC"},
        {name: 'Linux', level: 85, description: "sysadmin"},
        {name: 'GitLab Runner', level: 80, description: "CI runner"},
        {name: 'YAML', level: 75, description: "config"},
    ],
    specialized_stack: [
        {name: 'Roles', level: 90},
        {name: 'Idempotency', level: 85},
        {name: 'Inventories & Vars', level: 80},
        {name: 'Local provisioning', level: 70},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: CloudIcon,
        name: 'Provisioning GitLab Runner from scratch',
        description: "Installation et configuration automatisées d’un GitLab Runner sur Ubuntu/Debian via Ansible.",
        tags: ['Ubuntu', 'Debian', 'GitLab Runner'],
        feature_type: 'DevOps',
    },
    {
        icon: ArrowPathIcon,
        name: 'Idempotence by design',
        description: "Les tasks sont pensées pour être rejouées sans effets de bord (no-op si déjà conforme).",
        tags: ['Idempotent', 'Safe re-run', 'Deterministic'],
        feature_type: 'DevOps',
    },
    {
        icon: DatabaseBackupIcon,
        name: 'Roles modulaires & réutilisables',
        description: "Séparation playbooks / roles pour réutiliser la brique d’installation dans d’autres contexts et variantes de runners.",
        tags: ['Reusable', 'Modular', 'Separation of concerns'],
        feature_type: 'DevOps',
    },
    {
        icon: DocumentTextIcon,
        name: 'Variables & inventories configurables',
        description: "Paramétrage centralisé pour adapter facilement le provisioning selon l’environnement (local, VM, etc.).",
        tags: ['Vars', 'Inventory', 'Templating'],
        feature_type: 'DevOps',
    },
    {
        icon: UserGroupIcon,
        name: 'Workflow de test en local',
        description: "Validation du déploiement sans toucher à la prod ni à des serveurs distants, pour itérer vite et propre.",
        tags: ['Local test', 'Fast feedback', 'Safe'],
        feature_type: 'DevOps',
    },
    {
        icon: PaintbrushIcon,
        name: 'Structure projet clean',
        description: "Organisation claire des playbooks et rôles pour rester scalable quand le périmètre grandit.",
        tags: ['Clean structure', 'Scalable', 'Maintainable'],
        feature_type: 'DevOps',
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = ansibleIllustration

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
        label: "GitLab",
        link: "https://gitlab.com/infrastructure-as-code6/ansible/playbooks/ansible-playbook-linux-gitlab-runner"
    },
}

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: 'Modularité & réutilisabilité',
        scopePresentation: "Transformer un provisioning ‘one-shot’ en briques réutilisables et composables (roles).",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Découpage playbooks / roles",
            "Variables pour multi-context",
            "Structure scalable",
        ],
    },
    {
        scopeTitle: 'Idempotence & fiabilité',
        scopePresentation: "Garantir des exécutions répétables sans opérations redondantes ni drift de configuration.",
        icon: ArrowPathIcon,
        challengesList: [
            "Tasks re-run safe",
            "Éviter les effets de bord",
            "Maintenabilité à long terme",
        ],
    },
    {
        scopeTitle: 'Tests locaux sans risque',
        scopePresentation: "Valider le provisioning sur des environnements locaux avant tout déploiement plus large.",
        icon: CloudIcon,
        challengesList: [
            "Reproduire un host cible",
            "Itérer rapidement",
            "Zéro impact production",
        ],
    },
];


export const ansiblePlaybookDevopsFullData: StandardProjectData = {
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