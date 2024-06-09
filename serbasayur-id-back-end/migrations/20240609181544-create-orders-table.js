/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable strict */

'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('orders', {
    id_order: { type: 'char', primaryKey: true, length: 255 },
    id_user: { type: 'char', length: 255 },
    tanggal_order: { type: 'date' },
    alamat_order: { type: 'text' },
    total_harga: { type: 'bigint' },
  }, callback);
  db.addIndex('orders', 'id_user_index', 'id_user', callback);
};

exports.down = function(db, callback) {
  db.removeIndex('orders', 'id_user_index', callback);
  db.dropTable('orders', callback);
};

exports._meta = {
  "version": 1
};
