exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
      users.string('username', 255).unique();
      users.string('email', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('worker_name', 128)
      users.string('description');
      users.string('tagline');
      users.string('photo');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  