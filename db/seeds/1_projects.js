exports.seed = function(knex) {
	return knex('projects')
		.del()
		.then(() => {
			return knex('projects')
				.insert([
					{
						id: 'paragon',
						client: 'Paragon Real Estate',
						description:
							'Paragon is a prestigious real estate company based out of the Bay Area in San Francisco. They focus primarily on residential real estate and consistently rank as one of the top companies in the Bay Area. Together with the team at High Seas Consulting, I developed the frontend aspects of the redesign of their public website. My central responsibilities included frontend architecture and technology decisions, SVG animations, and search engine optimization.',
						long_services:
							'Frontend Development, Animations, Search Engine Optimization',
						name: 'Paragon Real Estate Website',
						nextProjectLink: '/astarte',
						short_services: 'Frontend Development',
						website_url: 'https://www.paragon-re.com',
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'astarte',
						client: 'Astarte Biologics',
						description:
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
						long_services:
							'UX/UI + Visual Design + Full Stack Development',
						name: 'Astarte Biologics Intranet',
						nextProjectLink: '/dreamstream',
						short_services: 'UX/UI',
						users: [
							'Lab Technicians',
							'System Admins',
							'Order Fulfillment Personnel'
						],
						website_url: 'https://www.astartebio.com',
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'dreamstream',
						client: 'Personal Project',
						description:
							"Dream Stream is a mobile application built using the Ionic framework and Angular. The goal of the app is to track users' dreams and analyze them using IBM Watson to determine recurring words and themes. With a small team of four other developers, I helped guide the project through completion in a short two week time period. My other main tasks included project definition, visual design, and frontend development.",
						long_services:
							'Frontend Development, Visual Design, Project Management',
						name: 'DreamStream Mobile App',
						nextProjectLink: '/salvage',
						short_services: 'Frontend Development, Visual Design',
						website_url:
							'https://github.com/IanSmith89/dreamStream',
						with: 'Galvanize'
					},
					{
						id: 'salvage',
						client: 'Personal Project',
						description:
							'Salvage is a food donation and compost app that provides users a resource for locations to drop off donations and a locator for businesses who accept small donations. This project uses Electron to package the underlying Angular app as a native desktop application available for download on OSX, Linux, and Windows. I undertook all aspects of this project including user research, experience and visual design, fullstack development, and user testing.',
						long_services:
							'UX, Fullstack Development, User Research, Visual Design',
						name: 'Salvage Native App',
						nextProjectLink: '/cheba-hut',
						short_services: 'UX, Fullstack Development',
						website_url: 'https://github.com/IanSmith89/salvage',
						with: 'Galvanize'
					},
					{
						id: 'cheba-hut',
						client: 'Cheba Hut',
						description:
							"Cheba Hut is a toasted sandwich restaurant with locations across the Western and Midwestern United States. They target specifically counterculture types and regularly offer events and promotions throughout the year. As a designer at PHOCO, I worked with Cheba Hut to create posters and ads that showcased the company's mission and provided notice of upcoming events. My contributions inlcuded hand drawn illustration and typography, graphic design, and visual branding.",
						long_services: 'Graphic Design, Illustration',
						name: 'Cheba Hut Event Posters',
						nextProjectLink: '/downtown-artery',
						short_services: 'Graphic Design, Illustration',
						website_url: 'https://www.chebahut.com',
						with: 'PHOCO'
					},
					{
						id: 'downtown-artery',
						client: 'Downtown Artery',
						description:
							'The Downtown Artery is a cafe, bar, and music venue in Old Town Fort Collins, CO. Focused on giving artists, musicians, and other creatives a central hub for enjoyment, the Artery regularly hosts music concerts and other performances. As a freelancer, I created a number of event and concert posters with a combination of traditional and digital media.',
						long_services: 'Graphic Design, Illustration',
						name: 'Downtown Artery Concert Posters',
						nextProjectLink: '/topshelf',
						short_services: 'Graphic Design, Illustration',
						website_url: 'https://www.downtownartery.com',
						with: 'Freelance'
					},
					{
						id: 'topshelf',
						client: 'Topshelf Printers',
						description:
							'Topshelf Printers is a successful screen printing and embroidery shop based out of Northern Colorado. They work with companies and customers with jobs sizes ranging from small to multi-thousand industrial scale quantity orders. As a production artist, I created original shirt designs for various customers as well as the Topshelf brand.',
						long_services:
							'Screen printing, Graphic Design, Illustration',
						name: 'Topshelf Shirts',
						nextProjectLink: '/paragon',
						short_services: 'Screen printing, Graphic Design',
						website_url: 'http://www.topshelfprinters.com',
						with: 'Topshelf Printers'
					}
				])
				.returning('*');
		});
};
