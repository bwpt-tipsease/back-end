

exports.up = function(knex) {
  return knex.schema.createTable('places', tbl => {
    tbl.increments();
    tbl.string('place', 128).notNullable();
  })

  .createTable('PlacesName',  tbl => {
      tbl.increments();
      tbl.string('place_name', 128).notNullable();
  })

  .createTable('serviceWorkers',  tbl => {
    tbl.increments();
    tbl.string('worker_name', 128).notNullable();
    tbl.string('description');
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('serviceWorkers')
    .dropTableIfExists('PlacesName')
    .dropTableIfExists('places')
};