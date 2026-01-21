'use client';

import {useTheme} from '@/app/theme/ThemeProvider';
import {ThemeToggle} from '@/app/theme/ThemeToggle';
import {HeroSection} from "@/pages/landing/components/HeroSection";
import {PinnedProjectsSection} from "@/pages/landing/components/PinnedProjectsSection";
import {ContactSection} from "@/pages/landing/components/ContactSection";
import {SkillsSection} from "@/pages/landing/components/SkillsSection";
import {ProjectList} from "@/pages/landing/components/project-list-section/ProjectList";
import {DevelopmentProcess} from "@/pages/landing/components/DevelopmentProcess";
import {getPinnedProjects, getProjectsPreviews} from "@/pages/project-details/data/list-projects.data";

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
