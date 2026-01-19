'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";
import enzo_photo from "@/public/enzo_photo.jpeg"


export function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	const START_YEAR = 2019
	const experienceYears = new Date().getFullYear() - START_YEAR

	return (

		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">

			<div className="mt-16">
				<Image
					src={enzo_photo}
					alt="Profile Picture"
					width={120}
					height={120}
					className="rounded-full mx-auto border-4 border-gray-50 dark:border-gray-700 shadow-lg"
				/>
			</div>

			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 dark:opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
							Enzo Coratella
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">Senior Software Engineer </h2>
						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Software engineer avec {experienceYears}+ ans d’expérience, je conçois des solutions web scalables de bout en bout et aide à structurer des équipes techniques.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Senior software engineer chez <span className="text-blue-600 dark:text-blue-400">Hermes Digital</span> et ancien backend developer chez {' '}
							<span className="text-purple-600 dark:text-purple-400">Bridge</span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-xs md:text-sm">
							TypeScript
						</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-xs md:text-sm">
							Architecture
						</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 text-xs md:text-sm">
							Node.js
						</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-xs md:text-sm">
							CI/CD
						</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-xs md:text-sm">
							AWS
						</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 text-xs md:text-sm">
							Microservices
						</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend'
										? 'bg-purple-50 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/50'
										: 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-600 dark:text-purple-400">Développement Backend</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Conception et développement d’API
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Architecture de bases de données
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Systèmes temps réel
									</li>
								</ul>
							</div>

							{/* Architecture Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend'
										? 'bg-blue-50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/50'
										: 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">Architecture logicielle</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Architectures scalables et résilientes
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Clean Architecture / DDD
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Microservices & Event-Driven architectures
									</li>
								</ul>
							</div>


							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops'
										? 'bg-teal-50 dark:bg-teal-500/20 border-teal-200 dark:border-teal-500/50'
										: 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600 dark:text-teal-400">DevOps & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										AWS infrastructures
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										CI/CD automation pipelines
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Testing & coverage
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
