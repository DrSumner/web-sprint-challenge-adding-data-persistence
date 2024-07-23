/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('projects').truncate()
    .then(function () {
      // add data into insert
      return knex('projects').insert([
        { 
          project_name: 'test project',
          project_description: 'test description',
         },
         { 
          project_name: 'test project',
          project_description: 'test description',
          project_completed: true
         },
    
      ]);
    });
};
