import {ProjectHeroSectionData} from "@/pages/project-details/sections/ProjectHeroSection";
import {GalleryData} from "@/pages/project-details/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/pages/project-details/sections/ProjectPresentationText";
import {ProjectStackData} from "@/pages/project-details/sections/ProjectStackSection";
import {Feature} from "@/pages/project-details/sections/ProjectFeatures";
import {TechnicalChallengeData} from "@/pages/project-details/sections/ProjectTechnicalChallenges";
import {PinnedProject} from "@/pages/landing/components/PinnedProjectsSection";
import {ProjectPreview} from "@/pages/landing/components/project-list-section/project-preview.type";


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
