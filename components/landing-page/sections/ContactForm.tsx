'use client';

import Script from 'next/script';
import {useEffect, useState} from 'react';

const WEB3_FORM_PUBLIC_KEY = "10b6444c-0104-4b73-90d6-a1fb8b7aca91"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    useEffect(() => {
        const { name, email, message } = formData;
        const complete = Boolean(name && email && message);
        setIsFormComplete(complete);
        if (!complete) setCaptchaToken(null);
    }, [formData]);

    if (typeof window !== 'undefined') {
        (window as any).onCaptchaVerified = (token: string) => {
            setCaptchaToken(token);
        };
        (window as any).onCaptchaExpired = () => {
            setCaptchaToken(null);
        };
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (!captchaToken) {
            setStatus('error');
            setErrorMessage('Veuillez valider le captcha avant l\'envoi.');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3_FORM_PUBLIC_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    hcaptcha_response: captchaToken,
                }),
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message || 'Impossible de délivrer le message');
            }

            setStatus('success');
            setFormData({name: '', email: '', message: ''});
            setCaptchaToken(null);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Impossible de délivrer le message');
        }
    };

    return (
        <>
            <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({...prev, message: e.target.value}))}
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading' || (isFormComplete && !captchaToken)}
                className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            <div
                className="h-captcha"
                data-captcha="true"
                data-callback="onCaptchaVerified"
                data-expired-callback="onCaptchaExpired"
                data-theme="auto"
                style={{ display: isFormComplete ? 'block' : 'none' }}
                aria-hidden={!isFormComplete}
            />

            {status === 'success' &&
                <p className="text-green-600 dark:text-green-400 text-center">Message envoyé avec succès.</p>}

            {status === 'error' && <p className="text-red-600 dark:text-red-400 text-center">{errorMessage}</p>}
            </form>
        </>
    );
}
