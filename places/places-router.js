const express = require('express');

const Places = require('./places-model')

const router = express.Router();

router.get('/', (req, res) => {
    Places.find()
    .then(places => {
        res.json(places);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get places.' });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Places.findById(id)
    .then(place => {

        if (place) {
            res.json(place);
        } else {
            res.status(404).json({ message: 'Could not find place with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get place.' })
    });
});

router.post('/', (req, res) => {
    const newPlace = req.body;

    Places.add(newPlace)
    .then(newPlace => {
        res.status(201).json(newPlace);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new place.' })
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Places.update(id, changes)
    .then(place => {
        if(place) {
            res.json({ update: place });
        } else {
            res.status(404).json({ message: 'Could not find place with given id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update place.' })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Places.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find place with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete place.' })
    });
});

module.exports = router;