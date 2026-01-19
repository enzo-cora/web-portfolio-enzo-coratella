import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from "embla-carousel-react";

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description: 'A modern e-commerce platform built with Next.js and Stripe',
		image: '/code.jpg',
	},
	{
		id: 2,
		title: 'AI Chat Application',
		description: 'Real-time chat application powered by OpenAI',
		image: '/laptop.jpg',
	},
	{
		id: 3,
		title: 'Task Management',
		description: 'Collaborative task management tool with real-time updates',
		image: '/code.jpg',
	},
	{
		id: 4,
		title: 'Portfolio Generator',
		description: 'Dynamic portfolio generator for developers',
		image: '/laptop.jpg',
	},
	{
		id: 5,
		title: 'E-Commerce Platform',
		description: 'A modern e-commerce platform built with Next.js and Stripe',
		image: '/code.jpg',
	},
	{
		id: 6,
		title: 'AI Chat Application',
		description: 'Real-time chat application powered by OpenAI',
		image: '/laptop.jpg',
	},
	{
		id: 7,
		title: 'Task Management',
		description: 'Collaborative task management tool with real-time updates',
		image: '/code.jpg',
	},
	{
		id: 8,
		title: 'Portfolio Generator',
		description: 'Dynamic portfolio generator for developers',
		image: '/laptop.jpg',
	},
];

export function SecondaryProjectsSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		containScroll: 'trimSnaps',
		slidesToScroll: 1,
		loop: false,
	});

	const [itemsPerSlide, setItemsPerSlide] = useState(4);

	useEffect(() => {
		const mq = window.matchMedia('(min-width: 640px)');
		const update = () => setItemsPerSlide(mq.matches ? 4 : 1);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	const slides = Array.from({ length: Math.ceil(projects.length / itemsPerSlide) }, (_, i) =>
		projects.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
	);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		setScrollSnaps(emblaApi.scrollSnapList());
		onSelect();
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', () => {
			setScrollSnaps(emblaApi.scrollSnapList());
			onSelect();
		});
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

	return (
		<section className="py-10 md:py-14 px-4 max-w-7xl mx-auto">
			<motion.h3
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="text-xl font-bold mb-8 text-center text-purple-600 dark:text-white"
			>
				Tous mes projets
			</motion.h3>

			<div className="relative">
				{/* Embla */}
				<div ref={emblaRef} className="overflow-hidden">
					<div className="flex">
						{slides.map((group, slideIndex) => (
							<div key={slideIndex} className="flex-[0_0_100%]">
								<div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 lg:gap-7 w-full">
									{group.map((project) => (
										<motion.div
											key={project.id}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: project.id * 0.1 }}
											whileHover={{ scale: 1.02 }}
										>
											<div className="group relative aspect-video w-full max-h-[260px] sm:max-h-[300px] bg-white dark:bg-gradient-to-br dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className="object-cover transition-transform duration-300 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300" />
												<div className="absolute inset-0 p-6 flex flex-col justify-end">
													<h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
													<p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
													<div className="flex gap-4">
														<Link
															href="#"
															className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
														>
															View Project
														</Link>
														<Link
															href="#"
															className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
														>
															GitHub
														</Link>
													</div>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Bottom navigation */}
				{scrollSnaps.length > 1 && (
					<div className="mt-8 grid grid-cols-3 items-center">
						<div />
						<div className="flex items-center justify-center gap-2">
							{scrollSnaps.map((_, index) => (
								<button
									key={index}
									type="button"
									onClick={() => scrollTo(index)}
									aria-label={`Go to page ${index + 1}`}
									className={`h-2 w-2 rounded-full transition ${index === selectedIndex ? 'bg-purple-600 dark:bg-white' : 'bg-gray-300 dark:bg-white/30'}`}
								/>
							))}
						</div>
						<div className="flex items-center justify-end gap-2">
							<button
								type="button"
								onClick={scrollPrev}
								disabled={!emblaApi?.canScrollPrev()}
								className="text-sm px-3 py-2 rounded-full border border-gray-200 dark:border-white/20 bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 transition disabled:opacity-40 disabled:cursor-not-allowed"
							>
								Prev
							</button>
							<button
								type="button"
								onClick={scrollNext}
								disabled={!emblaApi?.canScrollNext()}
								className="text-sm px-3 py-2 rounded-full border border-gray-200 dark:border-white/20 bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 transition disabled:opacity-40 disabled:cursor-not-allowed"
							>
								Next
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
