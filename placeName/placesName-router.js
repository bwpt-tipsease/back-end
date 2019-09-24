const express = require('express');

const PlacesName = require('./placesName-model')

const router = express.Router();

router.get('/', (req, res) => {
    PlacesName.find()
    .then(PlacesName => {
        console.log(PlacesName)
        res.json(PlacesName);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get places.' });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    PlacesName.findById(id)
    .then(PlaceName => {

        if (PlaceName) {
            res.json(PlaceName);
        } else {
            res.status(404).json({ message: 'Could not find Place Name with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get Place Name.' })
    });
});

router.post('/', (req, res) => {
    const newPlaceName = req.body;

    PlacesName.add(newPlaceName)
    .then(newPlaceName => {
        res.status(201).json(newPlaceName);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new place.' })
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    PlacesName.update(id, changes)
    .then(PlaceName => {
        if(PlaceName) {
            res.json({ update: PlaceName });
        } else {
            res.status(404).json({ message: 'Could not find Place Name with given id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update place.' })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    PlacesName.remove(id)
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