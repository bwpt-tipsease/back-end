
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('places').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {place_name: 'Restaurant'},
        {place_name: 'Car Wash'},
        {place_name: 'Salon'}
      ]);
    });
};
