'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';


export function ConceptionDetailsSection() {
    const [selectedStack, setSelectedStack] = useState<'one' | 'two' | 'three' | null>(null);

    return (

        <section className="min-h-screen relative overflow-hidden py-24 md:py-0">


            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">

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
                                    selectedStack === 'one'
                                        ? 'bg-purple-50 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/50'
                                        : 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
                                }`}
                                onMouseEnter={() => setSelectedStack('one')}
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
                                    selectedStack === 'two'
                                        ? 'bg-blue-50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/50'
                                        : 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
                                }`}
                                onMouseEnter={() => setSelectedStack('two')}
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
                                    selectedStack === 'three'
                                        ? 'bg-teal-50 dark:bg-teal-500/20 border-teal-200 dark:border-teal-500/50'
                                        : 'bg-gray-50 hover:bg-gray-100 border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/80'
                                }`}
                                onMouseEnter={() => setSelectedStack('three')}
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
