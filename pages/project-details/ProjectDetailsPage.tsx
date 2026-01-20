import {ThemeToggle} from "@/app/theme/ThemeToggle";
import {ProjectHeroSection} from "@/pages/project-details/sections/ProjectHeroSection";
import {ProjectSkillsSection} from "@/pages/project-details/sections/ProjectSkillsSection";
import {ProjectAppFeatures} from "@/pages/project-details/sections/ProjectAppFeatures";

import Link from "next/link";
import {ProjectTechnicalChallenges} from "@/pages/project-details/sections/ProjectTechnicalChallenges";
import {ProjectGalerie} from "@/pages/project-details/sections/ProjectGalerie";

export function ProjectDetailsPage(props: { slug: string }) {

    return (
        <main
            className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
            <ThemeToggle/>
            <FloatingBackToPortfolio />
            <ProjectHeroSection/>
            <ProjectGalerie />
            <ProjectSkillsSection/>
            <ProjectAppFeatures/>
            <ProjectTechnicalChallenges />
        </main>
    );
}

function FloatingBackToPortfolio() {
    return (
        <div className="pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-4 z-50 flex justify-start md:bottom-auto md:left-6 md:top-6">
            <Link
                href="/"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-gray-900 shadow-lg backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-gray-900/70 dark:text-white dark:hover:bg-gray-900"
                aria-label="Back to portfolio"
            >
                <span aria-hidden>←</span>
                <span>Back to portfolio</span>
            </Link>
        </div>
    );
}
