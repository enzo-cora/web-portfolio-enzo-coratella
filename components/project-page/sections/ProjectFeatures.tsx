'use client';

import {useTheme} from "@/app/theme/ThemeProvider";
import * as React from "react";
import {IconComponent} from "@/components/utils.type";
import {TechnicalTags} from "@/components/project-page/types";

export interface Feature {
    icon: IconComponent,
    name: string;
    description: string;
    tags: string[];
    feature_type: TechnicalTags | 'Frontend'
}



export const ProjectFeatures = (props: {features: Feature[]}) => {
    const {theme} = useTheme();

    const {features} = props;

    const iconColors = [
        theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
        theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
    ]

    const featureTypeBadge: Record<TechnicalTags | 'Frontend', string> = {
        Backend: theme === 'dark'
            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
            : 'bg-blue-100 text-blue-600 border-blue-200',
        Frontend: theme === 'dark'
            ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
            : 'bg-yellow-100 text-yellow-600 border-yellow-200',
        DevOps: theme === 'dark'
            ? 'bg-orange-500/10 text-orange-400 border-orange-500/20'
            : 'bg-orange-100 text-orange-600 border-orange-200',
        Architecture: theme === 'dark'
            ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
            : 'bg-purple-100 text-purple-600 border-purple-200',
        Fullstack: theme === 'dark'
            ? 'bg-pink-500/10 text-pink-400 border-pink-500/20'
            : 'bg-pink-100 text-pink-600 border-pink-200',
    };


    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center ${theme === 'dark' ? '' : 'text-gray-900'}`}> Features principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
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
                                                className={`px-2 py-0.5 rounded-full text-xs whitespace-nowrap border ${
                                                    featureTypeBadge[feature.feature_type] ?? /*Default color*/ featureTypeBadge.Backend
                                                }`}
                                            >
                                                {feature.feature_type.toLowerCase()}
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

