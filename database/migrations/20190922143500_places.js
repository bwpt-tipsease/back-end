
exports.up = function(knex) {
  return knex.schema.createTable('places', tbl => {
    tbl.increments();
    tbl.string('place_name', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('places')
};
