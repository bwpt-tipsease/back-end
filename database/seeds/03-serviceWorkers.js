
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('serviceWorkers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceWorkers').insert([
        // RESTAURANT
        {worker_name: 'Kynan Simmons', description: "Attendent at McDonald's", photo:'https://airyougotravels.com/wp-content/uploads/2016/06/2X2-PICTURE-CITY.jpg'},
        {worker_name: 'Alanna Conley', description: "Attendent at McDonald's", photo: 'https://visafoto.com/img/docs/zz_2x2_1mb.jpg'},
        {worker_name: 'Sara Boyer', description: "Attendent at McDonald's", photo: 'https://airyougotravels.com/wp-content/uploads/2016/08/2x2.jpg'},

        {worker_name: 'Emilis Villalobos', description: "Bartender at McDonald's", photo: 'https://ip.loszona.com/p/24fc'},
        {worker_name: 'Kevin Fletcher', description: "Bartender at McDonald's", photo: 'https://images.youracclaim.com/images/213cc873-62b8-45c4-964c-47af085374c2/2x2%2BType%2B3.jpg'},
        {worker_name: 'Maggie Dunn', description: "Bartender at McDonald's", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68yPmtH6CBiYiZw0DFLDc17UErfn6vtdXUw3YXH9Q4dcUZIqr'},

        {worker_name: 'Elly Cervantes', description: "Server at McDonald's", photo: 'https://nanceedreams.files.wordpress.com/2015/05/student-id-2x2-pic1.jpg'},
        {worker_name: 'Alanna Conley', description: "Server at McDonald's", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcueNuFxkRDwgHu9yOQnBrl2J_BasVDmAC3qRHq-Fr-zuvguB'},
        {worker_name: 'Josiah Hill', description: "Server at McDonald's", photo: 'https://i.pinimg.com/originals/31/af/88/31af882efb16e3f8f589ccf0afa2354a.jpg'},

        {worker_name: 'Kristy Dickerson', description: "Attendent at Burger King", photo: 'https://image.shutterstock.com/image-photo/close-young-handsome-charming-caucasian-260nw-753489874.jpg'},
        {worker_name: 'Naya Burton', description: "Attendent at Burger King", photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1045734418.jpg'},
        {worker_name: 'Cheryl Woodard', description: "Attendent at Burger King", photo:'https://previews.123rf.com/images/ryanking999/ryanking9991502/ryanking999150200164/37043282-beaut%C3%A9-concept-de-soins-de-la-peau-le-visage-belle-femme-sourire-avec-des-dents-de-la-sant%C3%A9-et-les-cheve.jpg'},

        {worker_name: 'Dulcie Mill', description: "Bartender at Burger King"},
        {worker_name: 'Meg Robbins', description: "Bartender at Burger King"},
        {worker_name: 'Benito Olson', description: "Bartender at Burger King"},

        {worker_name: 'Asia Luna', description: "Server at Burger King"},
        {worker_name: 'Vinnie Mackenzie', description: "Server at Burger King"},
        {worker_name: 'Bogdan Salter', description: "Server at Burger King"},

        {worker_name: 'Ellen Cruz', description: "Attendent at Taco Bell"},
        {worker_name: 'Lauryn Kerr', description: "Attendent at Taco Bell"},
        {worker_name: 'Josef Atkinson', description: "Attendent at Taco Bell"},

        {worker_name: 'Rihanna Delgado', description: "Bartender at Taco Bell"},
        {worker_name: 'Jacque Powers', description: "Bartender at Taco Bell"},
        {worker_name: 'Madeleine Beaumont', description: "Bartender at Taco Bell"},

        {worker_name: 'Nate Chandler', description: "Server at Taco Bell"},
        {worker_name: 'Balraj Heath', description: "Server at Taco Bell"},
        {worker_name: 'Jovan Costa', description: "Server at Taco Bell"},

        // CAR WASH
        {worker_name: 'Jarrod Allison', description: "Attendent at Vip Wash & Lube"},
        {worker_name: 'Cristina Jensen', description: "Attendent at Vip Wash & Lube"},
        {worker_name: 'Ayyub Hinton', description: "Attendent at Vip Wash & Lube"},

        {worker_name: 'Uzma Mullins', description: "Washing Team at Vip Wash & Lube"},
        {worker_name: 'Darcey Talbot', description: "Washing Team at Vip Wash & Lube"},
        {worker_name: 'Dennis Sumner', description: "Washing Team at Vip Wash & Lube"},

        {worker_name: 'Kaitlan Riley', description: "Cashier at Vip Wash & Lube"},
        {worker_name: 'Maddy Haynes', description: "Cashier at Vip Wash & Lube"},
        {worker_name: 'Hashir Wills', description: "Cashier at Vip Wash & Lube"},

        {worker_name: 'Alessandro Wolfe', description: "Attendent at Splash Car Wash"},
        {worker_name: 'Braydon Schofield', description: "Attendent at Splash Car Wash"},
        {worker_name: 'Renesmee Bowman', description: "Attendent at Splash Car Wash"},

        {worker_name: 'Freddy Petty', description: "Washing Team at Splash Car Wash"},
        {worker_name: 'Kester Sandoval', description: "Washing Team at Splash Car Wash"},
        {worker_name: 'Dotty Figueroa', description: "Washing Team at Splash Car Wash"},

        {worker_name: 'Jaime Leigh', description: "Cashier at Splash Car Wash"},
        {worker_name: 'Elsie-Mae Lindsey', description: "Cashier at Splash Car Wash"},
        {worker_name: 'Aanya Lucero', description: "Cashier at Splash Car Wash"},

        {worker_name: 'Waqar Craig', description: "Attendent at WOW Car Wash"},
        {worker_name: 'Sila Frazier', description: "Attendent at WOW Car Wash"},
        {worker_name: 'Sophie Knights', description: "Attendent at WOW Car Wash"},

        {worker_name: 'Evangeline Chaney', description: "Washing Team at WOW Car Wash"},
        {worker_name: 'Ann Bradshaw', description: "Washing Team at WOW Car Wash"},
        {worker_name: 'Jaylen Stubbs', description: "Washing Team at WOW Car Wash"},

        {worker_name: 'Allana Salt', description: "Cashier at WOW Car Wash"},
        {worker_name: 'Dominick Glass', description: "Cashier at WOW Car Wash"},
        {worker_name: 'Zaydan Maguire', description: "Cashier at WOW Car Wash"},

        // SALON
        {worker_name: 'Ewen Hogan', description: "Attendent at Princes Nail"},
        {worker_name: 'Vivian Corona', description: "Attendent at Princes Nail"},
        {worker_name: 'Martine Hurst', description: "Attendent at Princes Nail"},

        {worker_name: 'Ebrahim Dodd', description: "Hair Dresser at Princes Nail"},
        {worker_name: 'Damien Mair', description: "Hair Dresser at Princes Nail"},
        {worker_name: 'Sadiyah Moody', description: "Hair Dresser at Princes Nail"},

        {worker_name: 'Rafe Huff', description: "Nails at Princes Nail"},
        {worker_name: 'Michaela Hayward', description: "Nails at Princes Nail"},
        {worker_name: 'Evalyn Shaw', description: "Nails at Princes Nail"},

        {worker_name: 'Aimee Hanson', description: "Attendent at Beauty Salon"},
        {worker_name: 'Eileen Callaghan', description: "Attendent at Beauty Salon"},
        {worker_name: 'Faye Peterson', description: "Attendent at Beauty Salon"},

        {worker_name: 'Marta Logan', description: "Hair Dresser at Beauty Salon"},
        {worker_name: 'Kristin Kerr', description: "Hair Dresser at Beauty Salon"},
        {worker_name: 'Clayton Bravo', description: "Hair Dresser at Beauty Salon"},

        {worker_name: 'Magnus Russell', description: "Nails at Beauty Salon"},
        {worker_name: 'Huey Fields', description: "Nails at Beauty Salon"},
        {worker_name: 'Samiha Hurst', description: "Nails at Beauty Salon"},

        {worker_name: 'Eli Wilkinson', description: "Attendent at Mercedes Beauty Salon"},
        {worker_name: 'Adeeb Bull', description: "Attendent at Mercedes Beauty Salon"},
        {worker_name: 'Delia Rocha', description: "Attendent at Mercedes Beauty Salon"},

        {worker_name: 'Mathew Hull', description: "Hair Dresser at Mercedes Beauty Salon"},
        {worker_name: 'Tyrique Cousins', description: "Hair Dresser at Mercedes Beauty Salon"},
        {worker_name: 'Marina Barrett', description: "Hair Dresser at Mercedes Beauty Salon"},
        
        {worker_name: 'Kimberly Mills', description: "Nails at Mercedes Beauty Salon"},
        {worker_name: 'Taylan Hastings', description: "Nails at Mercedes Beauty Salon"},
        {worker_name: 'Francis Bauer', description: "Nails at Mercedes Beauty Salon"},

        // AUTOMOBILE REPAIR SHOP
        {worker_name: 'Cathal Finney', description: 'Attendent at Automotive Workshop'},
        {worker_name: 'Hattie Lord', description: 'Attendent at Automotive Workshop'},
        {worker_name: 'Antoine Li', description: 'Attendent at Automotive Workshop'},

        {worker_name: 'Jonas Talley', description: 'Mechanic at Automotive Workshop'},
        {worker_name: 'Nial Cuevas', description: 'Mechanic at Automotive Workshop'},
        {worker_name: 'Martyn Buckley', description: 'Mechanic at Automotive Workshop'},

        {worker_name: 'Martyn Buckley', description: 'Mechanic at Automotive Workshop'},

        {worker_name: 'Ariah Ferreira', description: 'Attendent at B K Auto Body Workshop'},
        {worker_name: 'Cathal Finney', description: 'Attendent at B K Auto Body Workshop'},
        {worker_name: 'Sophie Hooper', description: 'Attendent at B K Auto Body Workshop'},

        {worker_name: 'Gloria Morales', description: 'Mechanic at B K Auto Body Workshop'},
        {worker_name: 'Nolan Cannon', description: 'Mechanic at B K Auto Body Workshop'},
        {worker_name: 'Antoine Li', description: 'Mechanic at B K Auto Body Workshop'},

        {worker_name: 'Cathal Finney', description: 'Attendent at Yunior Auto Repair'},
        {worker_name: 'Afsana Mcneil', description: 'Attendent at Yunior Auto Repair'},
        {worker_name: 'Elodie Draper', description: 'Attendent at Yunior Auto Repair'},

        {worker_name: 'Abubakr Porter', description: 'Mechanic at Yunior Auto Repair'},
        {worker_name: 'Miller Luna', description: 'Mechanic at Yunior Auto Repair'},
        {worker_name: 'Kush Armitage', description: 'Mechanic at Yunior Auto Repair'},
      ]);
    });
};
