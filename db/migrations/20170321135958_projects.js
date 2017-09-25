'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.string('id').notNullable();
        table.string('client').notNullable();
        table.string('description').notNullable();
        table.string('long_services').notNullable();
        table.string('name').notNullable();
        table.string('nextProjectLink').notNullable();
        table.string('short_services').notNullable();
        table.string('website_url');
        table.string('with').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
