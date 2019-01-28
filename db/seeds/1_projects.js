exports.seed = function(knex) {
	return knex('projects')
		.del()
		.then(() => {
			return knex('projects')
				.insert([
					{
						id: 'mightyvet',
						name: 'MightyVet Nonprofit Website',
						description: '',
						design_process: [
							'We began with a heuristic review and surveys to understand how current users felt about the site. The heuristic review highlighted areas of improvement and positive aspects such as the strength of the existing content and a starting point for the visual identity. Information gathered from our user surveys reinforced the need for the features MightyVet asked for. Users needed online mentorship opportunities and options for continuing education credits. We also completed competitive analyses to identify how similar nonprofits presented their goals and composed their sites. From there we were able to start implementing new ideas.',
							'Before sketching and prototyping, we proposed an updated website structure with a sitemap diagram I created. This guided our decisions for what to focus on for sketches and wireframes. It also informed us about the need for a user profile and dashboard. Without one, managing the functionality they wanted would not have been possible. Next, we all sketched out our ideas and moved on to creating wireframes. As we explored different compositions with our wireframes, we worked together to arrive at our first digital prototype.',
							'The collaboration on our wireframes allowed for a smooth transition to higher fidelity mockups. Since we identified visual design strengths in our heuristic review, we borrowed some of the existing color and font choices to create a mood board and style guide. Using those for inspiration, we produced our next prototype iteration. Again we worked together to investigate different visual treatments and ideas. Using feedback from my teammates, I created a dynamic search and filter component with consistent functionality in differing contexts. After critiquing each other’s work and sharing interface solutions, we ended up with a final prototype. Our high-fidelity mockups also served as a visual framework for future pages and interface components.'
						],
						outcome_and_reflection: [
							'This project was well-received after our final presentation to MightyVet. They are currently building their new site based on our designs. Future users will have the ability to find or provide mentorship and complete continuing education credits through a single online source. MightyVet now has the means to enact their vision of expanding the community to support those in the veterinary industry.',
							'As a result of this experience, I learned a lot about communicating with a client and my teammates. One challenge we faced early in the project was gaining access to reliable users to survey. Though we gathered useful information from those we could find, next time I wouldn’t wait as long for the client to suggest users for research. If we could have done something differently, we would have been more proactive in searching for prospective users.'
						],
						problem:
							'A vital issue in the veterinary industry is depression and suicide. MightyVet is a nonprofit focused on providing resources and spreading awareness. They are passionate about helping vets and those around them navigate the complex matters they deal with on a daily basis. A single page website stated their mission, but they had the vision to create an online hub for community and mentorship. They needed guidance on improving the usability of their site and were open to a design overhaul.',
						solution:
							'By the end of the ten-week project, we created a brand new web experience for them. Our designs included an updated webinar system for completing continuing education credits and new features for mentorship and scheduling office hours. We designed a profile and dashboard that serves as a central source of information and allows MightyVet to manage the different user roles.',
						team_and_role:
							'Working with two other students in my SVC capstone class, we completed user research, prototyping, and a visual design refresh. I focused on information architecture and project management, and we collaborated on research, interaction design, and prototyping. My primary responsibilities included meeting coordination and client communication and producing sitemap diagrams, updated search and filter interfaces, and visual design assets.'
					},
					{
						id: 'wasp',
						name: 'WA State Parks Campsite Reservation',
						description: '',
						design_process: [
							'To begin my research I targeted users who identified as outdoor enthusiasts. All the participants reported similar frustrations and had difficulty using the reservation service. My hypothesis was correct. The navigation was confusing. The undertaking of finding a specific campground or state park was almost unusable. Successfully reserving a campsite was unintuitive and required expert knowledge of the site. I compiled the findings from observing participants attempt these essential tasks and incorporated their feedback into my first prototype.',
							'With paper cutouts and a pen, I created an initial prototype of new screens and workflows. I used these crude mockups to complete another round of usability studies. My study participants confirmed what worked well and what I could revise before I moved to the computer for wireframing. Again I took their comments into consideration while creating the next iteration of my designs.',
							'Following the paper prototype, my wireframes built upon the feedback from my users. During this phase, I shifted my attention to the task of choosing specific dates to go camping. I experimented with different layouts and interface elements. Inspired by existing reservation patterns, I constructed new components for selecting dates. Once again I tested my designs on users to confirm my choices before moving forward.',
							'After completing wireframes and user testing I proceeded to higher fidelity mockups. With most of the structure of my pages complete I established a new visual aesthetic to apply to my designs. Throughout testing the research participants requested more up-to-date imagery and color choices. Using this information I picked colors and fonts that built upon the existing Washington State Parks branding. The final designs increased the usage of photography to bolster the appeal of individual campground pages. According to users this new visual presentation and reservation workflow modernized the feel of the service.'
						],
						outcome_and_reflection: [
							"I presented my findings and prototypes to the Washington State Parks Foundation at the end of this project. Though they didn't move forward with my designs because of contractual reasons, my effort and recommendations impressed them. They praised my designs and acknowledged the need for online campsite reservation improvements.",
							'This project was a great lesson in slowing down and trusting in iteration. Before this experience, I tended to jump into the visual design too early. This often caused me to get distracted with visuals before fleshing out the proper workflows. I enjoyed working through many iterations to arrive at a more thorough solution. In the end, the final designs were stronger because I focused on the process.'
						],
						problem:
							'The online reservation system for campgrounds in Washington State Parks was frustrating to use. Navigation was a challenge and the interactions were haphazard. The process annoyed me while trying to find and reserve a campsite, and I wanted to see if others felt the same. I saw areas of opportunity to improve the interaction workflow and rejuvenate the visual design of the site.',
						solution:
							'After four weeks of design and iteration, I addressed the issues found in usability studies to create a replacement for their campsite reservation system. I improved the interactions involving searching for and selecting a campsite to reserve. By introducing new interface elements to modernize the experience I was also able to refresh the visual design and aesthetic. The end result enhanced the experience with a few minor updates to the interactions and site structure.',
						team_and_role:
							'Working alone as part of my SVC prototyping class I conducted user research and created prototypes at varying levels of fidelity. I began this project by conducting usability studies to inform my prototyping process. My initial prototype consisted of sketches and paper. Next, I completed a round of wireframing and concluded with a production ready prototype. While working at High Seas I also presented this case study to show my design process to prospective clients.'
					},
					{
						id: 'astarte',
						name: 'Astarte Inventory Management',
						description:
							'Ensuring accuracy and speed to improve the supervision of thousands of vials for a biotech lab.',
						design_process: [
							'I began this project by digesting the research my colleague had completed. By familiarizing with the context I was able to understand where to go next. Since the company lacked organization of their information I created a sitemap to guide the process moving forward. We identified the tasks the company completed on a daily basis to inform our decisions for the information architecture. This allowed our team to decide how to structure the system moving forward.',
							'Next, I created workflow diagrams to map out how the tasks coincided with each other. By focusing on the essential tasks of the company we established workflow patterns to put in place for similar tasks. The most common tasks were generating records for inventory items and updating their location within their lab. Other tasks included tracking online orders, donors, and product details. After defining all common tasks, we had a good idea of the functionality and relationships of the entire system. Using this knowledge we moved on to wireframes and visual mockups.',
							"Knowing the location of inventory items in the lab was essential to their staff. Since updating product status and location was a vital repeated task, we based the interface on the physical location of items in their lab. Using the design of their freezers as inspiration we toyed around with ideas for how to represent the inventory on screen. After a few iterations, we decided on a color-coded system to show the product groupings and location. That way the staff could view their inventory on screen in the same orientation within the actual freezers. The reaction to our ideas was positive from the staff. They could find and update a product's location and trust what the interface displayed.",
							'With the essential tasks considered and defined we moved forward with visual design. I decided to apply a flat aesthetic with a color palette that fit the brand and e-commerce site. Familiar interface components allowed the staff to migrate away from spreadsheets and paper notes without new patterns overwhelming them.'
						],
						outcome_and_reflection: [
							'After delivering the application to Astarte they were very pleased with the results. They no longer had to rely on paper and spreadsheets without a structure to their inventory data. The coordination with the team in India allowed for smooth integration between our system and the online store. The owner and rest of the staff easily adapted to the new system and began using it right away.',
							'This project was a good lesson in how to become an expert in a new domain. Biotechnology was an industry I was unfamiliar with before this project. I learned a lot by taking the time to understand the intricacies of how Astarte created and maintained their products. This demonstrated the importance of understanding context and was a great way to inform my design decisions. It strengthened my ability to use design thinking to solve challenging problems.'
						],
						problem:
							'A biotech company called Astarte Biologics needed a new inventory management system. Their previous methods for maintaining product supply relied on handwritten notes and excel spreadsheets. They also lacked consistency in how to document and track locations of their products in various freezers in their lab. The owner wanted a reliable digital solution. Trusting product location and availability was essential to the company and their clients. Health regulations were also an important concern, so accuracy between inventory data and the e-commerce website was imperative.',
						solution:
							'At the end of the six-month project, we delivered the inventory management system Astarte required. Our work improved their process and they were able to abandon their old ways of pen and paper. The interface I designed allowed them to track and locate their products with ease. We also devised meaningful terminology for them to unify how to organize their product offerings.',
						team_and_role:
							'I worked as a designer and developer with a small team of three other developers at High Seas. We collaborated with an external team in India who built the updated e-commerce site. My areas of focus were information architecture, interaction design, and visual design. One of my teammates completed interviews and user research before I started on the project. I also contributed as a full-stack developer to build the application.'
					},
					{
						id: 'ecommerce',
						name: 'Modern E-Commerce Checkout',
						description: '',
						design_process: [
							"We began the project with competitive analyses of other e-commerce websites. I focused on the essential steps during checkout and how to design an unobtrusive cart. The client's products and packaging served as inspiration for my teammate's visual explorations. I analyzed modern fashion and sports e-commerce websites to establish current trends.",
							'Aside from our competitive analyses, a great resource I found was an article about best practices for the e-commerce checkout flow. A lot of e-commerce sites use a simple three or four step process. When the customer is ready to check out, ask them for their address and shipping method first. Then move on to payment information. Finish with a review of the information to confirm and place the order. Before starting our design work I also looked into patterns for shopping carts that resulted in higher conversion rates.',
							"We began wireframing with the goal of creating a subtle shopping cart interface. To achieve this goal we designed the cart to slide out from the right side of the user's screen. That way it wouldn't distract from the page content when viewing cart items. Since we didn't have the budget for conventional testing I tested our designs on other colleagues for feedback.",
							'We presented our progress to the client and moved on to their request for an instant checkout option. To address this we added a "Buy Now" button below images on the product list and on their detail pages. Since most of the products sell individually, this gave users an easy way to proceed straight to checkout without having to add to the cart.',
							"After another round of feedback from the client, we finalized the checkout experience. The visual elements my teammate designed were extraordinary, but I can't present them here because of an NDA. With that said, our work impressed the client and they approved our designs after a fast four weeks."
						],
						outcome_and_reflection: [
							'This project was a great lesson in time management and attention to detail. I loved identifying micro-interactions that would establish trust for online customers. The e-commerce store we designed is currently still under construction, but the client is very happy with the work. They look forward to launching their website soon.',
							"It was fun and educational to work under an atypical deadline and budget for our team. The amount I learned about the checkout process is something I'll hold onto for the future. If I could have done something differently I would have completed studies with actual users. The feedback I gathered from my peers was still useful but wasn't ideal for proper user tests."
						],
						problem:
							'A new brand was kicking off their online store and wanted a modern e-commerce experience. Time and budget were issues, and the client only had package designs for inspiration. They requested that the online shopping experience reflect the state-of-the-art qualities of their products. Competing with other online retailers upon launch was a must. They also wanted quick shop functionality that offered a fast and simple checkout.',
						solution:
							'After the allotted four-week deadline, we delivered the modern e-commerce experience they expected. Our designs evoked the qualities of their cutting edge products and felt contemporary. An unobtrusive cart interface with modern quick-shop options and a logical checkout process combined well with the slick visual design. The cohesive experience was a great starting point for launching their business.',
						team_and_role:
							"Working with another designer and a developer at High Seas, my responsibilities included research, interaction design, and prototyping. The main focus of my research and interaction work was on the checkout process. I also collaborated on visual design explorations. Since the budget didn't allow for usability studies, we worked together with the client and my colleagues to test design iterations. I met with the developer throughout the process to ensure a smooth handoff of our designs."
					}
				])
				.returning('*');
		});
};
