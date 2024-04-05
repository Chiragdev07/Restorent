import { Reservation } from '../model/reservationShema.js';
import ErrorHandler from '../Error/Error.js';

export const SendReservation = async (req, res, next) => {
    const { FirstName, LastName, Email, Phone, time, date } = req.body;

    // Check if all required fields are provided
    if (!FirstName || !LastName || !Email || !Phone || !time || !date) {
        return next(new ErrorHandler("Please Enter All Fields", 400));
    }

    // Check if Phone number contains exactly 10 digits
    if (!/^\d{10}$/.test(Phone)) {
        return next(new ErrorHandler("Phone Number must contain 10 digits", 400));
    }

    try {
        // Create reservation in the database
        await Reservation.create({ FirstName, LastName, Email, Phone, time, date });
        res.status(200).json({ success: true, message: "Reservation Sent Successfully" });
    } catch (error) {
        // Handle database validation errors
        const validationError = Object.values(error.errors).map((err) => err.message);
        return next(new ErrorHandler(validationError.join(","), 400));
    }
};
