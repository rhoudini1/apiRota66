const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect');
const episodes = require("./routes/episodes");
require('dotenv').config();

// MIDDLEWARES
app.use(express.json());
app.use(express.static("./public"));

// ROUTES
app.use("/api/v1/", episodes);

// SERVER
const server = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch(e) {
		console.log(e);
	}
};

server();