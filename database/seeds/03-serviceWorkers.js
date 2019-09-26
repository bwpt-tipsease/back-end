
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('serviceWorkers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceWorkers').insert([
        // RESTAURANT
        {worker_name: 'Kynan Simmons', description: "Attendent at McDonald's", start_date: '2000-09-30', tagline: 'Attendant has a better idea.', photo:'https://airyougotravels.com/wp-content/uploads/2016/06/2X2-PICTURE-CITY.jpg'},
        {worker_name: 'Alanna Conley', description: "Attendent at McDonald's", start_date: '2018-04-07', tagline: 'Attendant is full of joy!', photo: 'https://visafoto.com/img/docs/zz_2x2_1mb.jpg'},
        {worker_name: 'Sara Boyer', description: "Attendent at McDonald's", start_date: '2018-04-07' , tagline: 'Attendant, optimized for speed.', photo: 'https://airyougotravels.com/wp-content/uploads/2016/08/2x2.jpg'},

        {worker_name: 'Emilis Villalobos', description: "Bartender at McDonald's", start_date: '2010-04-12', tagline: 'Welcome to Bartender world!', photo: 'http://mariestella41.com/wp-content/uploads/DSC_3913-2x2-300x300.jpg'},
        {worker_name: 'Kevin Fletcher', description: "Bartender at McDonald's", start_date: '2017-07-07', tagline: 'Let the Bartender work for you.', photo: 'https://images.youracclaim.com/images/213cc873-62b8-45c4-964c-47af085374c2/2x2%2BType%2B3.jpg'},
        {worker_name: 'Maggie Dunn', description: "Bartender at McDonald's", start_date: '2016-10-07',  tagline: 'Bartender, Be what’s next.', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68yPmtH6CBiYiZw0DFLDc17UErfn6vtdXUw3YXH9Q4dcUZIqr'},

        {worker_name: 'Elly Cervantes', description: "Server at McDonald's", start_date: '2009-11-11',  tagline: 'Server, the gift of nature.', photo: 'https://nanceedreams.files.wordpress.com/2015/05/student-id-2x2-pic1.jpg'},
        {worker_name: 'Alanna Conley', description: "Server at McDonald's", start_date: '2006-12-08', tagline: 'Server - Random is the new order.', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcueNuFxkRDwgHu9yOQnBrl2J_BasVDmAC3qRHq-Fr-zuvguB'},
        {worker_name: 'Josiah Hill', description: "Server at McDonald's", start_date: '2016-05-06', tagline: 'A million holidays. One Server.', photo: 'https://i.pinimg.com/originals/31/af/88/31af882efb16e3f8f589ccf0afa2354a.jpg'},

        {worker_name: 'Kristy Dickerson', description: "Attendent at Burger King", start_date: '2001-09-11' , tagline: 'The pause that refreshes. Attendant!', photo: 'https://image.shutterstock.com/image-photo/close-young-handsome-charming-caucasian-260nw-753489874.jpg'},
        {worker_name: 'Naya Burton', description: "Attendent at Burger King", start_date: '2013-08-05' , tagline: 'Have a break, Have a Attendant.', photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1045734418.jpg'},
        {worker_name: 'Cheryl Woodard', description: "Attendent at Burger King", start_date: '2018-07-04' , tagline: 'Attendant, The future is here.', photo:'https://previews.123rf.com/images/ryanking999/ryanking9991502/ryanking999150200164/37043282-beaut%C3%A9-concept-de-soins-de-la-peau-le-visage-belle-femme-sourire-avec-des-dents-de-la-sant%C3%A9-et-les-cheve.jpg'},

        {worker_name: 'Dulcie Mill', description: "Bartender at Burger King", start_date: '2016-06-05', tagline: 'Bartender is an investment in good health.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxmj0TkQnfL27XENtA_Vdin5BnThrBlkLuRRtDlTSP4dhWO5o2Q"},
        {worker_name: 'Meg Robbins', description: "Bartender at Burger King", start_date: '2001-05-06', tagline: 'Only Bartender has the Answer.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrT1dPEe9qvWaL5933INXkiE0tKMZxVO0zsG2HBx-hSK8PXJM"},
        {worker_name: 'Benito Olson', description: "Bartender at Burger King", start_date: '2016-04-07', tagline: 'What can Bartender do for you ?',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdr2gd0e4LV36gVZUDEx710Sb7RyZMNTWYeXL46Gwuac0Spb9t"},

        {worker_name: 'Asia Luna', description: "Server at Burger King", start_date: '2005-09-30', tagline: 'Everything works better with Server.', photo: "http://www.core-education.co.uk/wp-content/uploads/2019/05/Saiqa-2x2-300x300.jpg"},
        {worker_name: 'Vinnie Mackenzie', description: "Server at Burger King", start_date: '1999-04-12', tagline: 'Server is organic.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ebmTmmyB1Pq9CTxjz4mPcMNGV2l9RrcVf-7RIMzGD8GrAW3A"},
        {worker_name: 'Bogdan Salter', description: "Server at Burger King", start_date: '2005-09-11', tagline: 'Server, Simply Awesome!', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiF5xeSjiQh1WDABNb9aymus86FBX-Rw6yBVoYZzJI3cqCCtlc"},

        {worker_name: 'Ellen Cruz', description: "Attendent at Taco Bell", start_date: '2015-09-30', tagline: 'Attendant, Make the most of now.', photo: "http://media.philstar.com/images/the-philippine-star/entertainment/20170804/NADINE%20COVER.jpg"},
        {worker_name: 'Lauryn Kerr', description: "Attendent at Taco Bell", start_date: '2016-09-07', tagline: 'A million holidays. One Attendant.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7xracvTim9MmRzbwPov8s0vM4xMA0rifsfDcs0vNGsj6hwNZ"},
        {worker_name: 'Josef Atkinson', description: "Attendent at Taco Bell", start_date: '2013-09-11', tagline: 'Attendant for everything.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrWyf-mYJylpsoSoOFVmhPMnH2B4ScZV4FUkLdI0cWrl-BcX4"},

        {worker_name: 'Rihanna Delgado', description: "Bartender at Taco Bell", start_date: '2013-09-21', tagline: 'I think, therefore I Bartender.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHb6sl0QagX2m4EkZlCfTbm_xUc1PFX1vIXxkQQoqFlPfMvVco"},
        {worker_name: 'Jacque Powers', description: "Bartender at Taco Bell", start_date: '2001-09-22', tagline: 'Were serious about Bartender.',photo: "https://www.travelvisapro.com/wp-content/uploads/2017/10/admin-ajax-1-15-1.jpg"},
        {worker_name: 'Madeleine Beaumont', description: "Bartender at Taco Bell", start_date: '2005-09-22', tagline: 'Bartender - Connecting People.', photo: "https://previews.123rf.com/images/kadettmann/kadettmann1601/kadettmann160100020/50645087-passport-photo-of-a-cool-blond-businesswoman-with-blue-eyes-and-blazer.jpg"},

        {worker_name: 'Nate Chandler', description: "Server at Taco Bell", start_date: '2015-10-30', tagline: 'Server, A leap forward a better future.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKfmvUU4Wjm2e2N-YP1e7OaogPJmHpSIBs_igGQbOwi4Wuzft"},
        {worker_name: 'Balraj Heath', description: "Server at Taco Bell", start_date: '2018-07-21', tagline: 'who hates Server ?',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIf4-aVoRGc-3_SSFAsvBXZZ3xdN4KKQvGZzc8PNCDmCpPkASM"},
        {worker_name: 'Jovan Costa', description: "Server at Taco Bell", start_date: '2005-09-12', tagline: 'If anyone can, Server can.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri0SZ5V4g5dFmabyFhbJOLENpKdnSAdwLjS-U4aHuBeHymSkk"},

        // CAR WASH
        {worker_name: 'Jarrod Allison', description: "Attendent at Vip Wash & Lube", start_date: '2001-11-12', tagline: 'Attendant, works because its simple.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdw5KXyvu_Tc4BGEM1LUFrQhn5XZEDIjKUFx_9eTS-dVrCHrC"},
        {worker_name: 'Cristina Jensen', description: "Attendent at Vip Wash & Lube", start_date: '1999-09-30', tagline: 'A million holidays. One Attendant.', photo: "https://t3.ftcdn.net/jpg/00/65/62/24/240_F_65622489_7qudIF8FQycFAm7QAWcLRMoagYWZFIjD.jpg"},
        {worker_name: 'Ayyub Hinton', description: "Attendent at Vip Wash & Lube", start_date: '2009-09-07', tagline: 'Attendant, People Rule!',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT2f-RCo1KAyAHaI0Ke1o4m4uv937r0DZjg47VzKRWw0O8NZu"},

        {worker_name: 'Uzma Mullins', description: "Washing Team at Vip Wash & Lube", start_date: '2013-11-07', tagline: 'Think Better, Washing.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMugTplvJivgwDQLIlHqNLezNhAIM7g7ZP-P15zINM7nvKnDS"},
        {worker_name: 'Darcey Talbot', description: "Washing Team at Vip Wash & Lube", start_date: '2013-09-07', tagline: 'Washing, Make yourself heard.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5vitqVboUMy2J28kh0ADEN8rZ_I8KLaagxMMDBHH8uoQ9Yjs"},
        {worker_name: 'Dennis Sumner', description: "Washing Team at Vip Wash & Lube", start_date: '2009-12-12', tagline: 'Washing is easy.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63OX1TMOCWFVt6UZGfYmQMwwRVBTCdIxqhquElQY1QWytwUHq"},

        {worker_name: 'Kaitlan Riley', description: "Cashier at Vip Wash & Lube", start_date: '1999-11-07', tagline: 'Cashier, The best a man can get.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xOITvxNx-ETfBDAmK6jnnQ4r4cHFoZoscJMmSD5HlZskAJJe"},
        {worker_name: 'Maddy Haynes', description: "Cashier at Vip Wash & Lube", start_date: '2005-08-12', tagline: 'See what we mean. Cashier.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRll6hXe2CpBvrqnJpYGEDvKiZvN5gpBBbSohTbWXm60yzTdyac"},
        {worker_name: 'Hashir Wills', description: "Cashier at Vip Wash & Lube", start_date: '2016-09-07', tagline: 'Cashier, Helps you Relax.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6n7kYHSYoB2SXsC-rTE3BuXZCkPfGllK_9TSRnxump_BbMvMJ"},

        {worker_name: 'Alessandro Wolfe', description: "Attendent at Splash Car Wash", start_date: '2001-09-07', tagline: 'The coolest Attendant on the planet.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgVobTq1e0f5eefwyHhFQnlCrSCIyPxZyJma1nDwwepkFhVbJ"},
        {worker_name: 'Braydon Schofield', description: "Attendent at Splash Car Wash", start_date: '2013-09-13', tagline: 'Its got to be Attendant.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXK7Tpa4tlcl3BbZ-0x3CPG480PKE_tpZbwb-nxt5gRngNcKD"},
        {worker_name: 'Renesmee Bowman', description: "Attendent at Splash Car Wash", start_date: '1999-09-07', tagline: 'Think Fast, Attendant.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSy0_3rqh92lXiz5lMMKH7GlD1R8iqwmq0CKcVvEnv3LuzEua"},

        {worker_name: 'Freddy Petty', description: "Washing Team at Splash Car Wash", start_date: '1999-09-11', tagline: 'Freshen-up with Washing.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU8kdXmkoSv4GaZc6cf_GAGp4-iwXV0p0ryMXaE4NH4i73Gpl"},
        {worker_name: 'Kester Sandoval', description: "Washing Team at Splash Car Wash", start_date: '2005-09-12', tagline: 'Washing is the natural beauty.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69jklzSwLm6p6eZCm0k_oF0VqdraLYDOUrC0sQUBEobSE3ux8"},
        {worker_name: 'Dotty Figueroa', description: "Washing Team at Splash Car Wash", start_date: '1999-09-18', tagline: 'Washing gives you strength.',photo: "https://studio-one-stuttgart.de/wp-content/uploads/2016/11/passbilder2.jpg"},

        {worker_name: 'Jaime Leigh', description: "Cashier at Splash Car Wash", start_date: '1999-09-30', tagline: 'Great Cashier. Great times.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6csfJtpj4QlkLAzyz8A-gS_OACTWu2WH0CfY9Y1y6_i9jCGUi"},
        {worker_name: 'Elsie-Mae Lindsey', description: "Cashier at Splash Car Wash", start_date: '1999-09-19', tagline: 'Cashier is better.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3ldxOWgvHU2CD4hPOkdwjPkrdsyf_u8YaDwPCSY0iDrlBtUr"},
        {worker_name: 'Aanya Lucero', description: "Cashier at Splash Car Wash", start_date: '2009-09-10', tagline: 'Cashier! Pure genius.',photo: "https://www.firle-digital.de/files/content/bilder/Holland%203%2C5%204%2C5.jpg"},

        {worker_name: 'Waqar Craig', description: "Attendent at WOW Car Wash", start_date: '1999-04-15', tagline: 'Attendant is great!',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mDNV53atMOUhM3WJdSQegJjjmCTpqJLwaCHm8CEPuKThtkbg"},
        {worker_name: 'Sila Frazier', description: "Attendent at WOW Car Wash", start_date: '2005-03-07', tagline: 'Attendant, its time for perfection.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6n7kYHSYoB2SXsC-rTE3BuXZCkPfGllK_9TSRnxump_BbMvMJ"},
        {worker_name: 'Sophie Knights', description: "Attendent at WOW Car Wash", start_date: '2016-02-11', tagline: 'Attendant, try it youll like it.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzayE2Dh-cChG9xk8Yt9TrKxcd7G_CNHC3PNJp9-BFmB2HESU"},

        {worker_name: 'Evangeline Chaney', description: "Washing Team at WOW Car Wash", start_date: '2001-09-07', tagline: 'I think, therefore I Washing.',photo: "https://www.fotoservice-boehme.de/fileadmin/fotos/biometrische-fotos/biometrisches-passfoto.jpg"},
        {worker_name: 'Ann Bradshaw', description: "Washing Team at WOW Car Wash", start_date: '2005-01-07', tagline: 'Washing, simplicity rules.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsR0-63sBftBl9LEJ2DMAuBXl5sBv1DOvodOnm0nxlyczETxOz"},
        {worker_name: 'Jaylen Stubbs', description: "Washing Team at WOW Car Wash", start_date: '2015-09-30', tagline: 'Washing, Have it your way.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ysyHxrfxenxjk8CZN5WxG_6sdJRioias1VQLIy3MHzkeNnzH"},

        {worker_name: 'Allana Salt', description: "Cashier at WOW Car Wash", start_date: '2001-09-07', tagline: 'whats the problem, Cashier is here!',photo: "http://www.foto-thulke.de/wp-content/uploads/passbild-frau-brille.jpg"},
        {worker_name: 'Dominick Glass', description: "Cashier at WOW Car Wash", start_date: '2015-09-07', tagline: 'Cashier works like charm.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69jklzSwLm6p6eZCm0k_oF0VqdraLYDOUrC0sQUBEobSE3ux8"},
        {worker_name: 'Zaydan Maguire', description: "Cashier at WOW Car Wash", start_date: '2005-09-07', tagline: 'Things work better with Cashier.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7feGHFxshvkTsTyPUsbMim_6J6fq-zJSIprfPyCq5ZL0iEqjz"},

        // SALON
        {worker_name: 'Ewen Hogan', description: "Attendent at Princes Nail", start_date: '2015-09-27', tagline: 'Attendant, Enjoy this moment.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E9XONqlmKpZM3iqDFtbMw8euBnxbkaZi5UUCiBabidb0154-"},
        {worker_name: 'Vivian Corona', description: "Attendent at Princes Nail", start_date: '2009-09-23', tagline: 'Attendant - Power, beauty and soul.',photo: "https://www.fotostudio-lichtmalerei-muenchen.de/wp-content/uploads/2012/02/bild-fuer-visum.jpg"},
        {worker_name: 'Martine Hurst', description: "Attendent at Princes Nail", start_date: '1999-09-25', tagline: 'Attendant - There is No Substitute.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5VOEra1f2mtwRQn-B9GNfiCHMw8CneUXigZ0f9phgR4wW17e"},

        {worker_name: 'Ebrahim Dodd', description: "Hair Dresser at Princes Nail", start_date: '2016-09-12', tagline: 'And all because she loves Hair Dresser.', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7Pa0OJTI7VqLTiYSjhj6rLd1ncYLLuxp_MAA01ntnUwdyIIm"},
        {worker_name: 'Damien Mair', description: "Hair Dresser at Princes Nail", start_date: '1999-09-23', tagline: 'Hair Dresser, Get up and go.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETs_0VrPmE_b5Co0yN_DSdH_dVRCjIOyjOLrnN5SV1Fe2C4ir"},
        {worker_name: 'Sadiyah Moody', description: "Hair Dresser at Princes Nail", start_date: '1999-09-11', tagline: 'Hair Dresser - Challenge everything.',photo: "https://www.fotozimmer-potsdam.de/wp-content/uploads/2018/01/Passbild_5102.jpg"},

        {worker_name: 'Rafe Huff', description: "Nails at Princes Nail", start_date: '2013-09-07', tagline: 'Nails, Enter a different World.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTOME5IBY_lr_eiBlekkYCzmaJwcumaK_GMQ-RtUwquRXQX0k"},
        {worker_name: 'Michaela Hayward', description: "Nails at Princes Nail", start_date: '2013-09-07', tagline: 'Nails because simple is awesome!',photo: "https://fotograf-berlin-mitte.de/wordpress/wp-content/uploads/2019/02/biometrisches_passbild-berlin.jpg"},
        {worker_name: 'Evalyn Shaw', description: "Nails at Princes Nail", start_date: '2013-09-07', tagline: 'Nails, what else!',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DmxfhKkOBRZWSpMuCs6Vf6XpAnC-hTyhHixq3pe4JYlqWHLx"},

        {worker_name: 'Aimee Hanson', description: "Attendent at Beauty Salon", start_date: '2016-09-12', tagline: 'No problem, Attendant is back.',photo: "https://previews.123rf.com/images/stylephotographs/stylephotographs1504/stylephotographs150400046/38856802-passeport-photo-de-jeune-blonde-neutre-femme-%C3%A0-la-recherche.jpg"},
        {worker_name: 'Eileen Callaghan', description: "Attendent at Beauty Salon", start_date: '1999-09-07', tagline: 'Attendant is full of joy!',photo: "https://previews.123rf.com/images/axelbueckert/axelbueckert1412/axelbueckert141200013/34251655-young-woman-with-neutral-expression-headshot.jpg"},
        {worker_name: 'Faye Peterson', description: "Attendent at Beauty Salon", start_date: '2013-09-07', tagline: 'Attendant rocks!',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvEc3vQ7q0nAC8KVfKNS0B0YBIvsgswi-Doqunr_1ta66FI_1"},

        {worker_name: 'Marta Logan', description: "Hair Dresser at Beauty Salon", start_date: '2018-09-07', tagline: 'Hair Dresser, Expanding Possibilities.',photo: "https://st3.depositphotos.com/2212674/15881/i/1600/depositphotos_158817488-stock-photo-young-woman-with-a-serious.jpg"},
        {worker_name: 'Kristin Kerr', description: "Hair Dresser at Beauty Salon", start_date: '2009-09-07', tagline: 'Get the Hair Dresser habit.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwp6I8NGdTb2Y9fxttVETdbxjXaFC73ntyX-8zxNonzVIc3r0J"},
        {worker_name: 'Clayton Bravo', description: "Hair Dresser at Beauty Salon", start_date: '2016-09-07', tagline: 'The Hair Dresser. Think.',photo: "https://images-na.ssl-images-amazon.com/images/I/81eusmv-9QL._SY355_.png"},

        {worker_name: 'Magnus Russell', description: "Nails at Beauty Salon", start_date: '2015-09-12', tagline: 'Nails, for the sake of humanity.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwA4_Uga60G0Vm02T7b4_PJGmjfNOjQkJ9nag8KFE5NQErEHF4"},
        {worker_name: 'Huey Fields', description: "Nails at Beauty Salon", start_date: '1999-09-07', tagline: 'Nails, from freedom comes elegance.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YTFEtz7pjNYMja4DrTJma7I27lpP3Lc9mT22DUt1Hbew21I_"},
        {worker_name: 'Samiha Hurst', description: "Nails at Beauty Salon", start_date: '2013-09-11', tagline: 'Nails comes with a smile.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwBNPmSVW_mtmXkpXatTRM0bkOSn1T8v6ePinGzZkBfFypawI"},

        {worker_name: 'Eli Wilkinson', description: "Attendent at Mercedes Beauty Salon", start_date: '1999-09-11', tagline: 'Things work better with Attendant.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9QH6z2kFTfHBa_4Vc0WArGPc3NH_xvRTSgIwmk8whZ0jKwY6Yg"},
        {worker_name: 'Adeeb Bull', description: "Attendent at Mercedes Beauty Salon", start_date: '2016-09-30', tagline: 'Attendant, optimized for Fun.',photo: "https://www.parking-mobility.org/wp-content/uploads/2019/06/Barbara-Chance-2019-Preferred-Headshot_BJC-2x2-768x768.jpg"},
        {worker_name: 'Delia Rocha', description: "Attendent at Mercedes Beauty Salon", start_date: '2013-09-11', tagline: 'Attendant, Make yourself heard.',photo: "http://www.iletc.com.au/wp-content/uploads/2016/09/2x2-Edited.jpg"},

        {worker_name: 'Mathew Hull', description: "Hair Dresser at Mercedes Beauty Salon", start_date: '2015-09-11', tagline: 'Bring out the Hair Dresser!',photo: "http://www.hawkerscholarship.org/media/images/scholars/CameronAllan.jpg"},
        {worker_name: 'Tyrique Cousins', description: "Hair Dresser at Mercedes Beauty Salon", start_date: '1999-03-30', tagline: 'The Better way to Hair Dresser.',photo: "https://0.academia-photos.com/13734411/3964146/11107744/s200_gustavo.matiuzzi_de_souza.jpg"},
        {worker_name: 'Marina Barrett', description: "Hair Dresser at Mercedes Beauty Salon", start_date: '2009-04-34', tagline: 'Hair Dresser, because, simple is awesome!',photo: "https://jamshrsolutions.com/upload/profile/1446276068-_MG_2542%20%202X2.jpg"},
        
        {worker_name: 'Kimberly Mills', description: "Nails at Mercedes Beauty Salon", start_date: '2015-05-26', tagline: 'Nails - Think Big.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UQ8NShZaf-tA727n29R1cz58AZRitxoPjXrLVwi1vqh8ppAN"},
        {worker_name: 'Taylan Hastings', description: "Nails at Mercedes Beauty Salon", start_date: '2013-05-27', tagline: 'Nails, The Perfect Experience.',photo: "http://2015.igem.org/wiki/images/2/2a/Team_Sherbrooke_Photo_Robitaille.jpg"},
        {worker_name: 'Francis Bauer', description: "Nails at Mercedes Beauty Salon", start_date: '1999-06-12', tagline: 'Nails, optimized for Fun.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIVIZW1uGeOzmbBtpUyG5j_J02jlZ8wp-VOCNLlL9QtcXwUCl"},

        // AUTOMOBILE REPAIR SHOP
        {worker_name: 'Cathal Finney', description: 'Attendent at Automotive Workshop', start_date: '2016-01-12', tagline: 'Attendant is full of joy!',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoMqiKkpylnmefxqMgVxEC8SAVe0l-HlnTL3mmSlYrnrl-c9R"},
        {worker_name: 'Hattie Lord', description: 'Attendent at Automotive Workshop', start_date: '2013-01-12', tagline: 'The Attendant. Think.',photo: "https://www.comsol.com/events/view-speaker-image/331"},
        {worker_name: 'Antoine Li', description: 'Attendent at Automotive Workshop', start_date: '2013-02-11', tagline: 'Attendant is an investment in good appearance.',photo: "https://www.comsol.com/events/view-speaker-image/351"},

        {worker_name: 'Jonas Talley', description: 'Mechanic at Automotive Workshop', start_date: '2018-03-12', tagline: 'Mechanic, for the sake of your health.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuIxEJutIZGgQKBk-nBNfDza4fEU8HxxfYrWzqwHDJp0IRiXx"},
        {worker_name: 'Nial Cuevas', description: 'Mechanic at Automotive Workshop', start_date: '2015-04-27', tagline: 'Mechanic, Helps you Relax.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQRMaNWRVJxjn723sfNwXV06BvrF1BPP6ggWqtitWReSwFhGk"},
        {worker_name: 'Martyn Buckley', description: 'Mechanic at Automotive Workshop', start_date: '2013-04-12', tagline: 'Mechanic, You got a friend in the business.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQl3QJHiSDu_OdmVBYeYgdBXJKLoQwjKIqGdikOIDatAwhHUm"},

        {worker_name: 'Ariah Ferreira', description: 'Attendent at B K Auto Body Workshop', start_date: '2009-08-12', tagline: 'The coolest Attendant on the planet.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2YrNgFQGRAonNfm7Csw0qokhc2NgbT9WpIdMaqiCrPzv7SYo"},
        {worker_name: 'Cathal Finney', description: 'Attendent at B K Auto Body Workshop', start_date: '2015-07-30', tagline: 'Attendant, Open Happiness.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiWiiULNslxmrG5rrhBVcVD1M3ssnNvM-OdbsPyORSLoCAJ1f"},
        {worker_name: 'Sophie Hooper', description: 'Attendent at B K Auto Body Workshop', start_date: '2013-07-12', tagline: 'Go crack a Attendant.',photo: "https://m.easyaupair.com/Photo/aupair_caee9caceed9ae96a9f033eccac1903f.jpg"},

        {worker_name: 'Gloria Morales', description: 'Mechanic at B K Auto Body Workshop', start_date: '2013-07-07', tagline: 'Mechanic, beginning of a new era.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-15F19Ti8PJOAoc1tuoIozRqCG_fDqmCpeMPcGK2ovCMXldqu"},
        {worker_name: 'Nolan Cannon', description: 'Mechanic at B K Auto Body Workshop', start_date: '2015-06-12', tagline: 'Mechanic, The future is here.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00TzmSrrURhbkzNwewwyRP1TcSS3KNWLPusPqzjHXY_OFgXQ3"},
        {worker_name: 'Antoine Li', description: 'Mechanic at B K Auto Body Workshop', start_date: '2016-05-30', tagline: 'Mechanic, Make yourself heard.',photo: "https://0.academia-photos.com/2099609/684053/848974/s200_jonathan.malicsi.jpg"},

        {worker_name: 'Cathal Finney', description: 'Attendent at Yunior Auto Repair', start_date: '2018-04-27', tagline: 'Attendant, thats all I want.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtY5WaKm75PnygflASfBz633MF9mmxyyAlIXExX9WDQIDZtDK"},
        {worker_name: 'Afsana Mcneil', description: 'Attendent at Yunior Auto Repair', start_date: '2015-03-12', tagline: 'The Attendant of confidence.',photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHotGZudCF8u3Ru9LkKztIvDD06eFCbANRAfpAiG0CSYvZnS_"},
        {worker_name: 'Elodie Draper', description: 'Attendent at Yunior Auto Repair', start_date: '2016-03-11', tagline: 'Attendant is easy.',photo: "https://66.media.tumblr.com/47c721b4074991bf6631f557bdc0bee0/tumblr_nzgad666Is1ut05v7o1_1280.jpg"},

        {worker_name: 'Abubakr Porter', description: 'Mechanic at Yunior Auto Repair', start_date: '2015-02-11', tagline: 'Mechanic, Imagine that.',photo: "https://airyougotravels.com/wp-content/uploads/2016/06/1x1.jpg"},
        {worker_name: 'Miller Luna', description: 'Mechanic at Yunior Auto Repair', start_date: '2009-01-12', tagline: 'Everything looks better with Mechanic.', photo: "https://ph-test-11.slatic.net/p/00f71ae6383c71bc51ca184f06a52ec4.jpg_340x340q80.jpg_.webp"},
        {worker_name: 'Kush Armitage', description: 'Mechanic at Yunior Auto Repair', start_date: '2009-01-11', tagline: 'Lets build the future together with Mechanic.',photo: "https://78.media.tumblr.com/3c948972b7be8a79f1436393a3a26281/tumblr_ogw26dCy7A1smd799o1_1280.jpg"},
      ]);
    });
};
