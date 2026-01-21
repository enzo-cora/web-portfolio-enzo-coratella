'use client';

import React from "react";
import {useTheme} from "@/app/theme/ThemeProvider";

export type ProjectPresentationData = {
    textComponent: React.ReactNode;
    sources: Array<{
        icon: React.ReactNode,
        label: string,
        description: string
        link: string
    }>
}

export function ProjectPresentationText(props: { presentation: ProjectPresentationData }) {
    const {theme} = useTheme();

    const {presentation} = props

    return (
        <section className="relative overflow-hidden md:py-0">
            <h2
                className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center ${
                    theme === 'dark' ? '' : 'text-gray-900'
                }`}
            >
                Presentation
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start px-6 md:px-12">
                <div className="flex-1">
                    <div
                        className={`text-md text-justify leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {presentation.textComponent}
                    </div>
                </div>

                <aside
                    className={`${theme === 'dark' ? 'bg-gradient-to-b bg-zinc-900 border-white' : 'bg-white border-gray-200'} border rounded-xl p-5 mx-auto w-full md:min-w-[220px] md:w-auto max-w-sm shadow-sm`}>
                    <h3 className={`text-xs uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Resources
                    </h3>
                    <div className="flex flex-col gap-2">
                        {presentation.sources.map((source, i) => (
                            <a
                                key={i}
                                href={source.link}
                                aria-label={source.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex mb-2 items-center justify-center flex-col gap-0.5 px-3 py-1.5 text-sm font-medium rounded-full border transition hover:opacity-80 w-full max-w-[200px]"
                            >
                                <span className="inline-flex items-center gap-2">  {source.icon} {source.label} </span>
                                <span className="text-xs font-normal opacity-70">{source.description}</span>
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
