'use client';

import {useRouter} from "next/navigation";

export function FloatingBackToPortfolio() {
    return (
        <div
            className="pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-4 z-50 flex justify-start md:bottom-auto md:left-6 md:top-6">
            <BackToPortfolioButton />
        </div>
    );
}

function BackToPortfolioButton() {
    const router = useRouter();

    const handleBack = () => {
        // Prefer restoring the previous scroll position when coming from within the site.
        // If there is no usable in-app history entry, fall back to the portfolio root.
        const hasHistory = typeof window !== 'undefined' && window.history.length > 1;
        const sameOriginReferrer = typeof document !== 'undefined'
            && !!document.referrer
            && document.referrer.startsWith(window.location.origin);

        if (hasHistory && sameOriginReferrer) {
            router.back();
            return;
        }

        router.push('/');
    };

    return (
        <button
            type="button"
            onClick={handleBack}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-gray-900 shadow-lg backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-gray-900/70 dark:text-white dark:hover:bg-gray-900"
            aria-label="Back to portfolio"
        >
            <span aria-hidden>←</span>
            <span>Retour au portfolio</span>
        </button>
    );
}