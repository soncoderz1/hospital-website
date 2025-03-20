import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const newAppointment = new Appointment({
      patientId: req.body.userId,
      doctorId: req.body.doctorId,
      date: new Date(req.body.date),
      time: req.body.time,
      reason: req.body.reason
    });

    const saved = await newAppointment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment' });
  }
};

export const getUserAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.userId })
      .populate('doctorId')
      .sort({ date: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
};

export const updateAppointmentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment' });
  }
};