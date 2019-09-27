const express = require('express');

const ServiceWorkers = require('./serviceWorkers-model')

const router = express.Router();

const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
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

        if (serviceWorker) {
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

router.put('/balance/:id', async (req, res) => {
    try {
        const { tip, service_worker_id } = req.body;
        if (!tip || !service_worker_id) throw new Error(400);
        const worker = await ServiceWorkers.findById(service_worker_id);
        const prevBalance = worker.balance;
        ServiceWorkers.update(service_worker_id, prevBalance + tip);
    } catch(err) {
        switch(err.message){
            case '400':
                return res.status(400).json({ error: 'Request must include tip and service_worker_id keys.'});
            default:
                return res.status(500).json({ error: 'There was an error while attempting to update balance.' });
        }
    }
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