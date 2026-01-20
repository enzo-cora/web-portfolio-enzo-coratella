'use client';

import {useTheme} from "@/app/theme/ThemeProvider";
import {NamedExoticComponent} from "react";


export type ProjectHeroSectionData  = {
    title: string,
    technical_tags: string[],
    subtitle_description: string,
    impact_metrics: Array<{
        icon:  NamedExoticComponent,
        value: string,
        description: string
    }>,
    project_card: {
        type: string, //Web app
        business_metrics: Array<{
            icon:  NamedExoticComponent,
            value: string,
            description: string
        }>,
        business_tags: string[]

    }
}

export const ProjectHeroSection = () => {
    const {theme = 'light'} = useTheme()

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
            <div className="absolute inset-0 z-0">
                <div
                    className={`absolute top-0 left-0 w-full h-full ${
                        theme === 'dark'
                            ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent'
                            : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent'
                    }`}
                ></div>
                <div
                    className={`absolute bottom-0 right-0 w-full h-full ${
                        theme === 'dark'
                            ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent'
                            : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent'
                    }`}
                ></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="text-center mb-8">
                    <span
                        className={`text-lg md:text-xl mb-2 block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>Hello, voici</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						<span
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Crypto Arbitrage
						</span>
                    </h1>

                    <h2
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 ${
                            theme === 'dark' ? 'bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300' : 'text-gray-800'
                        }`}
                    >
                        Automated crypto trading and web admin panel
                    </h2>

                    {/* Tags */}

                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-xs md:text-sm">
							Backend
						</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-xs md:text-sm">
							Fullstack
						</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 text-xs md:text-sm">
							Architecture
						</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-xs md:text-sm">
							DevOps
						</span>
                        <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-xs md:text-sm">
							Cloud
						</span>
                    </div>

                    <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        Transactimo est une application métier centralisant la gestion des annonces, des clients pour une agence immobilière.
                    </p>
                </div>


                {/* App Store Stats */}
                <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
                    {[
                        {
                            value: '+180',
                            label: 'Annonces',
                            icon: (
                                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
                                     viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24"/>
                                </svg>
                            ),
                        },
                        {
                            value: '<200ms',
                            label: 'Temps de réponse',
                            icon: (
                                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}
                                     viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z"/>
                                </svg>
                            ),
                        },
                        {
                            value: '500+',
                            label: 'Clients suivis',
                            icon: (
                                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`}
                                     viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                                </svg>
                            ),
                        },
                        {
                            label: 'Automatisation',
                            value: 'CI/CD',
                            icon: (
                                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
                                     viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/>
                                </svg>
                            ),
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`group relative backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border transition-all duration-300 ${
                                theme === 'dark'
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                                    : 'bg-gray-100/80 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                            }`}
                        >
                            {/* Decorative gradient background */}
                            <div
                                className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                    theme === 'dark' ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                                }`}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <div className="space-y-0.5 sm:space-y-1">
                                    <div
                                        className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text transition-all duration-300 ${
                                            theme === 'dark'
                                                ? 'from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300'
                                                : 'from-blue-700 to-purple-700 group-hover:from-blue-600 group-hover:to-purple-600'
                                        }`}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className={`text-xs sm:text-sm transition-colors duration-300 ${
                                            theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-700 font-medium group-hover:text-gray-800'
                                        }`}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div
                                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
                            <div
                                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

                            {/* Hover glow effect */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-500 ${
                                    theme === 'dark' ? 'group-hover:opacity-15 blur-lg' : 'group-hover:opacity-10 blur-lg'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Featured App Preview */}
                <div className="max-w-lg mx-auto px-4">
                    <div
                        className={`group relative rounded-2xl p-1 transition-all duration-500 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 hover:from-blue-500/20 hover:to-purple-500/20'
                                : 'bg-gradient-to-b from-gray-200 to-gray-100 hover:from-blue-500/10 hover:to-purple-500/10 shadow-lg'
                        }`}
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                        <div
                            className={`rounded-2xl overflow-hidden relative ${
                                theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'
                            }`}
                        >
                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor"
                                              strokeWidth="0.5"/>
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#grid)"/>
                                </svg>
                            </div>

                            <div className="relative p-8">
                                {/* Badge */}
                                <div className="flex justify-center">
                                    <div
                                        className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                                        <span
                                            className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>Web application</span>
                                    </div>
                                </div>

                                {/* App Info */}
                                <div className="text-center mt-6">
                                    <h3
                                        className={`text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 ${
                                            theme === 'dark' ? 'from-white to-gray-300' : 'from-gray-900 to-gray-800 group-hover:from-blue-700 group-hover:to-purple-700'
                                        }`}
                                    >
                                        Crypto arbitrage
                                    </h3>
                                    <p
                                        className={`mb-6 group-hover:text-gray-300 transition-colors ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-700 font-medium group-hover:text-gray-800'
                                        }`}
                                    >
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="space-y-1">
                                            <div
                                                className={`flex items-center justify-center gap-1 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                                                </svg>
                                                <span className="font-semibold">5</span>
                                            </div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600 font-medium'}`}>Catégories de biens</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div
                                                className={`flex items-center justify-center gap-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z"/>
                                                </svg>
                                                <span className="font-semibold">+25</span>
                                            </div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600 font-medium'}`}>Articles publiés</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div
                                                className={`flex items-center justify-center gap-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M17,10A7,7 0 0,1 24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z"/>
                                                </svg>
                                                <span className="font-semibold">70+</span>
                                            </div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600 font-medium'}`}>Biens en gestion</p>
                                        </div>
                                    </div>

                                    {/* Features Pills */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Cross-Platform', 'Real-time Sync', 'Offline Mode'].map((feature, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                                                    theme === 'dark'
                                                        ? 'bg-gray-800 text-gray-400 border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300'
                                                        : 'bg-gray-200 text-gray-700 border-gray-300 group-hover:border-gray-400 group-hover:text-gray-800 font-medium'
                                                }`}
                                            >
												{feature}
											</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                                <div
                                    className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                                <div
                                    className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
                                <div
                                    className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`} fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

