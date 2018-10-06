'use strict';

exports.up = function(knex) {
	return knex.schema.createTable('projects', table => {
		table.string('id').notNullable();
		table.string('name').notNullable();
		table.string('client');
		table.text('description', 'mediumtext').notNullable();
		table.specificType('how', 'text[]');
		table.specificType('services', 'text[]').notNullable();
		table.specificType('takeaways', 'text[]');
		table.specificType('tech_stack', 'text[]');
		table.specificType('users', 'text[]');
		table.string('website_url');
		table.specificType('why', 'text[]');
		table.string('with').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('projects');
};
