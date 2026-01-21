'use client';

import {useTheme} from "@/app/theme/ThemeProvider";
import {IconComponent} from "@/screens/types/utils";
import {TechnicalTags} from "@/screens/project-details/types";


export type ProjectHeroSectionData = {
    title: string,
    technical_tags: TechnicalTags[],
    subtitle_description: string,
    short_app_description: string,
    impact_metrics: Array<{
        icon: IconComponent,
        value: string
        label: string,
    }>,
    project_card: {
        app_type: string, /** Web app / Mobile app / Game app ...*/
        business_metrics: Array<{
            icon: IconComponent,
            value: string
            label: string,
        }>,
        featuresPills: string[]

    }
}


export const ProjectHeroSection = (props: { heroSectionData: ProjectHeroSectionData }) => {
    const {theme = 'light'} = useTheme()
    const {heroSectionData} = props

    const iconColors = [
        theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
        theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
        theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500',
        theme === 'dark' ? 'text-green-400' : 'text-green-600',
    ];

    const technicalTagColors = [
        'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
        'bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
        'bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400',
    ];

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
                        {heroSectionData.subtitle_description}
                    </h2>

                    {/* Technical Tags*/}

                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                        {heroSectionData.technical_tags.map((tag, index) => (
                            <span
                                key={`${tag}-${index}`}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm ${technicalTagColors[index % technicalTagColors.length]}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        {heroSectionData.short_app_description}
                    </p>
                </div>


                {/* Impact_metrics */}
                <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
                    {heroSectionData.impact_metrics.map((stat, index) => (
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
                                    className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 ">
                                    <stat.icon className={`w-8 h-8 ${iconColors[index % iconColors.length]}`}/>
                                </div>
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
                                            className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>{heroSectionData.project_card.app_type}</span>
                                    </div>
                                </div>

                                {/* App Info */}
                                <div className="text-center mt-6">
                                    <h3
                                        className={`text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 ${
                                            theme === 'dark' ? 'from-white to-gray-300' : 'from-gray-900 to-gray-800 group-hover:from-blue-700 group-hover:to-purple-700'
                                        }`}
                                    >
                                        {heroSectionData.title}
                                    </h3>
                                    <p
                                        className={`mb-6 group-hover:text-gray-300 transition-colors ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-700 font-medium group-hover:text-gray-800'
                                        }`}
                                    >
                                    </p>

                                    {/* Business metrics*/}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {heroSectionData.project_card.business_metrics.map((metric, index) => (
                                            <div key={index} className="space-y-1">
                                                <div className="flex items-center justify-center gap-1">
                                                    <metric.icon
                                                        className={`w-5 h-5 ${iconColors.toReversed()[index % iconColors.length]}`}/>
                                                    <span className="font-semibold">{metric.value}</span>
                                                </div>
                                                <p
                                                    className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600 font-medium'}`}
                                                >
                                                    {metric.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features Pills */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {heroSectionData.project_card.featuresPills.map((feature, index) => (
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

