const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('serviceWorkers')
}

function findById(id) {
    return db('serviceWorkers').where({ id }).first();
}

function add(place) {
    return db('serviceWorkers').returning('id').insert(place)
    .then(ids => {
        return findById(ids[0])
    });
}

function update(id, changes) {
    return db('serviceWorkers').where({ id }).returning('*').update(changes);
}

function remove(id) {
    return db('serviceWorkers').where({ id }).del()
}