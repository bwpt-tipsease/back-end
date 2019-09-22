const express = require('express');

const ServiceWorkers = require('./serviceWorkers-model')

const router = express.Router();

router.get('/', (req, res) => {
    ServiceWorkers.find()
    .then(ServiceWorkers => {
        res.json(ServiceWorkers);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get Service Workers.' });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    ServiceWorkers.findById(id)
    .then(serviceWorker => {

        if (place) {
            res.json(serviceWorker);
        } else {
            res.status(404).json({ message: 'Could not find Service Worker with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get Service Worker.' })
    });
});

router.post('/', (req, res) => {
    const newServiceWorker = req.body;

    ServiceWorkers.add(newServiceWorker)
    .then(newServiceWorker => {
        res.status(201).json(newServiceWorker);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new Service Worker.' })
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    ServiceWorkers.update(id, changes)
    .then(serviceWorker => {
        if(serviceWorker) {
            res.json({ update: serviceWorker });
        } else {
            res.status(404).json({ message: 'Could not find Service Worker with given id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update Service Worker.' })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    ServiceWorkers.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find Service Worker with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete Service Worker.' })
    });
});

module.exports = router;