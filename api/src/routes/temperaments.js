const { Router } = require('express');
const router = Router();
const { Temperament } = require("../db.js")


router.get("/", async (req, res, next) => {
    try{
        const db = await Temperament.findAll()
        return res.status(200).json(db)
    } catch (e) {
        return res.status(404).json(e.message)
    }
})


router.get("/:id", async (req, res) => {
    const {id} = req.params;
    
        const temperament = await Temperament.findByPk(id)
    temperament ? res.status(200).json(temperament) : res.status(404).send("Temperament doesn't exist")
})

router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const temperament = await Temperament.findByPk(id)
    if(temperament){
         await Temperament.destroy({where:{id}})
    res.status(200).send("Temperament deleted")
    } else {
        res.status(404).send("This id temperament doesn't exist")
    }
})



module.exports = router;
