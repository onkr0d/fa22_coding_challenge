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