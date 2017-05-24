
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donation', function(table){
    table.increments('id');
    table.text('title');
    table.text('address');
    table.text('email');
    table.text('phone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donation')
};
