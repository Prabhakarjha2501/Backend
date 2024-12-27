const express =require('express');
const router = express.Router();
const colorController = require('../controller/colorcontroller.js');



router.post('/color', colorController.addcolors);
router.get('/getAllcolor', colorController.getAllcolors)
router.delete('/deletecolor/:id', colorController.deletecolors);
module.exports = router;




