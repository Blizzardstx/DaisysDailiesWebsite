export const SITE = {
	name: "Daisy's Dailies",
	company: 'Sibert Strategy Group',
	tagline: 'The visual daily planner for families',
	description:
		"Turn your errands into a flower. Daisy's Dailies is the visual way for families to plan daily tasks, appointments, and routes together.",
	email: 'daisysdailies@sibertstrategygroup.com',
} as const;

export const APP_STORE_URL = 'https://apps.apple.com/app/id6758970280';
export const PLAY_STORE_URL =
	'https://play.google.com/store/apps/details?id=com.sibertstrategygroup.daisysdailies';

/**
 * Primary nav. Section links are written as `/#id` so they resolve from the
 * legal pages as well as from the homepage.
 */
export const NAV_LINKS = [
	{ href: '/#how-it-works', label: 'How it works' },
	{ href: '/#features', label: 'Features' },
	{ href: '/#pricing', label: 'Pricing' },
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/contact-us', label: 'Contact' },
] as const;

export const FOOTER_LINKS = [
	{
		title: 'Product',
		links: [
			{ href: '/#how-it-works', label: 'How it works' },
			{ href: '/#features', label: 'Features' },
			{ href: '/#pricing', label: 'Pricing' },
			{ href: '/#faq', label: 'FAQ' },
		],
	},
	{
		title: 'Support',
		links: [
			{ href: '/contact-us', label: 'Contact us' },
			{ href: '/data-deletion', label: 'Delete your data' },
			{ href: `mailto:${SITE.email}`, label: 'Email support' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ href: '/privacy-policy', label: 'Privacy Policy' },
			{ href: '/terms-of-service', label: 'Terms of Service' },
			{ href: '/data-deletion', label: 'Data Deletion' },
		],
	},
] as const;
