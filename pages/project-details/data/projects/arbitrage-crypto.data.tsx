import {ArrowPathIcon, CloudIcon, DocumentTextIcon, RocketLaunchIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {AccessibilityIcon, BuildingIcon, DatabaseBackupIcon, PaintbrushIcon} from "lucide-react";
import {Feature} from "@/pages/project-details/sections/ProjectFeatures";
import searchLandingPage from "@/public/images/projet-immobilier/search-landing-page.webp";
import {GalleryData} from "@/pages/project-details/sections/ProjectGalerie";
import fullPageScrolling from "@/public/images/projet-immobilier/full-page-scrolling.webp"
import houseInfo from "@/public/images/projet-immobilier/house-information-page.webp"
import phoneVersion from "@/public/images/projet-immobilier/phone-version.webp"
import gitlabLogo from "@/public/images/gitlab-logo-500-rgb.svg"
import {ProjectPresentationData} from "@/pages/project-details/sections/ProjectPresentationText";
import Image from "next/image";
import {TechnicalChallengeData} from "@/pages/project-details/sections/ProjectTechnicalChallenges";
import {ProjectStackData} from "@/pages/project-details/sections/ProjectStackSection";
import {ProjectHeroSectionData} from "@/pages/project-details/sections/ProjectHeroSection";
import {ProjectFullPageData} from "@/pages/project-details/types";

/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const heroSectionData: ProjectHeroSectionData = {
    title: "Crypto Arbitrage",
    technical_tags: ["Backend", "Fullstack", "Architecture", "DevOps", "Cloud"],
    subtitle_description: "Automated crypto trading and web admin panel",
    short_app_description: "Application backoffice centralisant la gestion des annonces et des demandes clients, pour les agences immobilières de la fnaim.",
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
        featuresPills: ['Cross-Platform', 'Real-time Sync', 'Offline Mode'],
    },
}

const gallery: GalleryData = {
    column_1: [
        {imageSrc: fullPageScrolling.src, alt: 'Full page scrolling'}
    ],
    column_2: [
        {imageSrc: searchLandingPage.src, alt: 'Recherche - landing page'},
        {imageSrc: phoneVersion.src, alt: 'Version mobile'},
        {imageSrc: houseInfo.src, alt: 'Fiche du bien'}
    ]
}

/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p><b>Transactimo</b> is a business application developed to meet the specific needs of a real estate agency
                specializing in the sale and rental of residential and commercial properties. The main objective was to
                digitize and centralize the management of listings, client follow-up, and agents' work within a single
                tool.</p>
            <br/>
            <p>The application notably allows for the creation and publication of property listings, management of
                client and agent profiles, a matching system between properties and search criteria, as well as a space
                for writing articles aimed at informing or attracting potential buyers.</p>
            <br/>
            <p>The application has undergone several development cycles: initially built with Angular, it was later
                migrated to React to better meet performance, maintainability, and user experience requirements. This
                transition enabled a complete UX/UI redesign and significantly improved navigation fluidity, while
                preserving the existing business logic and key features. The project thus evolved from a simple
                management interface into a fully customized CRM platform, tailored to the realities of the real estate
                sector.</p>
            <br/>
            <p>This type of platform has become essential for agencies looking to modernize their internal tools,
                streamline communication between team members, and optimize lead conversion.</p>
        </div>
    ),
    sources: [
        {
            icon: "",
            label: "GitHub",
            link: "https://github.com",
            description: "Frontend repo"
        },
        {
            icon: <Image src={gitlabLogo} alt="GitLab" width={16} height={16}/>,
            label: "GitLab",
            link: "https://gitlab.com",
            description: "Backend repo"
        }
    ]
};

/* ----------------------- [SKILLS] SECTION -----------------------------*/

const projectStackData: ProjectStackData = {
    core_skills: [
        {name: 'Typescript', level: 95, description: "Backend"},
        {name: 'MongoDb', level: 90, description: "Document DB"},
        {name: 'AWS', level: 85, description: "Scalability"},
        {name: 'React', level: 80, description: "Frontend"},
    ],
    specialized_skills: [
        {name: 'Kotlin', level: 85},
        {name: 'Flutter', level: 80},
        {name: 'Firebase', level: 88},
        {name: 'App Store Optimization', level: 85},
    ],
}

/* ----------------------- [FEATURES] SECTION -----------------------------*/

const features: Feature[] = [
    {
        icon: RocketLaunchIcon,
        name: 'FitTracker Pro',
        description: 'A comprehensive fitness tracking app with real-time workout monitoring',
        tags: ['Backend', 'Frontend', 'Fullstack'],
        feature_type: 'backend',
    },
    {
        icon: AccessibilityIcon,
        name: 'CryptoWatch',
        description: 'Real-time cryptocurrency tracking and portfolio management',
        tags: ['Flutter', 'Dart', 'Firebase'],
        feature_type: 'backend'
    },
];

/* ----------------------- [TECHNICAL CHALLENGES] SECTION -----------------------------*/
const technicalChallenges: TechnicalChallengeData[] = [
    {
        scope: 'Backend',
        description: "Transactimo 's backend is based on a REST API developed in Node.js and MongoDB. The application enables seamless management of properties, users and real estate agents, while offering a matching system between offers and customer needs.",
        icon: DatabaseBackupIcon,
        steps: ['Recueil des besoins & market research', 'User flow & conception de wireframes', 'Développement de prototypes interactifs'],
    },
    {
        scope: 'Frontend',
        description: "Transactimo's front end is a web app, designed to offer a fluid experience for visitors and real estate agents alike. The interface is clear, responsive and focused on ease of use.",
        icon: PaintbrushIcon,
        steps: ['Mise en place de l’architecture & choix de la tech stack', 'Développement agile avec sprints réguliers', 'Tests continus & code reviews'],
    },
    {
        scope: 'Architecture',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
        icon: BuildingIcon,
        steps: [
            'Déploiement (CI/CD) & config infra',
            'Observabilité: analytics, logs & monitoring',
            'Optimisations perf/SEO & itérations produit'
        ],
    },
];


export const immobilierFullData: ProjectFullPageData = {
    slug: 'immobilier-app',
    heroSectionData,
    gallery,
    presentation: presentationData,
    stack: projectStackData,
    features: features,
    technicalChallenges
}