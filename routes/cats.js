var express = require('express');
var router = express.Router();





// GET cats index
router.get('/', function (req, res, next) {
  res.redirect("/cats/fact")
});

// GET cats/fact
router.get(
  "/fact",
  async function (req, res, next) {
    // fetch("https://catfact.ninja/fact")
    //   .then(factRes => factRes.json())
    //   .then(factJson => { res.send(factorJson) })
    //   .catch(error => { res.send(error.message) })
    try {
      const factRes = await fetch("https://catfact.ninja/fact")
      const factJson = await factRes.json()

      res.render(
        "cat/fact",
        {
          title: "Cat Fact!", fact: factJson.fact
        }
      );
    } catch (error) {
      res.send(error.message)
    }
  }
)


module.exports = router;





