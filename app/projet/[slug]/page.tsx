import {ProjectDetailsPage} from "@/pages/project-details/ProjectDetailsPage";

export const dynamicParams = false;

export function generateStaticParams() {
    // TODO: Replace with your real project list source (CMS, filesystem, JSON, etc.)
    return [
        {slug: 'ecommerce'},
        {slug: 'exemple-projet-2'},
    ];
}

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return (
        <ProjectDetailsPage slug={slug}/>
    );
}
