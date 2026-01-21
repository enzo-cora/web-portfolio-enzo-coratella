import {Slugs} from "@/data/slugs";
import {StaticImageData} from "next/image";
import {TechnicalTags} from "@/components/project-page/types";


export type ProjectPreview = {
    slug: Slugs
    title: string
    description: string
    image: StaticImageData
    technicalTag: TechnicalTags[],
    view_project_button : {
        label: string,
        link: string
    },
    button_2? : {
        label: string,
        link: string
    },
}