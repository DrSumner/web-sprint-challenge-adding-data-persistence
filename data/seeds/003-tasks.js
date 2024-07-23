/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('tasks').truncate()
    .then(function () {
      // add data into insert
      return knex('tasks').insert([
        { 
          task_description: 'test description 1',
          task_notes: 'test notes 1',
          project_id: 1
         },
         { 
          task_description: 'test description 2',
          task_notes: 'test notes 2',
          task_completed: true,
          project_id: 2
         },   
      ]);
    });
};
