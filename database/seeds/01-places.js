
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('places').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {place: 'Restaurant'},
        {place: 'Car Wash'},
        {place: 'Salon'}
      ]);
    });
};
