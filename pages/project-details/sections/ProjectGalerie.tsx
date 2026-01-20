'use client';

import * as React from 'react';
import {useTheme} from '@/app/theme/ThemeProvider';
import searchLandingPage from "@/public/images/projet-immobilier/search-landing-page.webp"
import fullPagescrolling from "@/public/images/projet-immobilier/full-page-scrolling.webp"
import houseInfo from "@/public/images/projet-immobilier/house-information-page.webp"
import phoneVersion from "@/public/images/projet-immobilier/phone-version.webp"

type GalleryImage = {
  src: string;
  alt?: string;
};

// Compose tes colonnes ici (ordre + répartition maîtrisés)
const imgColumn1: GalleryImage[] = [
  { src: fullPagescrolling.src, alt: 'Full page scrolling' },
];

const imgColumn2: GalleryImage[] = [
  { src: searchLandingPage.src, alt: 'Recherche - landing page' },
  { src: phoneVersion.src, alt: 'Version mobile' },
  { src: houseInfo.src, alt: 'Fiche du bien' },
];

export const ProjectGalerie = () => {
  const { theme = 'light' } = useTheme();

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
            {imgColumn1.map((img) => (
              <button
                key={img.src}
                type="button"
                className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                onClick={() => setOpenSrc(img.src)}
                aria-label="Agrandir l’image"
              >
                <img
                  src={img.src}
                  alt={img.alt ?? ''}
                  loading="lazy"
                  className="w-full h-auto block hover:opacity-95 transition"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {imgColumn2.map((img) => (
              <button
                key={img.src}
                type="button"
                className="block w-full rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                onClick={() => setOpenSrc(img.src)}
                aria-label="Agrandir l’image"
              >
                <img
                  src={img.src}
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
