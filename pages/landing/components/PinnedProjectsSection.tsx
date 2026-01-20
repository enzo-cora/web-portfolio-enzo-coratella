'use client';

import {motion} from 'framer-motion';
import Image from "next/image";
import landingPageImage from "@/public/images/projet-immobilier/search-landing-page.webp"
import statisticLandingPage from "@/public/images/project-crypto/statistic-landing-page.webp"

export function PinnedProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white"
				>
					Mes projets
				</motion.h2>


				<motion.h3
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-xl font-bold mb-16 text-left text-purple-600 dark:text-white"
				>
					Mes projets à la une:
				</motion.h3>

				<div className="space-y-16">
					{/* Agence immobilière */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.01 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer transition-transform duration-200 dark:bg-gray-900/50 dark:border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enterprise E-commerce Platform</h3>
										<p className="text-gray-600 dark:text-gray-400">
											A high-performance e-commerce solution handling 100K+ daily transactions with real-time inventory and ML-powered recommendations.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Next.js Server Components</li>
												<li>• Real-time Cart & Inventory</li>
												<li>• Stripe Payment Integration</li>
												<li>• PWA with Offline Support</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Node.js Microservices</li>
												<li>• Redis Caching Layer</li>
												<li>• Kafka Event Streaming</li>
												<li>• Elasticsearch Product Search</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
											<li>• 99.99% Uptime with Blue-Green Deployment</li>
											<li>• 300ms Average API Response Time</li>
											<li>• 45% Reduction in Infrastructure Costs</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6 dark:bg-black/30">
									<Image src={landingPageImage} alt={"Landing page image"} />
								</div>

							</div>
						</div>
					</motion.div>

					{/* Real-time Analytics Crypto arbitrage */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.01 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer transition-transform duration-200 dark:bg-gray-900/50 dark:border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real-time Analytics Platform</h3>
										<p className="text-gray-600 dark:text-gray-400">
											A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Real-time Data Visualization</li>
												<li>• Interactive Dashboards</li>
												<li>• Custom Chart Components</li>
												<li>• Data Export Tools</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Apache Kafka Streams</li>
												<li>• ClickHouse Analytics DB</li>
												<li>• Python Data Processing</li>
												<li>• Redis Time Series</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
											<li>• 1M+ Events/Minute Processing</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.99% Data Accuracy</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6 dark:bg-black/30">
									<Image src={statisticLandingPage} alt={"Landing page image"} />
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
