
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('PlacesName').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('PlacesName').insert([
        {place_name: "McDonald's"},
        {place_name: "Burguer King"},
        {place_name: "Taco Bell"},
        {place_name: "Vip Wash & Lube"},
        {place_name: "Splash Car Wash"},
        {place_name: "WOW Car Wash"},
        {place_name: "Princes Nail"},
        {place_name: "Beauty Salon"},
        {place_name: "Mercedes Beauty Salon"}
      ]);
    });
};
