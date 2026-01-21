import {FullProjectData} from "@/screens/project-details/types";
import {immobilierFullData} from "@/screens/project-details/data/projects/arbitrage-crypto.data";
import {PinnedProject} from "@/screens/landing/components/PinnedProjectsSection";
import {ProjectPreview} from "@/screens/landing/components/project-list-section/project-preview.type";


export const projectDataList: FullProjectData[] = [
    immobilierFullData,
]

export const getPinnedProjects = (): PinnedProject[] =>{
    return projectDataList.filter(project => project.pinToLandingPage).map(project => project.pinToLandingPage!)
}

export const getProjectsPreviews = (): ProjectPreview[] =>{
    return projectDataList.map(project => project.projectPreview!)
}