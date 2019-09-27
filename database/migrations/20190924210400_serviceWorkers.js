
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('serviceWorkers',  tbl => {
    tbl.increments();
    tbl.string('worker_name', 128).notNullable();
    tbl.string('photo');
    tbl.string('description');
    tbl.date('start_date').notNullable();
    tbl.string('tagline');
    tbl.integer('balance').unsigned().defaultTo(0)
    tbl.integer('user_id').references('id').inTable('users').defaultTo(null).onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('serviceWorkers')
};
