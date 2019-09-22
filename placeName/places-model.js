const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('placesName')
}

function findById(id) {
    return db('placesName').where({ id }).first();
}

function add(place) {
    return db('placesName').insert(place)
    .then(ids => {
        return findById(ids[0])
    });
}

function update(id, changes) {
    return db('placesName').where({ id }).update(changes);
}

function remove(id) {
    return db('placesName').where({ id }).del()
};