'use client';

import { useTheme } from './components/theme/ThemeProvider';
import { ThemeToggle } from './components/theme/ThemeToggle';
import {HeroSection} from "@/app/components/HeroSection";
import {PinnedProjectsSection} from "@/app/components/PinnedProjectsSection";
import {ContactSection} from "@/app/components/ContactSection";
import {SkillsSection} from "@/app/components/SkillsSection";
import {ProjectList} from "@/app/components/project-list-section/ProjectList";
import {DevelopmentProcess} from "@/app/components/DevelopmentProcess";

export default function FullStackPortfolio() {
	const { theme } = useTheme();

	const themeClasses = theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900';

	return (
		<main className={`min-h-screen ${themeClasses}`}>
			<ThemeToggle />
			<HeroSection />
			<SkillsSection />
			<PinnedProjectsSection />
			<ProjectList />
			<DevelopmentProcess />
			<ContactSection />
		</main>
	);
}
