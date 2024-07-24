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
          project_name: 'test project 1',
          project_description: 'blah blah, ble blah 1',
          project_completed: false
         },
         { 
          project_name: 'test project 2',
          project_description: 'si do re me fa si do 2',
          project_completed: true
         },
    
      ]);
    });
};
