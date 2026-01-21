import * as React from 'react';
import {useTheme} from '@/app/theme/ThemeProvider';

export type GalleryData = {
    column_1: Array<{
        imageSrc: string;
        alt?: string;
    }>,
    column_2: Array<{
        imageSrc: string;
        alt?: string;
    }>,
};

/*const gallery: GalleryData = {
    column_1: [
        {imageSrc: fullPagescrolling.src, alt: 'Full page scrolling'}
    ],
    column_2: [
        {imageSrc: searchLandingPage.src, alt: 'Recherche - landing page'},
        {imageSrc: phoneVersion.src, alt: 'Version mobile'},
        {imageSrc: houseInfo.src, alt: 'Fiche du bien'}
    ]
}*/

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

    return (
        <section className="relative py-16 sm:py-20">
            <h2
                className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center ${
                    theme === 'dark' ? '' : 'text-gray-900'
                }`}
            >
                Galerie
            </h2>

            {/* Mur type Instagram (2 colonnes contrôlées) */}
            <div className="mx-auto max-w-5xl px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {gallery.column_1.map((img) => (
                            <button
                                key={img.imageSrc}
                                type="button"
                                className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                onClick={() => setOpenSrc(img.imageSrc)}
                                aria-label="Agrandir l’image"
                            >
                                <img
                                    src={img.imageSrc}
                                    alt={img.alt ?? ''}
                                    loading="lazy"
                                    className="w-full h-auto block hover:opacity-95 transition"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6">
                        {gallery.column_2.map((img) => (
                            <button
                                key={img.imageSrc}
                                type="button"
                                className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                onClick={() => setOpenSrc(img.imageSrc)}
                                aria-label="Agrandir l’image"
                            >
                                <img
                                    src={img.imageSrc}
                                    alt={img.alt ?? ''}
                                    loading="lazy"
                                    className="w-full h-auto block hover:opacity-95 transition"
                                />
                            </button>
                        ))}
                    </div>
                </div>
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

                    <img
                        src={openSrc}
                        alt=""
                        className="max-h-[90vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};
