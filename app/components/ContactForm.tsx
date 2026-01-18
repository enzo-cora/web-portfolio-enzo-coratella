'use client';

import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');
		setErrorMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send message');
			}

			setStatus('success');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			setStatus('error');
			setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
		}
	};

	return (
		<form className="space-y-4" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Name
				</label>
				<input
					type="text"
					id="name"
					required
					className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
					value={formData.name}
					onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Email
				</label>
				<input
					type="email"
					id="email"
					required
					className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
					value={formData.email}
					onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
					Message
				</label>
				<textarea
					id="message"
					required
					rows={3}
					className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
					value={formData.message}
					onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
				/>
			</div>

			<button
				type="submit"
				disabled={status === 'loading'}
				className="w-full px-4 py-2 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{status === 'loading' ? 'Sending...' : 'Send Message'}
			</button>

			{status === 'success' && <p className="text-sm text-green-600 dark:text-green-500 text-center">Message sent successfully!</p>}

			{status === 'error' && <p className="text-sm text-red-600 dark:text-red-500 text-center">{errorMessage}</p>}
		</form>
	);
}
