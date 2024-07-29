const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize, Sequelize);
const Patient = require('./patient')(sequelize, Sequelize);
const Appointment = require('./appointment')(sequelize, Sequelize);
const MedicalRecord = require('./medicalRecord')(sequelize, Sequelize);
const Invoice = require('./invoice')(sequelize, Sequelize);
const InvoiceDetail = require('./invoiceDetail')(sequelize, Sequelize);
const Inventory = require('./inventory')(sequelize, Sequelize);
const Staff = require('./staff')(sequelize, Sequelize);
const Role = require('./role')(sequelize, Sequelize);
const LabResult = require('./labResult')(sequelize, Sequelize);

User.hasMany(Patient, { foreignKey: 'userId' });
Patient.belongsTo(User, { foreignKey: 'userId' });

Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

Patient.hasMany(MedicalRecord, { foreignKey: 'patientId' });
MedicalRecord.belongsTo(Patient, { foreignKey: 'patientId' });

Invoice.hasMany(InvoiceDetail, { foreignKey: 'invoiceId' });
InvoiceDetail.belongsTo(Invoice, { foreignKey: 'invoiceId' });

Staff.belongsTo(Role, { foreignKey: 'roleId' });

sequelize.sync({ force: true });

module.exports = {
  User,
  Patient,
  Appointment,
  MedicalRecord,
  Invoice,
  InvoiceDetail,
  Inventory,
  Staff,
  Role,
  LabResult,
};
