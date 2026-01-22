'use client';

import * as React from 'react';
import {useTheme} from '@/app/theme/ThemeProvider';
import Image, {StaticImageData} from 'next/image';

export type GalleryData = {
    column_1: Array<{
        image: StaticImageData;
        alt: string;
    }>,
    column_2?: Array<{
        image: StaticImageData;
        alt: string;
    }>,
};

export const ProjectGalerie = (props: { gallery: GalleryData }) => {
    const {theme = 'light'} = useTheme();
    const {gallery} = props;

    const [openSrc, setOpenSrc] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!openSrc) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpenSrc(null);
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [openSrc]);


    const twoColumnsComponent = (gallery: Required<GalleryData>) => <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start">

            {/*Colonne 1 (Required) */}
            <div className="flex flex-col gap-4 sm:gap-6">
                {gallery.column_1.map((img) => (
                    <button
                        key={img.image.src}
                        type="button"
                        className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        onClick={() => setOpenSrc(img.image.src)}
                        aria-label="Agrandir l’image"
                    >
                        <Image
                            src={img.image}
                            alt={img.alt}
                            width={800}
                            height={800}
                            className="w-full h-auto block hover:opacity-95 transition"
                        />
                    </button>
                ))}
            </div>

            {/*Colonne 2*/}
            <div className="flex flex-col gap-4 sm:gap-6">
                {gallery.column_2.map((img) => (
                    <button
                        key={img.image.src}
                        type="button"
                        className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        onClick={() => setOpenSrc(img.image.src)}
                        aria-label="Agrandir l’image"
                    >
                        <Image
                            src={img.image}
                            alt={img.alt}
                            width={800}
                            height={800}
                            className="w-full h-auto block hover:opacity-95 transition"
                        />
                    </button>
                ))}
            </div>

        </div>
    </div>

    const oneColumnComponent = (gallery: Pick<GalleryData, 'column_1'>) => <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6 place-items-center">
            {/*Colonne 1 (Required) */}
            <div className="flex flex-col gap-4 sm:gap-6">
                {gallery.column_1.map((img) => (
                    <button
                        key={img.image.src}
                        type="button"
                        className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        onClick={() => setOpenSrc(img.image.src)}
                        aria-label="Agrandir l’image"
                    >
                        <Image
                            src={img.image}
                            alt={img.alt}
                            width={800}
                            height={800}
                            className="w-full h-auto block hover:opacity-95 transition"
                        />
                    </button>
                ))}
            </div>

        </div>
    </div>


    return (
        <section className="relative py-16 sm:py-20">
            <h2
                className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center ${
                    theme === 'dark' ? '' : 'text-gray-900'
                }`}
            >
                Galerie
            </h2>

            {/* Mur type Instagram (1 ou 2 colonnes contrôlées) */}
            <div className="mx-auto max-w-5xl px-4">
                {gallery.column_2
                    ? twoColumnsComponent({
                        column_1: gallery.column_1,
                        column_2: gallery.column_2
                    })
                    : oneColumnComponent(gallery)}
            </div>

            {/* Lightbox simple (sans lib) */}
            {openSrc && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setOpenSrc(null)}
                >
                    <button
                        type="button"
                        className="absolute top-4 right-4 rounded-full bg-black/60 text-white px-3 py-2 text-sm"
                        onClick={() => setOpenSrc(null)}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    <Image
                        src={openSrc}
                        alt=""
                        width={1600}
                        height={1600}
                        sizes="auto"
                        style={{width: 'auto', height: 'auto'}}
                        className="max-h-[90vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};


