module.exports = (sequelize, DataTypes) => {
    const MedicalRecord = sequelize.define('MedicalRecord', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      diagnosis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      treatment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      doctorNotes: {
        type: DataTypes.TEXT,
      },
    });
  
    return MedicalRecord;
  };
  