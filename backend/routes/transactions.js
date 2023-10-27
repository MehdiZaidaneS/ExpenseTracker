const { addIncome } = require("../controllers/income")

const router = require("express").Router() //Que es router


router.post("/add-income", addIncome)

module.exports = router