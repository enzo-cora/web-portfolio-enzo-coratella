import {FullProjectData} from "@/components/project-page/types";
import {immobilierFullData} from "@/data/projects/app-immobiliere.data";
import {PinnedProject} from "@/components/landing-page/sections/PinnedProjectsSection";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import {whoAmIGameFullData} from "@/data/projects/who-am-i-game.data";


export const projectDataList: FullProjectData[] = [
    immobilierFullData,
    whoAmIGameFullData
]

export const getPinnedProjects = (): PinnedProject[] =>{
    return projectDataList.filter(project => project.pinToLandingPage).map(project => project.pinToLandingPage!)
}

export const getProjectsPreviews = (): ProjectPreview[] =>{
    return projectDataList.map(project => project.projectPreview!)
}