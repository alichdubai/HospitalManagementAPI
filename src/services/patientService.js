const { Patient } = require('../models');

const createPatient = async (patientData) => {
  const patient = await Patient.create(patientData);
  return patient;
};

const getPatientById = async (id) => {
  const patient = await Patient.findByPk(id);
  return patient;
};

const getAllPatients = async () => {
  const patients = await Patient.findAll();
  return patients;
};

module.exports = {
  createPatient,
  getPatientById,
  getAllPatients,
};
