/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id')
    tbl.text('project_name', 128)
    .notNullable()
    tbl.text('project_description', 128)
    tbl.boolean('project_completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.text('resource_name', 128)
    .notNullable()
    .unique()
    tbl.text('resource_description', 128)
  })
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.text('task_description', 128)
    .notNullable()
    tbl.text('task_notes', 128)
    tbl.boolean('task_completed').defaultTo(false)
    tbl.integer('project_id')
    .references('project_id')
    .inTable('projects')
    .notNullable()
    .unsigned()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })
  .createTable('project_resources', tbl => {
    tbl.increments('project_resources_id')
    tbl.integer('project_id')
    .references('project_id')
    .inTable('projects')
    .notNullable()
    .unsigned()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    tbl.integer('resource_id')
    .references('resource_id')
    .inTable('resources')
    .notNullable()
    .unsigned()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })
 

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')    
};
