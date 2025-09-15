const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { listEvents, createEvent, registerForEvent } = require('../controllers/eventController');


router.get('/', listEvents);
router.post('/', auth, createEvent);
router.post('/:eventId/register', auth, registerForEvent);


module.exports = router;