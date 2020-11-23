const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contentDisposition = require('content-disposition');
const PORT = 4040;
let Announcement = require('/announcement.model.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/announcement");
const conection = mongoose.connection;

conection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
})