'use client';

import {useTheme} from "@/app/theme/ThemeProvider";
import * as React from "react";
import {ForwardRefExoticComponent} from "react";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";
import {AccessibilityIcon} from "lucide-react";

interface Feature {
    icon: ForwardRefExoticComponent<any>,
    id: number;
    name: string;
    description: string;
    tags: string[];
    feature_type: 'backend' | 'frontend' | 'architecture' | 'fullstack' | 'devops'
}

const features: Feature[] = [
    {
        icon: RocketLaunchIcon,
        id: 1,
        name: 'FitTracker Pro',
        description: 'A comprehensive fitness tracking app with real-time workout monitoring',
        tags: ['Backend', 'Frontend', 'Fullstack'],
        feature_type: 'backend',
    },
    {
        icon: AccessibilityIcon,
        id: 2,
        name: 'CryptoWatch',
        description: 'Real-time cryptocurrency tracking and portfolio management',
        tags: ['Flutter', 'Dart', 'Firebase'],
        feature_type: 'backend'
    },
];


export const ProjectAppFeatures = () => {
    const {theme} = useTheme();

    const iconColors = [
        theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
        theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
    ]

    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center ${theme === 'dark' ? '' : 'text-gray-900'}`}> Features principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`group rounded-xl sm:rounded-2xl p-1 ${
                                theme === 'dark' ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50' : 'bg-gradient-to-b from-gray-100 to-white shadow-lg'
                            }`}
                        >
                            <div
                                className={`rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative ${
                                    theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'
                                }`}
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                    {/* App Icon */}
                                    <div
                                        className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
                                        <div
                                            className={`w-full h-full rounded-xl flex items-center justify-center overflow-hidden relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
                                        >
                                            {(
                                                <feature.icon
                                                    className={`w-10 h-10 ${iconColors[index % iconColors.length]}`}/>
                                            )}
                                            {/* Animated Glow Effect */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
                                        </div>
                                        {/* Corner Decorations */}
                                        <div
                                            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full blur-[2px] ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
                                        <div
                                            className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full blur-[2px] ${theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'}`}
                                        ></div>
                                    </div>

                                    {/* App Info */}
                                    <div className="flex-grow w-full sm:w-auto">
                                        <div
                                            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
                                            <h3
                                                className={`text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words ${theme === 'dark' ? '' : 'text-gray-900 group-hover:text-blue-600'}`}
                                            >
                                                {feature.name}
                                            </h3>
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-xs whitespace-nowrap ${
                                                    theme === 'dark' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-600 border border-blue-200'
                                                }`}
                                            >
												{feature.feature_type}
											</span>
                                        </div>
                                        <p className={`mb-4 text-center sm:text-left ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                                            {feature.tags.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-3 py-1 text-sm rounded-full border transition-colors whitespace-nowrap ${
                                                        theme === 'dark'
                                                            ? 'bg-gray-800 text-gray-400 border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300'
                                                            : 'bg-gray-100 text-gray-600 border border-gray-200 group-hover:border-gray-300 group-hover:text-gray-700'
                                                    }`}
                                                >
													{tech}
												</span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

