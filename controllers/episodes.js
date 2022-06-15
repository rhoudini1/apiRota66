// Episode model
const Episode = require("../models/episode");

// Middlewares
const getAllEps = async (req, res) => {
	try {
		const offset = req.query.offset;
		const limit = req.query.limit;
		const allEps = await Episode.find({}, null, {skip: offset}).limit(limit);
		res.status(200).json({ episodes: allEps });
	} catch(err) {
		res.status(500).json({ msg: err });
	}
};

const getSingleEp = async (req, res) => {
	try {
		const search = req.params.id;
		const ep = await Episode.findOne({ ep_id: search });
		res.status(200).json({ episode: ep });
	} catch(err) {
		res.status(500).json({ msg: err });
	}
}

const getEpByChapter = async (req, res) => {
	try {
		const bookId = req.params.id;
		const chapter = req.params.chapter;
		const epsByBook = await Episode.find({book_id: bookId});
		const filteredEps = epsByBook.filter(item => {
			let arrayOfChapters = item["book_ch"].split(', ');
			return arrayOfChapters.includes(chapter);
		});
		res.status(200);
		chapter ? res.json({ episodes: filteredEps })
			: res.json({ episodes: epsByBook });
	} catch(err) {
		res.status(500).json({ msg: err });
	}
}

const getRandom = async (req, res) => {
	try {
		const randomId = Math.floor(Math.random() * 613) + 1;
		const randomEp = await Episode.find({ ep_id: randomId });
		res.status(200).json({ episode: randomEp });
	} catch(err) {
		res.status(500).json({ msg: err });
	}
}

module.exports = {
	getAllEps,
	getSingleEp,
	getEpByChapter,
	getRandom,
};