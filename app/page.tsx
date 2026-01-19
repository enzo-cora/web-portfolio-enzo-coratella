'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { useTheme } from './components/theme/ThemeProvider';
import { ThemeToggle } from './components/theme/ThemeToggle';

export default function FullStackPortfolio() {
	const { theme } = useTheme();

	const themeClasses = theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900';

	return (
		<main className={`min-h-screen ${themeClasses}`}>
			<ThemeToggle />
			<HeroSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
