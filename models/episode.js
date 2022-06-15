const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
	ep_id: {type: Number},
	ep_title: {type: String},
	ep_description: {type: String},
	link_id: {type: String},
	book_id: {type: Number},
	book_title: {type: String},
	book_ch: {type: String},
});

module.exports = mongoose.model("Episode", EpisodeSchema);