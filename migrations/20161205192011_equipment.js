
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function(table){
    table.increments('id');
    table.integer('donation_id');
    table.text('type');
    table.text('size');
    table.text('sex');
    table.text('brand');
    table.text('model');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('equipment')
};
