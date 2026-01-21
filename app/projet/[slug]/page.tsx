import {projectDataList, ProjectDetailsPage} from "@/pages/project-details/ProjectDetailsPage";

export const dynamicParams = false;

export function generateStaticParams() {
    return projectDataList.map(({slug}) => ( {slug}))
}

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return (
        <ProjectDetailsPage slug={slug}/>
    );
}
