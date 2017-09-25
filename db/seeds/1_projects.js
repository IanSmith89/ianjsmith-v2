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
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Frontend Development',
                        name: 'Paragon Real Estate',
                        short_services: 'Frontend Development',
                        website_url: 'https://www.paragon-re.com',
                        with: 'High Seas Consulting, Inc.'
                    },
                    {
                        id: 'dreamstream',
                        client: 'Personal Project',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Frontend Development',
                        name: 'DreamStream',
                        short_services: 'Frontend Development',
                        website_url: '',
                        with: 'Galvanize'
                    },
                    {
                        id: 'salvage',
                        client: 'Personal Project',
                        description:
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
                        long_services: 'Frontend Development',
                        name: 'Salvage',
                        short_services: 'Frontend Development',
                        website_url: '',
                        with: 'Galvanize'
                    }
                ])
                .returning('*');
        });
};
