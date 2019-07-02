
exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table) => {
    table.increments();
    table.text('title').nullable();
    table.text('description');
    table.decimal('price').nullable();
    table.integer('quantity').unsigned().nullable();
    table.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('product');
};
