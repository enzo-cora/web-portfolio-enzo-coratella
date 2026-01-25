import {ArrowPathIcon, CloudIcon, DocumentTextIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {DatabaseBackupIcon, TreesIcon} from "lucide-react";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import awsCloudFormationIllustration
    from "@/public/projects-gallery/aws-cloud-formation-iac/cloud-formation-illustration.png";
import gitlabLogo from "@/public/svg/gitlab-logo-500-rgb.svg";
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {StandardProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import {BoltIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";

/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.awsCloudFormationIac;

const heroSectionData: ProjectHeroSectionData = {
    title: "AWS CloudFormation — IaC",
    subtitle: "Des templates CloudFormation modulaires pour déployer une archi AWS complète, reproductible et production-ready.",
    short_app_description:
        "Ensemble de templates CloudFormation pour déployer rapidement une infrastructure AWS fullstack, modulaire et prête pour la production.",
    technical_tags: ["DevOps"],
    impact_metrics: [
        {
            value: "<10 min",
            label: "Déploiement",
            icon: BoltIcon,
        },
        {
            value: "6",
            label: "Modules réutilisables",
            icon: DatabaseBackupIcon,
        },
        {
            value: "-70%",
            label: "Temps de setup",
            icon: BoltIcon,
        },
        {
            value: "100%",
            label: "Infra as code",
            icon: DocumentTextIcon,
        },
    ],
    project_card: {
        app_type: "IaC / CloudFormation Templates",
        business_metrics: [
            {
                value: "3 ",
                label: "environnements",
                icon: TreesIcon,
            },
            {
                value: "0",
                label: "config drift",
                icon: CloudIcon,
            },
            {
                value: "1-click",
                label: "reproductibilité",
                icon: ArrowPathIcon,
            },
        ],
        featuresPills: ["Cross-Project", "IaC", "Production-Ready"],
    },
};

const gallery: GalleryData = {
    column_1: [{image: awsCloudFormationIllustration, alt: "aws CloudFormation Illustration"}],
};

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Gérer une infrastructure cloud manuellement devient rapidement complexe, chronophage et source d’erreurs
                — surtout lorsque les projets grandissent ou doivent être répliqués. C’est précisément là que
                l’Infrastructure as Code (IaC) prend tout son sens : elle apporte automatisation, cohérence et
                versioning à l’infrastructure.
            </p>
            <br/>
            <p>
                Dans cette optique, j’ai conçu un ensemble de <strong>templates CloudFormation</strong> permettant de
                déployer des architectures AWS production-ready. Ces templates sont pensés pour être modulaires et
                réutilisables sur plusieurs projets personnels et professionnels. Ils encapsulent l’ensemble de
                l’infrastructure d’une application web fullstack — ECS clusters, load balancing, auto-scaling,
                monitoring et réseau sécurisé — tout en restant flexibles selon les besoins spécifiques de chaque
                projet.
            </p>
            <br/>
            <p className="text-sm italic opacity-80">
                <strong>Note :</strong> CloudFormation reste très utilisé, mais des solutions plus flexibles et cloud-agnostic comme Terraform ou Pulumi sont aujourd’hui souvent privilégiées. Maîtriser CloudFormation permet néanmoins de comprendre ce qui se passe réellement *under the hood* avec ces outils higher-level.
            </p>
        </div>
    ),
    sources: [
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "Gitlab",
            link: "https://gitlab.com/infrastructure-as-code6/aws-cloud-formation",
            description: "Librairie CloudFormation",
        },
    ],
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_stack: [
        {
            name: "AWS CloudFormation",
            level: 95,
            description: "IaC",
        },
        {
            name: "AWS ECS",
            level: 85,
            description: "Compute",
        },
        {
            name: "AWS VPC",
            level: 80,
            description: "Réseau",
        },
        {
            name: "AWS ALB",
            level: 75,
            description: "Load balancer",
        },
    ],
    specialized_stack: [
        {name: "EC2", level: 60},
        {name: "Auto Scaling", level: 70},
        {name: "CloudWatch", level: 70},
        {name: "IAM Roles", level: 65},
        {name: "Security Groups", level: 65},
        {name: "Subnets", level: 60},
    ],
};

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: CloudIcon,
        name: "Stacks réutilisables & adaptables",
        description: "Templates conçus pour être réutilisés et facilement adaptés à différents types de projets.",
        tags: ["Reusable", "Adaptable", "IaC"],
        feature_type: "DevOps",
    },
    {
        icon: BoltIcon,
        name: "Déploiement ECS (Fargate ou EC2)",
        description: "Architecture conteneurisée pour exécuter des applications web via ECS, avec choix entre Fargate ou des clusters basés sur EC2 selon les besoins.",
        tags: ["ECS", "Fargate", "EC2"],
        feature_type: "DevOps",
    },
    {
        icon: UserGroupIcon,
        name: "Load balancing & haute disponibilité",
        description: "Intégration d’un ALB pour la distribution du trafic et la tolérance aux pannes.",
        tags: ["ALB", "High availability", "Fault tolerance"],
        feature_type: "DevOps",
    },
    {
        icon: ArrowPathIcon,
        name: "Auto-scaling",
        description: "Règles de scaling permettant d’ajuster automatiquement le nombre de conteneurs en fonction du trafic et/ou de l’utilisation des ressources.",
        tags: ["AutoScaling", "Scaling rules", "ECS Service"],
        feature_type: "DevOps",
    },
    {
        icon: DocumentTextIcon,
        name: "Monitoring & métriques",
        description: "Intégration CloudWatch pour une visibilité complète (santé, performance, alertes et logs selon les stacks).",
        tags: ["CloudWatch", "Metrics", "Observability"],
        feature_type: "DevOps",
    },
    {
        icon: DatabaseBackupIcon,
        name: "Infrastructure modulaire",
        description: "Chaque stack (réseau, compute, base de données) peut être utilisée indépendamment ou assemblée avec les autres.",
        tags: ["Modular", "Network", "Compute"],
        feature_type: "DevOps",
    },
];

/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/

const projectMainPicture = awsCloudFormationIllustration;

const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Voir projet",
        link: `/projet/${slug}`,
    },
    button_2: {
        label: "Gitlab",
        link: "https://gitlab.com/infrastructure-as-code6/aws-cloud-formation",
    },
};

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/

const technicalChallenges: TechnicalChallengeData[] = [
    {
        scopeTitle: "Modularité & réutilisabilité",
        scopePresentation:
            "Concevoir des stacks CloudFormation portables, paramétrables et réutilisables, sans valeurs hardcodées, pour pouvoir les cloner sur différents projets/environnements.",
        icon: DatabaseBackupIcon,
        challengesList: [
            "Découpage en stacks indépendantes (network/compute/db)",
            "Paramètres/outputs propres pour chaîner les stacks",
            "Éviter les valeurs hardcodées (ports, CIDR, ARNs)",
            "Gestion des variations projet via flags/conditions",
        ],
    },
    {
        scopeTitle: "Orchestration AWS, scaling & observability",
        scopePresentation:
            "Assembler VPC, ECS, ALB, IAM et l’auto-scaling dans une archi cohérente, tout en gardant une prod stable, observable et cost-aware.",
        icon: ArrowPathIcon,
        challengesList: [
            "Composer VPC, ECS, ALB, IAM en un stack cohérent",
            "Auto-scaling sans interruption de service",
            "Monitoring fullstack sans spam de logs",
            "Optimiser les coûts CloudWatch (métriques/alertes)",
            "Sécurité fine mais générique (IAM, SG, least privilege)",
        ],
    },
];

export const awsCloudFormationIacFullData: StandardProjectData = {
    type: 'standardProject',
    slug: slug,
    heroSectionData,
    gallery,
    presentation: presentationData,
    stack: projectStackData,
    features: features,
    technicalChallenges,
    projectPreview,
};