
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('PlacesName').del()
    .then(function () {
      // Inserts seed entries
      return knex('PlacesName').insert([
        {place_name: "McDonald's"},
        {place_name: "Burguer King"},
        {place_name: "Taco Bell"}
      ]);
    });
};
