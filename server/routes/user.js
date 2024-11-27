var express = require("express");
var router = express.Router();

let user_id = 3;
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("entered user route");
});

router.get(`/${user_id}`, function (req, res, next) {
  res.send(`entered user route on user_id = ${user_id}`);
});

module.exports = router;
