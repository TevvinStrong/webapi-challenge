const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel.js');

// Routes
router.get('/', (req, res) => {
    db.get()
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: "Projects information does not exists." });
        })
});

router.get('/:id', (req, res) => {
    const projectId = req.params.id;

    db.get(projectId)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ error: "This specified Id does not exists." });
        })
});

router.post('/', (req, res) => {
    let newAction = {
        description: req.body.description,
        notes: req.body.notes,
        completed: false,
    }

    db.insert(newAction)
        .then(newAction => {
            res.status(201).json(newAction)
        })
        .catch(err => {
            res.status(404).json({ error: "error adding the wanted actions." });
        })
});

router.delete('/:id', (req, res) => {
    let projectId = req.params.id;

    db.remove(projectId)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(404).json({ error: "The specified post does not exists." });
        })
});

router.put('/:id', (req, res) => {
    let actionId = req.params.id;
    let changes = {
        description: req.body.description,
        notes: req.body.notes,
        completed: req.body.completed,
    }

    db.update(actionId, changes)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(404).json({ error: "Unable able to update the specified Id." });
        })
});


module.exports = router;

