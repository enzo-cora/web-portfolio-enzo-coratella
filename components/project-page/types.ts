import {ProjectHeroSectionData} from "@/components/project-page/sections/ProjectHeroSection";
import {GalleryData} from "@/components/project-page/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/components/project-page/sections/ProjectPresentationText";
import {ProjectStackData} from "@/components/project-page/sections/ProjectStackSection";
import {Feature} from "@/components/project-page/sections/ProjectFeatures";
import {TechnicalChallengeData} from "@/components/project-page/sections/ProjectTechnicalChallenges";
import {PinnedProject} from "@/components/landing-page/components/PinnedProjectsSection";
import {ProjectPreview} from "@/components/landing-page/components/project-list-section/project-preview.type";


export const technicalTags = ['Backend', 'Fullstack', 'Architecture', 'DevOps'] as const
export type TechnicalTags = (typeof technicalTags)[number]

export type FullProjectData = {
    slug: string;
    heroSectionData: ProjectHeroSectionData
    gallery: GalleryData
    presentation: ProjectPresentationData
    stack: ProjectStackData
    pinToLandingPage?: PinnedProject
    projectPreview: ProjectPreview,
    features: Feature[]
    technicalChallenges: TechnicalChallengeData[]
}
