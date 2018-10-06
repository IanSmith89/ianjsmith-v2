exports.seed = function(knex) {
	return knex('projects')
		.del()
		.then(() => {
			return knex('projects')
				.insert([
					{
						id: 'paragon',
						name: 'Paragon Real Estate Website',
						client: 'Paragon Real Estate',
						description:
							'Paragon is a prestigious real estate company based out of the Bay Area in San Francisco. They focus primarily on residential real estate and consistently rank as one of the top companies in the Bay Area. Together with the team at High Seas Consulting, I developed the frontend aspects of the redesign of their public website. My central responsibilities included frontend architecture and technology decisions, SVG animations, and search engine optimization.',
						services: [
							'Front End Development',
							'Animation',
							'Search Engine Optimization'
						],
						users: [
							'Prospective Home Buyers',
							'Real Estate Agents',
							'Investors',
							'Office Administrators'
						],
						website_url: 'https://www.paragon-re.com',
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'astarte',
						name: 'Astarte Biologics Intranet',
						client: 'Astarte Biologics',
						description:
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
						how: [
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
						],
						services: [
							'Interaction Design',
							'Visual Design',
							'Full Stack Development'
						],
						takeaways: [
							'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
							'Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
						],
						tech_stack: ['Node', 'Express', 'React', 'Postgres'],
						users: [
							'Lab Technicians',
							'System Admins',
							'Order Fulfillment Personnel'
						],
						website_url: 'https://www.astartebio.com',
						why: [
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
							'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
						],
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'dreamstream',
						name: 'DreamStream Mobile App',
						description:
							"Dream Stream is a mobile application built using the Ionic framework and Angular. The goal of the app is to track users' dreams and analyze them using IBM Watson to determine recurring words and themes. With a small team of four other developers, I helped guide the project through completion in a short two week time period. My other main tasks included project definition, visual design, and frontend development.",
						services: [
							'Front End Development',
							'Visual Design',
							'Project Management'
						],
						users: [],
						website_url:
							'https://github.com/IanSmith89/dreamStream',
						with: 'Galvanize'
					},
					{
						id: 'salvage',
						name: 'Salvage Native App',
						description:
							'Salvage is a food donation and compost app that provides users a resource for locations to drop off donations and a locator for businesses who accept small donations. This project uses Electron to package the underlying Angular app as a native desktop application available for download on OSX, Linux, and Windows. I undertook all aspects of this project including user research, experience and visual design, fullstack development, and user testing.',
						services: [
							'User Research',
							'Visual Design',
							'Full Stack Development'
						],
						users: [],
						website_url: 'https://github.com/IanSmith89/salvage',
						with: 'Galvanize'
					},
					{
						name: 'Cheba Hut Event Posters',
						id: 'cheba-hut',
						client: 'Cheba Hut',
						description:
							"Cheba Hut is a toasted sandwich restaurant with locations across the Western and Midwestern United States. They target specifically counterculture types and regularly offer events and promotions throughout the year. As a designer at PHOCO, I worked with Cheba Hut to create posters and ads that showcased the company's mission and provided notice of upcoming events. My contributions inlcuded hand drawn illustration and typography, graphic design, and visual branding.",
						services: ['Graphic Design', 'Illustration'],
						users: [],
						website_url: 'https://www.chebahut.com',
						with: 'PHOCO'
					},
					{
						name: 'Downtown Artery Concert Posters',
						id: 'downtown-artery',
						client: 'Downtown Artery',
						description:
							'The Downtown Artery is a cafe, bar, and music venue in Old Town Fort Collins, CO. Focused on giving artists, musicians, and other creatives a central hub for enjoyment, the Artery regularly hosts music concerts and other performances. As a freelancer, I created a number of event and concert posters with a combination of traditional and digital media.',
						services: ['Graphic Design', 'Illustration'],
						users: [],
						website_url: 'https://www.downtownartery.com',
						with: 'Freelance'
					},
					{
						id: 'topshelf',
						name: 'Topshelf Shirts',
						client: 'Topshelf Printers',
						description:
							'Topshelf Printers is a successful screen printing and embroidery shop based out of Northern Colorado. They work with companies and customers with jobs sizes ranging from small to multi-thousand industrial scale quantity orders. As a production artist, I created original shirt designs for various customers as well as the Topshelf brand.',
						services: ['Graphic Design', 'Illustration'],
						users: [],
						website_url: 'http://www.topshelfprinters.com',
						with: 'Topshelf Printers'
					}
				])
				.returning('*');
		});
};
