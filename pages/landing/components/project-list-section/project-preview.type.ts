import {Slugs} from "@/pages/project-details/data/slugs";
import {StaticImageData} from "next/image";
import {TechnicalTags} from "@/pages/project-details/types";


export type ProjectPreview = {
    slug: Slugs
    title: string
    description: string
    image: StaticImageData
    technicalTag: TechnicalTags[],
    button_1? : {
        label: "Voir projet",
        link: "https://github.com/tailwindlabs/heroicons"
    },
    button_2? : {
        label: "Gitlab",
        link: "https://docs.gitlab.com/ci/"
    },
}