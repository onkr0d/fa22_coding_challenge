const mongoose = require("mongoose");
const task = require("./models/task");


module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
        };
        await mongoose.connect(/* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
            "mongodb://localhost:27017/impactteamtest", connectionParams,);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Could not connect to database", error);
    }
};


module.exports.findStoredTasks = async function () {
    console.log(task.schema)
    let document = mongoose.model('task', task.schema)
    let final = [];

    return await document.find();
}

module.exports.addNewTask = function (task) {
    let document = mongoose.model('task', task)
    const newTask = new document({task: "exampleTask"});
    newTask.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("saved");
        }
    });
}