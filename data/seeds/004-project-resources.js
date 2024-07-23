/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('project_resources').truncate()
    .then(function () {
      // add data into insert
      return knex('project_resources').insert([
        { 
          resource_id: 1,
          project_id: 2,
         },
         { 
          resource_id: 2,
          project_id: 1,
         },   
      ]);
    });
};