const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeDogs = require("./dogs");
const routeTemperaments = require("./temperaments");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routeDogs);
router.use("/temperaments", routeTemperaments);


module.exports = router;
