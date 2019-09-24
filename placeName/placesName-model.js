const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('PlacesName')
}

function findById(id) {
    return db('PlacesName').where({ id }).first();
}

function add(place) {
    return db('PlacesName').insert(place)
    .then(ids => {
        return findById(ids[0])
    });
}

function update(id, changes) {
    return db('PlacesName').where({ id }).update(changes);
}

function remove(id) {
    return db('PlacesName').where({ id }).del()
};