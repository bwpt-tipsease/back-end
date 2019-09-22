
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('serviceWorkers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceWorkers').insert([
        {worker_name: 'Kynan Simmons', description: "Attendent at McDonald's"},
        {worker_name: 'Emilis Villalobos', description: "Bartender at McDonald's"},
        {worker_name: 'Elly Cervantes', description: "Server at McDonald's"},
        {worker_name: 'Kristy Dickerson', description: "Attendent at Burger King"},
        {worker_name: 'Dulcie Mill', description: "Bartender at Burger King"},
        {worker_name: 'Asia Luna', description: "Server at Burger King"},
        {worker_name: 'Ellen Cruz', description: "Attendent at Taco Bell"},
        {worker_name: 'Rihanna Delgado', description: "Bartender at Taco Bell"},
        {worker_name: 'Nate Chandler', description: "Server at Taco Bell"},
        {worker_name: 'Jarrod Allison', description: "Attendent at Vip Wash & Lube"},
        {worker_name: 'Dennis Sumner', description: "Washing Team at Vip Wash & Lube"},
        {worker_name: 'Maddy Haynes', description: "Cashier at Vip Wash & Lube"},
        {worker_name: 'Braydon Schofield', description: "Attendent at Splash Car Wash"},
        {worker_name: 'Freddy Petty', description: "Washing Team at Splash Car Wash"},
        {worker_name: 'Jaime Leigh', description: "Cashier at Splash Car Wash"},
        {worker_name: 'Sophie Knights', description: "Attendent at WOW Car Wash"},
        {worker_name: 'Evangeline Chaney', description: "Washing Team at WOW Car Wash"},
        {worker_name: 'Allana Salt', description: "Cashier at WOW Car Wash"},
        {worker_name: 'Ewen Hogan', description: "Attendent at Princes Nail"},
        {worker_name: 'Ebrahim Dodd', description: "Hair Dresser at Princes Nail"},
        {worker_name: 'Rafe Huff', description: "Nails at Princes Nail"},
        {worker_name: 'Aimee Hanson', description: "Attendent at Beauty Salon"},
        {worker_name: 'Marta Logan', description: "Hair Dresser at Beauty Salon"},
        {worker_name: 'Magnus Russell', description: "Nails at Beauty Salon"},
        {worker_name: 'Eli Wilkinson', description: "Attendent at Mercedes Beauty Salon"},
        {worker_name: 'Mathew Hull', description: "Hair Dresser at Mercedes Beauty Salon"},
        {worker_name: 'Kimberly Mills', description: "Nails at Mercedes Beauty Salon"}
      ]);
    });
};
