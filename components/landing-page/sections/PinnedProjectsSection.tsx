'use client';

import {motion} from 'framer-motion';
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {Slugs} from "@/data/slugs";

export type PinnedProject = {
    title: string,
    smallDescription: string,
    slug: Slugs,
    image: StaticImageData,
    bulletPointParagraphs: Array<{
        paragraphTitle: string,
        bulletsPoints: string[]
    }>
}


export function PinnedProjectsSection(props: { pinnedProjects: PinnedProject[] }) {

    const paragraphTitleColors = ['text-blue-600 dark:text-blue-400', 'text-purple-600 dark:text-purple-400', 'text-teal-600 dark:text-teal-400']
    const {pinnedProjects} = props


    return (
        <section className="py-20 px-4">

            <motion.h2
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white"
            >
                Mes projets
            </motion.h2>


            {!pinnedProjects.length ? null : <div className="max-w-6xl mx-auto">

                <motion.h3
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="text-xl font-bold mb-16 text-left text-gray-600 dark:text-gray-200"
                >
                    A la une:
                </motion.h3>



                    <div className="space-y-16">
                        {pinnedProjects.map((project) => (
                            <motion.div
                                key={project.slug}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                whileHover={{scale: 1.01}}
                                viewport={{once: true}}
                                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer transition-transform duration-200 dark:bg-gray-900/50 dark:border-gray-800"
                            >
                                <Link href={`/projet/${project.slug}`}>
                                    <div className="p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                                                    <p className="text-gray-600 dark:text-gray-400">
                                                        {project.smallDescription}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-6">
                                                    {project.bulletPointParagraphs.map((p, i) => (
                                                        <div key={p.paragraphTitle}>
                                                            <h4 className={`text-sm font-semibold mb-3 ${paragraphTitleColors[i % paragraphTitleColors.length]}`}>
                                                                {p.paragraphTitle}
                                                            </h4>
                                                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                                {p.bulletsPoints.map(bp => <li key={bp}>• {bp}</li>)}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-6 dark:bg-black/30 content-center">
                                                <Image src={project.image} alt={`Image du projet ${project.title}`}/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
            </div>}
        </section>
    );
}
