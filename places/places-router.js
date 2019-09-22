const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('')
}

function findById(id) {
    return db('places').where({ id }).first();
}

function add(place) {
    return db('places').insert(place)
    .then(ids => {
        return findById(ids[0])
    });
}

function update(id, changes) {
    return db('places').where({ id }).update(changes);
}

function remove(id) {
    return db('places').where({ id }).del()
}