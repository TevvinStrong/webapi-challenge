const express = require('express');
const router = express.Router();
const db = require('../data/helpers/projectModel.js');

// Routes
router.get('/', (req, res) => {
    db.get()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: "Projects information does not exists." });
        })
});

router.get('/:id', (req, res) => {
    const projectId = req.params.id;
    db.get(projectId)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: "The specified Id does not exists, unable to retrieve." });
        })
});

router.get('/:id/actions', (req, res) => {
    const projectId = req.params.id;
    db.getProjectActions(projectId)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error: "The specified porject Id does not exists, unable to retrieve." });
        })
});

router.post('/', (req, res) => {
    let newProject = {
        name: req.body.name,
        description: req.body.description,
        completed: false,
    }

    db.insert(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(404).json({ error: "Unable to add the specified porject." });
        })
});

router.delete('/:id', (req, res) => {
    let projectId = req.params.id;

    db.remove(projectId)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(404).json({ error: "The specified post does not exists, unable to delete project." })
        })
});

router.put('/:id', (req, res) => {
    let projectId = req.params.id;
    let changes = {
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed,
    }

    db.update(projectId, changes)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(404).json({ error: "The specified project does not exists, unable to update project." });
        })
});


module.exports = router;

