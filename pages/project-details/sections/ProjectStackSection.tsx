'use client';

import {useTheme} from "@/app/theme/ThemeProvider";

export type ProjectStackData = {
    core_skills: Array<{
        name: string;
        level: number;
        description: string
    }>;
    specialized_skills: Array<{
        name: string;
        level: number;
    }>;
}


export const ProjectStackSection = (props: {stack: ProjectStackData}) => {
    const {theme} = useTheme();
    const {stack} = props

    const colors = [
        theme === 'dark'
            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            : 'bg-blue-100 text-blue-600 border border-blue-200',
        theme === 'dark'
            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
            : 'bg-orange-100 text-orange-600 border border-orange-200',
        theme === 'dark'
            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
            : 'bg-green-100 text-green-600 border border-green-200',
        theme === 'dark'
            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
            : 'bg-purple-100 text-purple-600 border border-purple-200'
    ]

    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center ${theme === 'dark' ? '' : 'text-gray-900'}`}>Stack du projet</h2>
                <p className={`text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Des outils de développement adaptés aux besoins
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                    {/* Core Technologies */}
                    <div className="space-y-4 sm:space-y-6 px-2">
                        <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
                            <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
                                 viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"/>
                            </svg>
                            Core Stack
                        </h3>
                        {stack.core_skills.map((skill, index) => {
                            return (
                                <div key={skill.name} className="group relative">
                                    <div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
                                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                                            <span
                                                className={`font-medium ${theme === 'dark' ? '' : 'text-gray-800'}`}>{skill.name}</span>
                                            {/* Skill-specific badges */}
                                            <div className="flex flex-wrap sm:flex-nowrap gap-1">
                                                  <span
                                                      className={`px-2 py-0.5 text-xs rounded-full ${colors[index % colors.length]}`}
                                                  >
													{skill.description}
												</span>
                                            </div>
                                        </div>
                                        <span
                                            className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} opacity-0 group-hover:opacity-100 transition-opacity`}>
										{skill.level}%
									</span>
                                    </div>
                                    <div
                                        className={`h-2.5 rounded-full overflow-hidden backdrop-blur-sm relative ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                                            style={{width: `${skill.level}%`}}
                                        ></div>
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand"
                                            style={{width: `${skill.level}%`}}
                                        ></div>
                                    </div>
                                    {/* Hover Card with Details */}
                                    <div
                                        className={`hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border ${
                                            theme === 'dark' ? 'bg-gray-800/90 border-gray-700/50' : 'bg-white/90 border-gray-200 shadow-lg'
                                        }`}
                                    >
                                        <div className="text-sm space-y-2">
                                            <p className={`font-medium ${theme === 'dark' ? '' : 'text-gray-900'}`}>{skill.name}</p>
                                            <div
                                                className={`space-y-1 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <p>• {skill.level}% d&#39;utilisation </p>
                                                <p>• Utilisation {skill.level > 90 ? 'Majeur' : skill.level > 60 ? 'Significative' : 'Mineur'} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Additional Skills */}
                    <div className="space-y-4 sm:space-y-6 px-2">
                        <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 ${theme === 'dark' ? '' : 'text-gray-800'}`}>
                            <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}
                                 viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12,0L3,7L4.63,8.27L12,14L19.36,8.27L21,7L12,0M19.37,10.73L12,16.47L4.62,10.73L3,12L12,19L21,12L19.37,10.73M19.37,15.73L12,21.47L4.62,15.73L3,17L12,24L21,17L19.37,15.73"/>
                            </svg>
                            Skills secondaires
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stack.specialized_skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`group backdrop-blur-sm p-4 rounded-xl border relative overflow-hidden ${
                                        theme === 'dark'
                                            ? 'bg-gray-800/30 border-gray-700/50 hover:border-purple-500/50'
                                            : 'bg-white/80 border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md'
                                    }`}
                                >
                                    <div className="relative z-10">
                                        <h4 className={`font-medium mb-2 break-words ${theme === 'dark' ? '' : 'text-gray-800'}`}>{skill.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`flex-grow h-1.5 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
                                                <div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-expand"
                                                    style={{width: `${skill.level}%`}}
                                                ></div>
                                            </div>
                                            <span
                                                className={`text-sm whitespace-nowrap ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>{skill.level}%</span>
                                        </div>
                                    </div>
                                    {/* Decorative Background */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                            <svg
                                                className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-500 transform rotate-12"
                                                viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"/>
                                            </svg>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
