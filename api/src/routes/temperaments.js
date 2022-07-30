const { Router } = require('express');
const router = Router();
const { Temperament } = require("../db.js")


router.get("/", async (req, res, next) => {
    try{
        const db = await Temperament.findAll()
        return res.status(200).json(db)
    } catch (e) {
        return res.json(e.message).status(409)
    }
})


module.exports = router;
