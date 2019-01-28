'use strict';

exports.up = function(knex) {
	return knex.schema.createTable('projects', table => {
		table.string('id').notNullable();
		table.string('name').notNullable();
		// table.string('client');
		// table.text('description', 'mediumtext').notNullable();
		table.specificType('design_process', 'text[]');
		// table.specificType('how', 'text[]');
		table.specificType('outcome_and_reflection', 'text[]');
		table.string('problem');
		// table.specificType('services', 'text[]').notNullable();
		table.string('solution');
		// table.specificType('takeaways', 'text[]');
		table.string('team_and_role');
		// table.specificType('tech_stack', 'text[]');
		// table.specificType('users', 'text[]');
		// table.string('website_url');
		// table.specificType('why', 'text[]');
		// table.string('with').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('projects');
};
