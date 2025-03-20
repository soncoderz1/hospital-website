import express from 'express';
import * as doctorController from '../controllers/doctorController';
import * as appointmentController from '../controllers/appointmentController';
import * as authController from '../controllers/authController';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Auth routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Doctor routes
router.get('/doctors', doctorController.getDoctors);
router.get('/doctors/:id', doctorController.getDoctorById);

// Appointment routes
router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments/user/:userId', appointmentController.getUserAppointments);
router.put('/appointments/:id/status', appointmentController.updateAppointmentStatus);

export default router;