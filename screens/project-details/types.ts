import {ProjectHeroSectionData} from "@/screens/project-details/sections/ProjectHeroSection";
import {GalleryData} from "@/screens/project-details/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/screens/project-details/sections/ProjectPresentationText";
import {ProjectStackData} from "@/screens/project-details/sections/ProjectStackSection";
import {Feature} from "@/screens/project-details/sections/ProjectFeatures";
import {TechnicalChallengeData} from "@/screens/project-details/sections/ProjectTechnicalChallenges";
import {PinnedProject} from "@/screens/landing/components/PinnedProjectsSection";
import {ProjectPreview} from "@/screens/landing/components/project-list-section/project-preview.type";


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
