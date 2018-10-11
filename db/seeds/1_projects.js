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
							'Paragon is a prestigious real estate company based out of the Bay Area in San Francisco. They focus primarily on residential real estate and consistently rank as one of the top companies in the Bay Area. Together with the team at High Seas Consulting, I constructed the front end of their public website. My central responsibilities included frontend architecture and technology choices, SVG animations, and search engine optimization.',
						how: [
							'The blog section of paragon-re.com serves as an incredible resource for journalists, bloggers, investors, and other real estate companies for reliable information and trends about the Bay Area. These pages were the most frequently visited and linked to, so it was important to ensure the experience of reading the blog matched the brand and demonstrated wisdom and trustworthiness.',
							'The biggest group of users are prospective home buyers that use paragon-re.com as a tool to find homes, commercial property, or land in the San Francisco Bay Area. They also can view the agents, locations, and mission of Paragon as a company and educate themselves about the neighborhoods and surrounding areas.',
							'Paragon Real Estate Agents also use the site as a source of information for work and a place to promote their individual real estate businesses and partners, properties, and open houses. It was very important to Paragon that the online experience was of similar quality as the luxury properties they sold.'
						],
						services: [
							'Front End Development',
							'Animation',
							'Search Engine Optimization'
						],
						takeaways: [
							'I gained a better understanding of a new domain and learned a lot about the power of collaboration with the client. This project was unique because we were lucky enough to work with a visionary client that was very involved throughout design, development, and testing.',
							'I also enjoyed the challenge of properly translating written animations to Mandarin and Simplified Chinese. It was a fun experience doing a deep dive on the cultural traditions and meaning behind Chinese writing and calligraphy and a great way to practice animation.',
							'Overall, this project helped me understand how to effectively communicate with all stakeholders in a project, whether they be the client, a colleague, or an outside resource. It was also enjoyable and good experience to work with a remote client in a completely new domain.'
						],
						tech_stack: ['.NET', 'Express', 'React', 'Postgres'],
						users: [
							'Prospective Home Buyers',
							'Real Estate Agents',
							'Office Administrators',
							'Investors',
							'Journalists'
						],
						website_url: 'https://www.paragon-re.com',
						why: [
							'Paragon wanted a public facing website that employed the use of beautiful photography and video content to exemplify the luxurious aspects of their brand while competing with top local San Francisco Real Estate companies as well as national players such as Zillow and Redfin. They wanted an online experience that gave potential homebuyers a sense of trust and knowledge of the market.',
							'This website serves as an important way to introduce new homebuyers to Paragon as a company and demonstrate what set them apart from others concerning history, market dominance, and the agents who choose to work there. It was essential to create a functional experience and aesthetic that appealed to its users while gaining interest and momentum for the company.',
							'They also wanted to show to their agents and competitors that they were willing to invest in their agents and give them the best opportunity and tools to succeed. The agent profiles on the public website provides an inside look into who they are as professionals and exists as the first point of contact for many prospective buyers.'
						],
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'astarte',
						name: 'Astarte Biologics Intranet',
						client: 'Astarte Biologics',
						description:
							'Astarte Biologics is a Washington based biotech company that conducts research and sells products to other labs for research. With the team at High Seas Consulting I helped design and build an intranet to manage products, donors, inventory, and an ordering system that connected to the Astarte e-commerce site. They needed to upgrade from using excel spreadsheets and handwritten documents for record keeping, so we devised a system that accurately tracked thousands of vials products within their lab while handling constant updates from multiple users.',
						how: [
							'Lab technicians and office admins need the ability to record donor information and track the raw materials that are used to create a number of various products. Overall we chose to implement a user interface inspired by the ideas and themes of Google Material Design to remain consistent and clean to the end user while providing a familiar framework for our developers.',
							"Raw materials such as blood and plasma are converted into products that are stored in vials, which in turn are stored in a number of racks in a freezer. After conducting user interviews and watching them work, the interface we came up with was designed in a way that resembled the actual arrangement and appearance of the setup in their lab to help ease the staff's experience with learning the new system.",
							'The intranet seamlessly connects with an external WordPress e-commerce website for order information and fulfillment, so the personnel responsible for completing the orders need instant access to which freezer, row, and vial a specific item is located. The user interface allows them to easily move and remove vials in the system, find a location for a set of vials, as well as updating details and notes.'
						],
						services: [
							'Interaction Design',
							'Visual Design',
							'Full Stack Development'
						],
						takeaways: [
							'This project was a great exercise in thoroughly understanding the flow of inventory creation and management and how to use that information to create a meaningful and reliable user interface.',
							"I also learned how important it is to fully understand the domain in which you're working in and to not be afraid to speak up when questions arise. This project faced some unique constraints that resulted in our team having to take a step back and pause development to better understand how the inventory existed.",
							'In the end, we were able to deliver a huge improvement for Astarte, and this project was a great success and helped them save valuable time and provided ease of mind to them and their customers for accurate and accessible products.'
						],
						tech_stack: ['Node', 'Express', 'React', 'Postgres'],
						users: [
							'Lab Technicians',
							'System Admins',
							'Order Fulfillment Personnel',
							'Biotech Customers'
						],
						website_url: 'https://www.astartebio.com',
						why: [
							'Prior to this project, Astarte had been using a number of different spreadsheets and other documents to keep track of their data with no consistency or definition of how to store their information. They also relied on a handwritten system to track their inventory that resulted in frequent confusion, easy mistakes, and lost time updating for correct information.',
							"The lab technicians and admins at Astarte deal with potentially thousands of individual vial-based products on a daily basis and needed a system that easily and accurately tracked the location of the vials or vial sets stored in multiple racks within various freezers in their lab. They also required an interface that gave them a familiar and simple method for updating and maintaining the vial information that could handle real-time updates and wouldn't be too challenging to learn.",
							'Another important issue was maintaining the hundreds of records of donor and product information and how to properly update the data over time. Since the products Astarte creates from donor blood or plasma are often used for research purposes and testing, the contents and donor details of the product had to be correct and trustworthy for the other labs who made purchases through the e-commerce store.'
						],
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'wasp',
						name: 'Campsite Reservation Prototype',
						client: 'WA State Parks',
						description:
							'After experiencing firsthand the struggle and frustration of using online campsite reservation systems, I created a working prototype of a new system for Washington State Parks. I conducted usability studies with paper prototypes, wireframes, and interactive prototypes to discover optimal workflows and process improvements.',
						how: [
							'Using existing reservation patterns inspired by sites such as Kayak, Orbitz, and Expedia, I designed and tested low fidelity and high fidelity prototypes to gather user feedback and identify the optimal flow for reserving a campsite.',
							'I was able to improve the current reservation workflow by creating interactive wireframes and mockups with Adobe XD.'
						],
						services: [
							'user research',
							'prototyping',
							'information architecture',
							'visual design'
						],
						takeaways: [
							'Building and iterating through multiple prototypes of varying levels of fidelity helped me understand how easily and quickly you can get user feedback to inform design decisions.',
							'I enjoyed using interactive wireframes and prototypes for the usability tests and it helped eliminate some of the issues and questions that sometime result from a lack of clickability and simple functionality.',
							'Another important lesson from this project came from actively listening to user feedback. Since I started the project based mostly on my own viewpoint of the experience I gained a lot of valuable input by focusing on what others liked or disliked to prove and add to my hypothesis.'
						],
						users: ['Hikers', 'Campers'],
						website_url:
							'https://xd.adobe.com/view/77097260-06b0-4df9-4504-3e28ff9ec4a7-0138',
						why: [
							'There are many ways to reserve a campsite in Washington state, but the current online reservation system through Washington State Parks is outdated and difficult to use, causing frequent abandonment and frustration.',
							'Multiple test users reported having used the site before and reported navigation, workflow, and overall design issues that negatively impacted their experience. Fixing these issues could help get more people using the system to book their stays at campsites and state parks.'
						],
						with: 'SVC'
					},
					{
						id: 'dash',
						name: 'Paragon Dash',
						client: 'Paragon Real Estate',
						description:
							'Paragon Dash is the internal dashboard that Paragon Real Estate uses to maintain their properties, agents, listings, and blog as well as a custom print marketing material editor. It also has many types of users with varying levels of authentication and completely different experience and interactions depending on the role. Along with the rest of the High Seas team I built the front end of the site and contributed UX analyses of task workflows and visual design for various UI elements and the blog and newsletter management section.',
						how: [
							'Real Estate Agents and Office Staff at Paragon use Dash to update all listings and property information as well as user settings, blog articles, and resource records. The data on Dash is what shows up on the public website at paragon-re.com.',
							'Aside from data management, Dash is also used to create print materials that can be customized for individual agents and offices. Agents can choose from pre-approved designs offered by Paragon with final output files available by email or directly sent to a printer.',
							'Photographers use Dash to upload images for the thousands of Paragon properties, user headshots, and neighborhood photos.'
						],
						services: [
							'Front End Development',
							'Interaction Design',
							'Visual Design'
						],
						takeaways: [
							'This project was an amazing process and was a worthwhile lesson in the need for constant communication between design and development teams throughout the life of the project. Working as a front end developer and designer for certain sections and pages was also good experience for me.',
							'I also enjoyed building an internal tool that helped people save time during their own work day. It was a welcome challenge to work with so many different user roles and try to optimize the experience for all of them.',
							'The integration between this dashboard system and the public facing website was overall an educational project to be a part of, and I look forward to building more enterprise applications like this in the future.'
						],
						tech_stack: ['.NET', 'Express', 'React', 'Postgres'],
						users: [
							'Real Estate Agents',
							'Office Managers',
							'System Admins',
							'Photographers'
						],
						website_url: 'https://www.paragon-re.com',
						why: [
							'Maintaining all the information involved with a real estate company can be a daunting task, and Paragon Real Estate invested in the construction of a fully customized system that fit the needs of their entire company. They wanted a dashboard system that would attract new agents and more of a reason to stay with the company for current agents.',
							'The daily tasks of real estate agents and office staff often cause them to use a number of different applications to complete their work. The team at Paragon wanted to centralize as much as they could into one place while linking the data in Paragon Dash with the public facing website.',
							"Most real estate agents are in charge of creating their own marketing materials and aren't always provided with tools or guidance on how to do it. Paragon wanted a central online hub where their agents could create approved material that was formatted and branded by Paragon's designers."
						],
						with: 'High Seas Consulting, Inc.'
					},
					{
						id: 'dreamstream',
						name: 'DreamStream Mobile App',
						description:
							"Dream Stream is a mobile application built using the Ionic framework and Angular. The goal of the app is to track people's dreams and analyze their content using IBM Watson to determine recurring words and themes. With a small team of four others, I helped guide the project through completion in a short two week time period. My main tasks included project direction, visual design, and frontend development.",
						how: [
							'People can record the content of their dreams via typing or using speech to text through their phone microphone. They also rate how well they slept and the length of time they were asleep.',
							'Their dream information is recorded and then analyzed by IBM Watson for patterns and repetition of certain words, phrases, or themes. An analysis page shows various metrics such as a word cloud, sleep trends, and word frequency graphs.'
						],
						services: [
							'Front End Development',
							'Visual Design',
							'Project Management'
						],
						users: ['Anyone who dreams'],
						tech_stack: [
							'Node',
							'Express',
							'Angular',
							'Ionic',
							'Postgres'
						],
						website_url:
							'https://github.com/IanSmith89/dreamStream',
						why: [
							"The purpose of this app is to help people remember their dreams in the time in the morning right after they wake up when it's freshest in their minds.",
							"Most of us have trouble remembering our dreams, and when we do it's oftentimes only for the first 20-30 seconds in the morning.",
							'We wanted to create a simple way to record your dreams and a tool for analysis for those who are interested in the topic.'
						],
						with: 'Galvanize'
					},
					{
						id: 'salvage',
						name: 'Salvage Native App',
						description:
							'Salvage is a food donation and compost app that provides users a resource for locations to drop off donations and a locator for businesses who accept small donations. This project uses Electron to package the underlying Angular app as a native desktop application available for download on OSX, Linux, and Windows. I undertook all aspects of this project including user research, experience and visual design, full stack development, and user testing.',
						how: [
							'Compost centers and food shelters can sign up to be collectors of food and compost material and are displayed on a map, letting donors know where and when they can drop off their donations.',
							'Restaurants and businesses that create food waste can sign up as donors to become donors of compost material. After joining, they have access to food shelters and compost centers who have signed up with information about location, times, and what they accept.',
							'Individual people can also sign up as donors if they are interested in finding the nearest location of a shelter or compost center.'
						],
						services: [
							'User Research',
							'Visual Design',
							'Full Stack Development'
						],
						tech_stack: [
							'Node',
							'Express',
							'Angular',
							'Electron',
							'Postgres'
						],
						users: [
							'Restaurant Owners',
							'Compost Centers',
							'Food Shelters',
							'Farmers',
							'Environmentally Focused Individuals'
						],
						website_url: 'https://github.com/IanSmith89/salvage',
						why: [
							'This project serves the purpose of connecting businesses and restaurants with food shelters and compost centers in areas of the country where centralized compost services are not widespread or available.',
							'After conducting user research with an initial goal of connecting more businesses with food shelters, I found that many restaurants that were not currently composting their food waste had to processes in place to do so, but lacked a method for getting the food waste to a compost center.',
							"This app also serves as a resource for individuals who regularly produce food waste or are interested in composting but aren't aware of where to compost. The simple signup process and map interface provides a familiar way to find and connect with local shelters or compost centers."
						],
						with: 'Galvanize'
					},
					{
						name: 'Cheba Hut Events',
						id: 'cheba-hut',
						client: 'Cheba Hut',
						description:
							"Cheba Hut is a toasted sandwich restaurant with locations across the Western and Midwestern United States. They target specifically counterculture types and regularly offer events and promotions throughout the year. As a designer at PHOCO, I worked with Cheba Hut to create posters and ads that showcased the company's mission and provided notice of upcoming events. My contributions included hand drawn illustration and typography, graphic design, and visual branding.",
						services: ['Graphic Design', 'Illustration'],
						website_url: 'https://www.chebahut.com',
						with: 'PHOCO'
					},
					{
						name: 'Gig Posters',
						id: 'posters',
						client: 'Downtown Artery',
						description:
							"Aside from design and development, I'm incredibly passionate about live music and promoting the arts. I love making concert posters and was lucky enough to work at a music venue in Fort Collins, CO where I produced a number of posters from a wide range of music genres. I like to draw inspiration from the psychadelic movement of the 60's and try to put a modern spin on it using any imagery or themes I can pull from listening to the music or reading about the artists.",
						services: ['Graphic Design', 'Illustration'],
						website_url: 'https://www.GigPosters.com',
						with: 'Freelance'
					},
					{
						id: 'topshelf',
						name: 'Topshelf Shirts',
						client: 'Topshelf Printers',
						description:
							'Topshelf Printers is a successful screen printing and embroidery shop based out of Northern Colorado. They work with companies and customers with jobs sizes ranging from small to multi-thousand industrial scale quantity orders. As a production artist, I created original shirt designs for various customers as well as the Topshelf brand.',
						services: ['Graphic Design', 'Illustration'],
						website_url: 'http://www.topshelfprinters.com',
						with: 'Topshelf Printers'
					}
				])
				.returning('*');
		});
};
