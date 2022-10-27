const turisteaController = require('../controllers/turisteaController')
const webhookController = require('../controllers/webhookController')

const express = require("express")

//const Path = require("path")
const router = express.Router();

router.post('/event', turisteaController.eventQuery);
router.post("/text", turisteaController.textQuery);
router.post("/webhook", webhookController.webhook);

module.exports = router;
