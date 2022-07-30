const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const { Dog, Temperament } = require("../db.js")
require("dotenv").config();
const { API_KEY, API } = process.env;
const { v4: uuidv4 } = require('uuid');
const axios = require("axios");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    if (!name) {
      try {
        var database = await Dog.findAll({
          include: {
            model: Temperament,
              attributes: {
                include: ['name'], 
              },
              through: {
                attributes:[]
              }
          }
        })
        const api = await axios.get(`${API}${API_KEY}`)
        Promise.all([database, api])
          .then((results) => {
            const [databased, apiData] = results;
            const response = databased.concat(apiData.data)
            res.json(response);
          })
      } catch (error) {
        next(error)
        res.send(error.message)
      }
    } else {
      try {
        var database = await Dog.findAll({
          include: {
            model: Temperament,
              attributes: {
                include: ['name'], 
              },
              through: {
                attributes:[]
              }
          }
        })
  
        const api = await axios.get(`${API}${API_KEY}`)
        let dogs = await Promise.all([database, api])
          .then((results) => {
            const [databased, apiData] = results;
            const response = databased.concat(apiData.data)
            return response;
          })
        let resultado = []
        for (let i = 0; i<dogs.length;i++){
          if(dogs[i].name.includes(name)){
           resultado.push(dogs[i])
          }}
        res.send(resultado).status(200)       
  
      } catch (error) {
        next(error)
        console.log(error)
        res.send({error:"Dog does not exist"}).status(404)
      }
    }
  
  })

router.get("/:id", async (req, res, next) => {
    const {id} = req.params;
    if (id.length < 15) {
        try {
            const perritos = await axios.get(`${API}${API_KEY}`)
            res.json(perritos.data.find(dog => dog.id === parseInt(id)))
        } catch (error) {
            next(error)
        }
        
    } else {
        try {
            Dog.findAll({ 
                where: {id: id},
                include: {
                    model: Temperament,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            .then(resp => res.send(resp))
        
        } catch (error) {
            next(error)
        }
    }
})

router.post("/", async (req, res, next) => {
  const{name,
      height,
      weight,
      life_span,
      temperaments}= req.body; 
      
  console.log(temperaments)
  try {
      let id = uuidv4()
      createNewDog = await Dog.create({name, height, weight, life_span, id})
      let tempDb = await Temperament.findAll({where:{name:temperaments}})
      createNewDog.addTemperament(tempDb);
      return res.send('Breed created successfully');
  } catch (error) {
      next(error)
  }
});

module.exports = router;