const { createPatient, getPatientById, getAllPatients } = require('../services/patientService');

const create = async (req, res, next) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json(patient);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const patient = await getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).send('Patient not found');
    }
    res.json(patient);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const patients = await getAllPatients();
    res.json(patients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getById,
  getAll,
};
