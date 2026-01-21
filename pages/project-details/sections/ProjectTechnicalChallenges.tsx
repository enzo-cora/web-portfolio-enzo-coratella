'use client';

import {useTheme} from "@/app/theme/ThemeProvider";
import React from "react";
import {IconComponent} from "@/pages/types/utils";

export interface TechnicalChallengeData {
    scope: string; //Backend / Frontend / ...
    description: string
    icon: IconComponent;
    steps: string[];
}

export const ProjectTechnicalChallenges = (props: { technicalChallenges: TechnicalChallengeData[] }) => {
    const {theme} = useTheme();
    const {technicalChallenges} = props

    const colors = [
        {
            colorClasses: {
                bg: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-100',
                text: theme === 'dark' ? 'text-blue-400' : 'text-blue-500',
                gradientFrom: 'from-blue-500',
                gradientTo: 'to-purple-500',
                hoverBorder: theme === 'dark' ? 'group-hover:border-blue-500/30' : 'group-hover:border-blue-300',
            },
        },
        {
            colorClasses: {
                bg: theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-100',
                text: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
                gradientFrom: 'from-purple-500',
                gradientTo: 'to-pink-500',
                hoverBorder: theme === 'dark' ? 'group-hover:border-purple-500/30' : 'group-hover:border-purple-300',
            },
        },
        {
            colorClasses: {
                bg: theme === 'dark' ? 'bg-green-500/10' : 'bg-green-100',
                text: theme === 'dark' ? 'text-green-400' : 'text-green-600',
                gradientFrom: 'from-green-500',
                gradientTo: 'to-emerald-500',
                hoverBorder: theme === 'dark' ? 'group-hover:border-green-500/30' : 'group-hover:border-green-300',
            },
        },
    ];


    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center ${theme === 'dark' ? '' : 'text-gray-900'}`}>Challenges
                    techniques du projet</h2>
                <p className={`text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Panorama des défis techniques qui ont influencé les choix d’architecture, d’organisation et de delivery du projet
                </p>

                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid gap-6 sm:gap-8 px-2 justify-center justify-items-center"
                        style={{gridTemplateColumns: 'repeat(auto-fit, minmax(315px, 1fr))'}}
                    >
                        {technicalChallenges.map((challenge, index) => {

                            const colorClasses = colors[index % colors.length].colorClasses
                            return (
                                <div key={index}
                                     className="group relative w-full max-w-[520px] h-full justify-self-center">
                                    <div
                                        className={`relative h-full flex flex-col p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-300 ${colorClasses.hoverBorder} ${
                                            theme === 'dark'
                                                ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50'
                                                : 'bg-gradient-to-b from-white to-gray-50 border-gray-200 shadow-sm hover:shadow-md'
                                        }`}
                                    >
                                        {/* Icon Container */}
                                        <div className="mb-6">
                                            <div
                                                className={`w-16 h-16 ${colors[index % colors.length].colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <svg className={`w-8 h-8 ${colorClasses.text}`} fill="none"
                                                     stroke="currentColor" viewBox="0 0 24 24">
                                                    <challenge.icon/>
                                                </svg>
                                            </div>
                                            <h3
                                                className={`text-xl font-semibold mb-3 text-center transition-colors ${colorClasses.text}`}
                                            >
                                                {challenge.scope}
                                            </h3>
                                        </div>

                                        <p className="mb-6 text-sm">{challenge.description}</p>
                                        {/* Enum challenges*/}
                                        <h3 className={`text-sm mb-6 font-semibold ${colorClasses.text}`}>Les défis
                                            techniques: </h3>
                                        <div className="space-y-3">
                                            {challenge.steps.map((step, stepIndex) => (
                                                <div key={stepIndex} className="flex items-start gap-3">
                                                    <div
                                                        className={`w-6 h-6 rounded-full ${colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                        <span
                                                            className={`text-sm ${colorClasses.text}`}>{stepIndex + 1}</span>
                                                    </div>
                                                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                                                        {step}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};