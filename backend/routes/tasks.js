const Task = require("../models/task");
const express = require("express");
const router = express.Router();

/**
 * i guess ideally we'd use something life firebase auth to
 *  make sure requests are coming from our prod environment, but this is a demo 🤷‍♀️
 */

router.post("/create", async (req, res) => {
    if (req.body == null) {
        res.status(400).send( "No task provided");
        return;
    }

    try {
        const task = new Task(req.body.task).save();
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

/* CREATE 'PUT' REQUEST */
router.put("/update", async (req, res) => {
    if (req.body == null) {
        res.status(400).send("No task provided");
        return;
    }

    try {
        Task.findByIdAndUpdate(req.body.task._id, req.body.task, (err, task) => {
            if (!task) {
                res.status(404).send("You cannot update a task that does not exist!");
                return;
            }
            if (err) {
                res.status(418).send(err);
            } else {
                res.status(200).send("Updated task " + req.params.id + ". It is now " + task);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

/* CREATE 'DELETE' REQUEST */
router.delete("/delete/:id", async (req, res) => {
    if (req.params.id == null) {
        res.status(400).send("No task provided");
        return;
    }

    console.log(req.body);
    try {
        Task.findByIdAndRemove(req.params.id, (err, task) => {
            if (!task) {
                res.status(404).send("You cannot delete a task that does not exist!");
                return;
            }
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send("Deleted task " + req.params.id);
            }
        });
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

module.exports = router;
