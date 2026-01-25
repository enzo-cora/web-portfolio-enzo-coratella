import {CloudIcon, DocumentTextIcon} from "@heroicons/react/24/outline";
import articleIllustrationImage
    from "@/public/projects-gallery/ddd-monolith-to-microservice/ddd-monolith-to-microservice-illustration.png";
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {ArticleProjectData} from "@/components/project-page/types";
import {Slugs} from "@/data/slugs";
import React from "react";
import {NewspaperIcon} from "@heroicons/react/24/solid";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview.js";
/* ----------------------- [HERO DATA] SECTION -----------------------------*/

const slug = Slugs.dddMonolithToMicroservice

const heroSectionData: ProjectHeroSectionData = {
    title: "Du Monolithe au Microservice - DDD",
    subtitle: "Du monolithe bien structuré aux microservices : une trajectoire DDD pragmatique",
    short_app_description: "Article d’architecture qui formalise une approche progressive monolithique verse du microservice ready: Bounded Contexts, CQRS, Event Sourcing, projections et patterns d’API Gateway pour scaler sans sur-engineering.",
    technical_tags: ["Architecture"], //Available values: ['Backend', 'Fullstack', 'Architecture', 'DevOps']
    impact_metrics: [
        {
            value: "3",
            label: "stades d’évolution",
            icon: DocumentTextIcon,
        },
        {
            value: "4",
            label: "API Gateway patterns",
            icon: CloudIcon,
        },
        {
            value: "2",
            label: "modes de Saga",
            icon: DocumentTextIcon,
        },
        {
            value: "1",
            label: "repo d'exemple",
            icon: CloudIcon,
        },
    ],
    project_card: {
        app_type: "Architecture Article",
        business_metrics: [
            {
                value: "100%",
                label: "approche progressive",
                icon: DocumentTextIcon,
            },
            {
                value: "0",
                label: "dépendance language",
                icon: CloudIcon,
            },
            {
                value: "1",
                label: "file conducteur: no over-engineering",
                icon: DocumentTextIcon,
            },
        ],
        featuresPills: ["DDD", "CQRS", "Event Sourcing", "API Gateway"],
    },
}



/* ----------------------- [TEXT PRESENTATION] SECTION -----------------------------*/

const presentationData: ProjectPresentationData = {
    textComponent: (
        <div className="text-md text-justify leading-relaxed">
            <p>
                Cet article présente une démarche d’architecture <strong>DDD-friendly</strong> construite sur du vécu : partir d’un <strong>MVP</strong> (simple mais propre), puis évoluer par étapes vers un système réellement <strong>scalable</strong> et résilient.
                L’objectif est de maximiser la compréhension métier et la maintenabilité, tout en gardant une trajectoire pragmatique (pas de microservices “par principe”).
            </p>
            <br />
            <p>
                Le parcours démarre avec un <strong>monolithe</strong> structuré en aggregates, en séparant clairement <strong>Commands</strong> et <strong>Queries</strong> (CQRS).
                Les commands produisent des <strong>domain events</strong> persistés dans <strong>EventStoreDB</strong>.
                Les lectures sont optimisées via des <strong>read models</strong> alimentés par des <strong>projections</strong>, et des <strong>snapshots</strong> (ex: Redis) peuvent accélérer les reconstructions.
            </p>
            <br />
            <p>
                Ensuite, on passe au <strong>Bounded Monolith</strong> : le monolithe est découpé en <strong>Bounded Contexts</strong> indépendants, chacun avec son propre Core et ses handlers.
                Les <strong>domain events</strong> restent locaux au contexte, et la communication inter-context se fait via des <strong>integration events</strong> sur une <strong>Message Queue</strong> (RabbitMQ).
            </p>
            <br />
            <p>
                Dernière étape : la transition vers les <strong>microservices</strong>, où chaque contexte devient un service autonome (EventStore, handlers, read models, projections, snapshots).
                La cohérence distribuée s’appuie sur les events et le bus, et l’API Gateway devient le point d’entrée unique.
            </p>
            <br />
            <p>
                L’article détaille aussi 4 patterns clés d’<strong>API Gateway</strong> : <strong>Materialized Views</strong> (GET async ultra-perf), <strong>API Composition</strong> (GET sync avec agrégation live),
                <strong>API Orchestration</strong> (POST async via messages) et <strong>Sagas</strong> (transactions distribuées, orchestrator-based ou choreography-based, avec variante sync possible).
            </p>
        </div>
    ),
    sources: [
        {
            icon: <NewspaperIcon className="text-red-500" width={16} height={16} />,
            label: "Article",
            link: "https://coratella-enzo.notion.site/Architecture-DDD-From-MVP-to-Scalable-Systems-Exploring-bounded-contexts-and-service-boundaries-1d72726c8dca800f9e6dcf85994381dd",
            description: "Lire sur notion",
        },
    ]
};



/* ----------------------- [PROJECT PREVIEW] SECTION -----------------------------*/
const projectMainPicture = articleIllustrationImage

const projectPreview: ProjectPreview = {
    slug: slug,
    title: heroSectionData.title,
    description: heroSectionData.subtitle,
    image: projectMainPicture,
    technicalTag: heroSectionData.technical_tags,
    view_project_button: {
        label: "Voir l'article",
        link: `/projet/${slug}`
    },
}


export const dddMonolithToMicroserviceData: ArticleProjectData = {
    type: 'articleProjectView',
    slug: slug,
    heroSectionData,
    presentation: presentationData,
    projectPreview,
}