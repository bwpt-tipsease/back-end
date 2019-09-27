
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('PlacesName',  tbl => {
    tbl.increments();
    tbl.string('place_name', 128).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('PlacesName')
};
