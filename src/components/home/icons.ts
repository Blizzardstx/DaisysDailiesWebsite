/** Inner markup for each 24×24 homepage icon; stroked with `currentColor`. */
export const icons = {
	flower: `<ellipse cx="12" cy="7" rx="2.6" ry="4"/>
		<ellipse cx="12" cy="17" rx="2.6" ry="4"/>
		<ellipse cx="7" cy="12" rx="4" ry="2.6"/>
		<ellipse cx="17" cy="12" rx="4" ry="2.6"/>
		<circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/>`,
	people: `<circle cx="9" cy="8" r="3.2"/>
		<path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/>
		<circle cx="17.3" cy="9.6" r="2.3"/>
		<path d="M16.4 14.7c2.6-.4 4.6 1.4 4.6 4.1"/>`,
	route: `<path d="M6 3.5a3 3 0 0 1 3 3c0 2.1-3 5.5-3 5.5S3 8.6 3 6.5a3 3 0 0 1 3-3Z"/>
		<circle cx="6" cy="6.4" r="1"/>
		<path d="M18 12.8a3 3 0 0 1 3 3c0 2.1-3 5.5-3 5.5s-3-3.4-3-5.5a3 3 0 0 1 3-3Z"/>
		<circle cx="18" cy="15.7" r="1"/>
		<path d="M9.4 8.4h3a3.3 3.3 0 0 1 0 6.6h-2.6a3.3 3.3 0 0 0 0 6.6h4.7" stroke-dasharray="2.8 2.8"/>`,
	calendar: `<rect x="3.2" y="5" width="17.6" height="16" rx="3.2"/>
		<path d="M8 3v4M16 3v4M3.2 10.2h17.6"/>
		<path d="M8.7 14.8l2.1 2.1 4.3-4.3"/>`,
	bell: `<path d="M12 3.5c-2.7 0-4.6 2.1-4.6 4.8v3c0 .9-.4 1.7-1 2.4l-.9 1a1 1 0 0 0 .7 1.7h11.6a1 1 0 0 0 .7-1.7l-.9-1c-.6-.7-1-1.5-1-2.4v-3c0-2.7-1.9-4.8-4.6-4.8Z"/>
		<path d="M9.7 19.5a2.6 2.6 0 0 0 4.6 0"/>`,
	shield: `<path d="M12 2.8 4.9 5.8v5.6c0 4.4 3 8.4 7.1 9.8 4.1-1.4 7.1-5.4 7.1-9.8V5.8L12 2.8Z"/>
		<path d="M8.9 12.1l2.2 2.2 4.2-4.4"/>`,
	mic: `<rect x="9" y="3" width="6" height="11" rx="3"/>
		<path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/>`,
	repeat: `<path d="m17 2.8 3 3-3 3"/>
		<path d="M4 11V9.8a4 4 0 0 1 4-4h12"/>
		<path d="m7 21.2-3-3 3-3"/>
		<path d="M20 13v1.2a4 4 0 0 1-4 4H4"/>`,
	week: `<rect x="3.2" y="5" width="17.6" height="16" rx="3.2"/>
		<path d="M8 3v4M16 3v4M3.2 10.2h17.6"/>
		<path d="M7.4 14h2M11 14h2M14.6 14h2M7.4 17.4h2M11 17.4h2"/>`,
	wand: `<path d="M5 19 15.5 8.5"/>
		<path d="m14 7 3 3"/>
		<path d="M18.5 3v3M17 4.5h3M8 3.5v2M7 4.5h2M19.5 13v2M18.5 14h2"/>`,
	star: `<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z"/>`,
	search: `<circle cx="11" cy="11" r="6.2"/>
		<path d="m20 20-4.4-4.4"/>`,
	shortcut: `<rect x="6.5" y="2.8" width="11" height="18.4" rx="2.6"/>
		<path d="M12 8.5v5M9.5 11h5M10.5 17.8h3"/>`,
	link: `<path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.2 4.2 0 0 0-6-6l-1 1"/>
		<path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.2 4.2 0 0 0 6 6l1-1"/>`,
	moon: `<path d="M20 14.2A8 8 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2Z"/>`,
	brush: `<path d="M14.5 4.5 19.5 9.5 11 18H6v-5l8.5-8.5Z"/>
		<path d="M4 21h16"/>`,
	globe: `<circle cx="12" cy="12" r="8.6"/>
		<path d="M3.4 12h17.2M12 3.4c2.6 2.6 2.6 14.6 0 17.2M12 3.4c-2.6 2.6-2.6 14.6 0 17.2"/>`,
	pin: `<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Z"/>
		<circle cx="12" cy="10" r="2.3"/>`,
	export: `<path d="M12 3.5v11M8 7.5l4-4 4 4"/>
		<path d="M5 13.5v4.2a2.3 2.3 0 0 0 2.3 2.3h9.4a2.3 2.3 0 0 0 2.3-2.3v-4.2"/>`,
	swap: `<circle cx="8" cy="8" r="3"/>
		<path d="M3 18.5c0-2.6 2.2-4.4 5-4.4"/>
		<path d="M14 15h7M18.5 12.5 21 15l-2.5 2.5"/>`,
} as const;

export type IconName = keyof typeof icons;
