
exports.up = function(knex) {
    return knex.schema.createTable('serviceWorkers',  tbl => {
        tbl.increments();
        tbl.string('worker_name', 128).notNullable();
        tbl.string('photo');
        tbl.string('description');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('serviceWorkers')
};
