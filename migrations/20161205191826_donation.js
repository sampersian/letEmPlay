
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donation', function(table){
    table.increments('id');
    table.text('position');
    table.integer('zip');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donation')
};
