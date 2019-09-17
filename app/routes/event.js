const express = require('express');
const router = express.Router();
const EventController = require('../controller/EventController');

const controller = new EventController();

router.get('/', (req, res) => {
    controller.events(req, res);
})

module.exports = router;
