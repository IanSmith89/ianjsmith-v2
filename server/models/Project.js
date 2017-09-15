const { bookshelf } = require('../../orm');

const Project = bookshelf.Model.extend({
    tableName: 'projects',
    hasTimestamps: true
});

module.exports = Project;
