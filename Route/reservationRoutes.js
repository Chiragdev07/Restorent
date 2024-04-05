// import express from 'express';
// import {SendReservation} from '../Controller/Reservation.js';

// const router=express.Router();

// router.post("/send",SendReservation);


// export default router;


// reservationRoutes.js

const express = require('express');
const router = express.Router();

// Define your reservation routes
router.post('/api/reservation', (req, res) => {
  res.send('This is the reservation route');
});

// Export the router
module.exports = { reservationRoutes: router };
