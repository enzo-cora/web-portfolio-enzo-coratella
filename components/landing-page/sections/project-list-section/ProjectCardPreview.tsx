'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/project-preview.type";
import {useRouter} from "next/navigation";


export function ProjectCardPreview(props: { project: ProjectPreview }) {

    const {project} = props
    const router = useRouter();

    return (
            <div className="relative cursor-pointer">
                <motion.div
                    key={project.slug}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                    whileHover={{scale: 1.02}}
                >
                    <div
                        onClick={() => router.push(`/projet/${project.slug}`)}
                        className="group relative aspect-video w-full max-h-[260px] sm:max-h-[300px] bg-white dark:bg-gradient-to-br dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300"/>
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex gap-4">
                                {project.view_project_button &&
                                    <Link
                                        href={project.view_project_button.link}
                                        onClick={(e) => e.stopPropagation()}
                                        rel="noopener noreferrer"
                                        className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                                    >
                                        {project.view_project_button.label}
                                    </Link>
                                }

                                {project.button_2 &&
                                    <Link
                                        href={project.button_2.link}
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
                                    >
                                        {project.button_2.label}
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
    );
}
