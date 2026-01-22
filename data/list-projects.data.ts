import {ArticleProjectData, StandardProjectData} from "@/components/project-page/types";
import {immobilierFullData} from "@/data/projects/app-immobiliere.data";
import {PinnedProject} from "@/components/landing-page/sections/PinnedProjectsSection";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import {whoAmIGameFullData} from "@/data/projects/who-am-i-game.data";
import {cryptoArbitrageFullData} from "@/data/projects/crypto-arbitrage.data";
import {npmComponentCreatorFullData} from "@/data/projects/npm-auto-component.data";
import {cryptoArbitrageV2FullData} from "@/data/projects/crypto-arbitrage-v2.data";
import {pipelineModelDevOpsFullData} from "@/data/projects/pipeline-model-devops.data";
import {ansiblePlaybookDevopsFullData} from "@/data/projects/ansible-playbook-devops.data";
import {awsCloudFormationIacFullData} from "@/data/projects/aws-cloud-formation-iac.data";
import {dddMonolithToMicroserviceData} from "@/data/projects/ddd-monolith-to-microservice";
import {refactoringWithCleanArchiData} from "@/data/projects/refactoring-with-clean-archi.data";
import {bridgeApiProjectData} from "@/data/projects/bridge-api.data";
import {tictactripProjectData} from "@/data/projects/tictactrip.data";


export const projectDataList: (StandardProjectData | ArticleProjectData)[] = [
    immobilierFullData,
    whoAmIGameFullData,
    cryptoArbitrageFullData,
    npmComponentCreatorFullData,
    cryptoArbitrageV2FullData,
    pipelineModelDevOpsFullData,
    ansiblePlaybookDevopsFullData,
    awsCloudFormationIacFullData,
    dddMonolithToMicroserviceData,
    refactoringWithCleanArchiData,
    bridgeApiProjectData,
    tictactripProjectData,
]

export const getPinnedProjects = (): PinnedProject[] => {
    return projectDataList
        .filter(project => project.type === 'standardProject' && project.pinToLandingPage)
        .map((project) => (project as StandardProjectData).pinToLandingPage!)
}

export const getProjectsPreviews = (): ProjectPreview[] => {
    return projectDataList
        .map(project => project.projectPreview)
}