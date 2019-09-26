exports.up = function(knex) {
    return knex.schema.hasTable('users')
      .then(exists => {
        if (!exists){
          return knex.schema.createTable('users', users => {
            users.increments();
        
            users
              .string('username', 255)
              .notNullable()
              .unique();
            users.string('password', 255).notNullable();
            users.integer('service_worker_id').references('id').inTable('serviceWorkers').unsigned().defaultTo(null);
          });
        }
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  