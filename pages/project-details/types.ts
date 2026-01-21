import {ProjectHeroSectionData} from "@/pages/project-details/sections/ProjectHeroSection";
import {GalleryData} from "@/pages/project-details/sections/ProjectGalerie";
import {ProjectPresentationData} from "@/pages/project-details/sections/ProjectPresentationText";
import {ProjectStackData} from "@/pages/project-details/sections/ProjectStackSection";
import {Feature} from "@/pages/project-details/sections/ProjectFeatures";
import {TechnicalChallengeData} from "@/pages/project-details/sections/ProjectTechnicalChallenges";


export type ProjectFullPageData = {
    slug: string;
    heroSectionData: ProjectHeroSectionData
    gallery: GalleryData
    presentation: ProjectPresentationData
    stack: ProjectStackData
    features: Feature[]
    technicalChallenges: TechnicalChallengeData[]
}
