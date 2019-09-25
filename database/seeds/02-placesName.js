
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('PlacesName').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('PlacesName').insert([
        // RESTAURANT
        {place_name: "McDonald's"},
        {place_name: "Burguer King"},
        {place_name: "Taco Bell"},

        // CAR WASH
        {place_name: "Vip Wash & Lube"},
        {place_name: "Splash Car Wash"},
        {place_name: "WOW Car Wash"},

        // SALON
        {place_name: "Princes Nail"},
        {place_name: "Beauty Salon"},
        {place_name: "Mercedes Beauty Salon"},

        // AUTOMOBILE REPAIR SHOP
        {place_name: 'Automotive Workshop'},
        {place_name: 'B K Auto Body Workshop'},
        {place_name: 'Yunior Auto Repair'}
      ]);
    });
};
