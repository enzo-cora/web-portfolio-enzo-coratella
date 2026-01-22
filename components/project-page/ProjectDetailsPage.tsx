'use client';

import {ThemeToggle} from "@/app/theme/ThemeToggle";
import {ProjectHeroSection} from "@/components/project-page/sections/ProjectHeroSection";
import {ProjectStackSection} from "@/components/project-page/sections/ProjectStackSection";
import {ProjectFeatures} from "@/components/project-page/sections/ProjectFeatures";
import {ProjectTechnicalChallenges} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {ProjectGalerie} from "@/components/project-page/sections/ProjectGalerie";
import {ProjectPresentationText} from "@/components/project-page/sections/ProjectPresentationText";
import {notFound} from "next/dist/client/components/not-found";
import {projectDataList} from "@/data/list-projects.data";
import {Slugs} from "@/data/slugs";
import {FloatingBackToPortfolio} from "@/components/buttons/floating-back-button";
import {ArticleProjectData, StandardProjectData} from "@/components/project-page/types";


export function ProjectDetailsPage(props: { slug: Slugs }) {

    const projectData = projectDataList.find(project => project.slug === props.slug)
    if (!projectData) {
        return notFound();
    }

    return projectData.type === 'standardProject'
        ? (<StandardProjectView projectData={projectData}/>)
        : (<LightProjectView projectData={projectData}/>)
}


const StandardProjectView = ({projectData}: { projectData: StandardProjectData }) => (
    <main
        className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <ThemeToggle/>
        <FloatingBackToPortfolio/>
        <ProjectHeroSection heroSectionData={projectData.heroSectionData}/>
        <ProjectGalerie gallery={projectData.gallery}/>
        <div className={"my-24"}>
            <ProjectPresentationText presentation={projectData.presentation}/>
        </div>
        <ProjectStackSection stack={projectData.stack}/>
        <ProjectFeatures features={projectData.features}/>

        <ProjectTechnicalChallenges technicalChallenges={projectData.technicalChallenges}/>
    </main>
)


const LightProjectView = ({projectData}: { projectData: ArticleProjectData }) => (
    <main
        className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <ThemeToggle/>
        <FloatingBackToPortfolio/>
        <ProjectHeroSection heroSectionData={projectData.heroSectionData}/>
        <div className={"my-24"}>
            <ProjectPresentationText presentation={projectData.presentation}/>
        </div>
    </main>
)