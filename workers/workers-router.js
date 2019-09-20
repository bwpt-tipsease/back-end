const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('workers')
}

function findById(id) {
    return db('workers').where({ id }).first();
}

function add(worker) {
    return db('workers').insert(worker)
    .then(ids => {
        return findById(ids[0])
    });
}

function update(id, changes) {
    return db('workers').where({ id }).update(changes);
}

function remove(id) {
    return db('workers').where({ id }).del()
}