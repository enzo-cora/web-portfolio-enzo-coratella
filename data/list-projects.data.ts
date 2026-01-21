import {FullProjectData} from "@/components/project-page/types";
import {immobilierFullData} from "@/data/projects/arbitrage-crypto.data";
import {PinnedProject} from "@/components/landing-page/components/PinnedProjectsSection";
import {ProjectPreview} from "@/components/landing-page/components/project-list-section/project-preview.type";


export const projectDataList: FullProjectData[] = [
    immobilierFullData,
]

export const getPinnedProjects = (): PinnedProject[] =>{
    return projectDataList.filter(project => project.pinToLandingPage).map(project => project.pinToLandingPage!)
}

export const getProjectsPreviews = (): ProjectPreview[] =>{
    return projectDataList.map(project => project.projectPreview!)
}