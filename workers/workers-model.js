const express = require('express');

const Workers = require('./workers-router')

const router = express.Router();

router.get('/', (req, res) => {
    Workers.find()
    .then(Workers => {
        res.json(Workers);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get Workers.' });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Workers.findById(id)
    .then(worker => {

        if (worker) {
            res.json(worker);
        } else {
            res.status(404).json({ message: 'Could not find worker with given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get worker.' })
    });
});

router.post('/', (req, res) => {
    const newWorker = req.body;

    Workers.add(newWorker)
    .then(newWorker => {
        res.status(201).json(newWorker);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new worker.' })
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Workers.update(id, changes)
    .then(worker => {
        if(worker) {
            res.json({ update: worker });
        } else {
            res.status(404).json({ message: 'Could not find worker with given id' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update worker.' })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Workers.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find worker with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete worker.' })
    });
});

module.exports = router;