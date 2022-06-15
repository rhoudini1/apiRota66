const express = require("express");
const router = express.Router();

const {
  getAllEps,
  getSingleEp,
  getEpByChapter,
  getRandom,
} = require("../controllers/episodes")

router.route("/ep").get(getAllEps);
router.route("/ep/:id").get(getSingleEp);
router.route("/book/:id/:chapter?/").get(getEpByChapter);
router.route("/random").get(getRandom);

module.exports = router;