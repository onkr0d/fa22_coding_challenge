const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./db");
// const tasks = require("./routes/tasks");

connection().then(() => {
    console.log("Started connection")
});

// app.use(cors());
// app.use(express.json());
// app.use("/api/tasks", tasks);


app.get("/api/tasks", async (req, res) => {
    let results = await connection.findStoredTasks();
    res.status(200).send(JSON.stringify(results));

    console.log(results);
});

app.post("/api/tasks", (req, res) => {
    // FIXME let user know if error occurs
    connection.addNewTask(req.task);
    res.status(200).send("Task added");
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
