/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('resources').truncate()
    .then(function () {
      // add data into insert
      return knex('resources').insert([
        { 
          resource_name: 'test resource 1',
          resource_description: 'test description 1',
         },
         { 
          resource_name: 'test resource 2',
          project_description: 'test description 2',
         },
    
      ]);
    });
};