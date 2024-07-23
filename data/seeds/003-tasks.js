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
          task_description: 'task description 1',
          task_notes: 'bobibty boppity',
          project_id: 1
         },
         { 
          task_description: 'task description 2',
          task_notes: 'laa la la laaa',
          task_completed: true,
          project_id: 2
         },   
      ]);
    });
};
