exports.seed = function(knex) {
    return knex('projects')
        .del()
        .then(() => {
            return knex('projects')
                .insert([
                    {
                        id: 'paragon',
                        client: 'Paragon Real Estate Website',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Frontend Development, Animations, Search Engine Optimization',
                        name: 'Paragon Real Estate',
                        nextProjectLink: '/dreamstream',
                        short_services: 'Frontend Development',
                        website_url: 'https://www.paragon-re.com',
                        with: 'High Seas Consulting, Inc.'
                    },
                    {
                        id: 'dreamstream',
                        client: 'Personal Project',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Frontend Development, Visual Design, Project Management',
                        name: 'DreamStream Mobile App',
                        nextProjectLink: '/salvage',
                        short_services: 'Frontend Development, Visual Design',
                        website_url: 'https://github.com/IanSmith89/dreamStream',
                        with: 'Galvanize'
                    },
                    {
                        id: 'salvage',
                        client: 'Personal Project',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'UX, Fullstack Development, User Research, Visual Design',
                        name: 'Salvage Native App',
                        nextProjectLink: '/phoco',
                        short_services: 'UX, Fullstack Development',
                        website_url: 'https://github.com/IanSmith89/salvage',
                        with: 'Galvanize'
                    },
                    {
                        id: 'phoco',
                        client: 'Downtown Artery',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Graphic Design, Branding, Illustration',
                        name: 'PHOCO Logos',
                        nextProjectLink: '/cheba-hut',
                        short_services: 'Graphic Design, Branding',
                        website_url: 'http://pho-co.com',
                        with: 'PHOCO'
                    },
                    {
                        id: 'cheba-hut',
                        client: 'Cheba Hut',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Graphic Design, Illustration',
                        name: 'Cheba Hut Event Posters',
                        nextProjectLink: '/downtown-artery',
                        short_services: 'Graphic Design, Illustration',
                        website_url: 'https://chebahut.com',
                        with: 'PHOCO'
                    },
                    {
                        id: 'downtown-artery',
                        client: 'Downtown Artery',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Graphic Design, Illustration',
                        name: 'Downtown Artery Concert Posters',
                        nextProjectLink: '/topshelf',
                        short_services: 'Graphic Design, Illustration',
                        website_url: 'https://www.downtownartery.com',
                        with: 'Downtown Artery'
                    },
                    {
                        id: 'topshelf',
                        client: 'Topshelf Printers',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Screenprinting, Graphic Design, Illustration',
                        name: 'Topshelf Shirts',
                        nextProjectLink: '/paragon',
                        short_services: 'Screenprinting, Graphic Design',
                        website_url: 'http://www.topshelfprinters.com/',
                        with: 'Topshelf Printers'
                    }
                ])
                .returning('*');
        });
};
