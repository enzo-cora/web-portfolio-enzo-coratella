'use client';

import {useTheme} from '@/app/theme/ThemeProvider';
import {ThemeToggle} from '@/app/theme/ThemeToggle';
import {HeroSection} from "@/components/landing-page/components/HeroSection";
import {PinnedProjectsSection} from "@/components/landing-page/components/PinnedProjectsSection";
import {ContactSection} from "@/components/landing-page/components/ContactSection";
import {SkillsSection} from "@/components/landing-page/components/SkillsSection";
import {ProjectList} from "@/components/landing-page/components/project-list-section/ProjectList";
import {DevelopmentProcess} from "@/components/landing-page/components/DevelopmentProcess";
import {getPinnedProjects, getProjectsPreviews} from "@/data/list-projects.data";

export function LandingPagePortfolio() {
	const { theme } = useTheme();

	const themeClasses = theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900';
	const pinnedProjectsList = getPinnedProjects()
	const projectPreviews = getProjectsPreviews()

	return (
		<main className={`min-h-screen ${themeClasses}`}>
			<ThemeToggle />
			<HeroSection />
			<SkillsSection />
			<PinnedProjectsSection pinnedProjects={pinnedProjectsList} />
			<ProjectList projectsPreview={projectPreviews} />
			<DevelopmentProcess />
			<ContactSection />
		</main>
	);
}
