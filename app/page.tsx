import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import { ThemeToggle } from './components/theme/ThemeToggle';

export default function MinimalistPortfolio() {
	return (
		<main className="h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<ThemeToggle />
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 bg-white dark:bg-gray-900 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex items-center py-16">
					<ProfileSection />
				</div>

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-3 bg-white dark:bg-gray-900 flex flex-col justify-center">
					<SkillsSection />
					<ExperienceSection />
				</div>
			</div>
		</main>
	);
}
