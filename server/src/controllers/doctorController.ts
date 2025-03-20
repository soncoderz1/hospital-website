import { Request, Response } from 'express';
import Doctor from '../models/Doctor';

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const { specialty, search } = req.query;
    let query = {};

    if (specialty) {
      query = { ...query, specialty };
    }

    if (search) {
      query = {
        ...query,
        $or: [
          { 'user.name': { $regex: search, $options: 'i' } },
          { specialty: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const doctors = await Doctor.find(query).populate('userId', 'name email');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('reviews.userId', 'name');
    
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor details' });
  }
};