import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import { dbconnection } from './database/db_connection.js';
import { ErrorMidelwere } from './Error/Error.js';
import { SendReservation } from './Controller/Reservation.js';
import bodyParser from "body-parser";

const App = express();
dotenv.config({ path: './Confing/confing.env' });

// Enable CORS for a specific origin and methods
App.use(cors({
  origin: 'https://restorentbook.netlify.app/',
  methods: ["POST"],
  credentials: true
}));

// Parse JSON and URL-encoded bodies
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
dbconnection();

// Error handling middleware
App.use(ErrorMidelwere);

// Define routes
App.post('/api/reservation', SendReservation);

export default App;
