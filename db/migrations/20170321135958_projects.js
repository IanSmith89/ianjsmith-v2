'use strict';

exports.up = function(knex) {
	return knex.schema.createTable('projects', table => {
		table.string('id').notNullable();
		table.string('name').notNullable();
		// table.string('client');
		table.text('description', 'mediumtext');
		table.specificType('design_process', 'text[]');
		// table.specificType('how', 'text[]');
		table.specificType('outcome_and_reflection', 'text[]');
		table.text('problem', 'mediumtext');
		// table.specificType('services', 'text[]').notNullable();
		table.text('solution', 'mediumtext');
		// table.specificType('takeaways', 'text[]');
		table.text('team_and_role', 'mediumtext');
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
