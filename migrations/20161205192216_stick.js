
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stick', function(table){
    table.increments('id');
    table.integer('donation_id');
    table.text('size');
    table.integer('flex');
    table.text('curve');
    table.text('shot');
    table.text('brand');
    table.text('model');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stick')
};
