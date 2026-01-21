import {ProjectDetailsPage} from "@/pages/project-details/ProjectDetailsPage";
import {Slugs} from "@/pages/project-details/data/slugs";

export const dynamicParams = false;

export function generateStaticParams() {
    const slugs =  Object.values(Slugs)
    return slugs.map((slug) => ( {slug}))
}

export default async function Page({params}: { params: Promise<{ slug: Slugs }> }) {
    const {slug} = await params
    return (
        <ProjectDetailsPage slug={slug}/>
    );
}
