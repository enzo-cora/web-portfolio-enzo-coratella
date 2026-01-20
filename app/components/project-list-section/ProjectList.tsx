import {motion} from 'framer-motion';
import {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from "embla-carousel-react";
import {Project, Tags} from "@/app/components/project-list-section/types/project.type";
import {ProjectCard} from "@/app/components/project-list-section/ProjectCard";


const filters: Array<Tags | 'Tous'> = ['Tous', 'Backend', 'Fullstack', 'Architecture', 'DevOps']

const projects: Array<Project> = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe',
        image: '/code.jpg',
        tags: ['Backend', "Fullstack"],
    },
    {
        id: 2,
        title: 'AI Chat Application',
        description: 'Real-time chat application powered by OpenAI',
        image: '/laptop.jpg',
        tags: ['Fullstack'],
    },
    {
        id: 3,
        title: 'Task Management',
        description: 'Collaborative task management tool with real-time updates',
        image: '/code.jpg',
        tags: ['Architecture'],
    },
    {
        id: 4,
        title: 'Portfolio Generator',
        description: 'Dynamic portfolio generator for developers',
        image: '/laptop.jpg',
        tags: ['DevOps'],
    },
    {
        id: 5,
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe',
        image: '/code.jpg',
        tags: ['Backend'],
    },
    {
        id: 6,
        title: 'AI Chat Application',
        description: 'Real-time chat application powered by OpenAI',
        image: '/laptop.jpg',
        tags: ['Fullstack'],
    },
    {
        id: 7,
        title: 'Task Management',
        description: 'Collaborative task management tool with real-time updates',
        image: '/code.jpg',
        tags: ['Architecture'],
    },
    {
        id: 8,
        title: 'Portfolio Generator',
        description: 'Dynamic portfolio generator for developers',
        image: '/laptop.jpg',
        tags: ['DevOps'],
    },
];

export function ProjectList() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        loop: false,
    });

    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const [activeFilter, setActiveFilter] = useState<Tags | 'Tous'>('Tous');


    const filteredProjects = activeFilter === 'Tous'
        ? projects
        : projects.filter((project) => project.tags.includes(activeFilter));

    const slides = Array.from({length: Math.ceil(filteredProjects.length / itemsPerSlide)}, (_, i) =>
        filteredProjects.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        const windowMediaQuery = window.matchMedia('(min-width: 850px)');
        const update = () => setItemsPerSlide(windowMediaQuery.matches ? 4 : 1);
        update();
        windowMediaQuery.addEventListener('change', update);
        return () => windowMediaQuery.removeEventListener('change', update);
    }, []);

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

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.scrollTo(0);
        setSelectedIndex(0);
    }, [activeFilter, emblaApi]);

    return (
        <section className="py-10 md:py-14 px-4 max-w-7xl mx-auto">
            <motion.h3
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                className="text-xl font-bold mb-8 text-left text-purple-600 dark:text-white"
            >
                Tous mes projets
            </motion.h3>

            <div className="relative">

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0 mb-6">
                    {filters.map((tech) => {
                        const isActive = tech === activeFilter;
                        return (
                            <button
                                key={tech}
                                type="button"
                                onClick={() => setActiveFilter((prev) => (prev === tech ? 'Tous' : tech))}
                                className={`px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-[#1A1F2B] rounded-full text-sm text-gray-700 dark:text-gray-300 border transition-colors hover:border-blue-500/50 ${
                                    isActive
                                        ? 'border-blue-500 font-bold'
                                        : 'border-gray-200 dark:border-[#2D333B] font-medium'
                                }`}
                                aria-pressed={isActive}
                            >
                                {tech}
                            </button>
                        );
                    })}
                </div>

                {/* Carrousel */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex -ml-6">
                        {slides.map((group, slideIndex) => (
                            <div key={slideIndex} className="flex-[0_0_100%] pl-6">
                                <div
                                    className={`grid w-full gap-5 lg:gap-7 ${
                                        itemsPerSlide === 1
                                            ? 'grid-cols-1'
                                            : 'grid-cols-1 sm:grid-cols-2 sm:grid-rows-2'
                                    }`}
                                >
                                    {group.map((project) => (
                                        /* Card */
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carrousel navigation */}
                {scrollSnaps.length > 1 && (
                    <div className="mt-8 grid grid-cols-3 items-center">
                        <div/>
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
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={scrollNext}
                                disabled={!emblaApi?.canScrollNext()}
                                className="text-sm px-3 py-2 rounded-full border border-gray-200 dark:border-white/20 bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 transition disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
