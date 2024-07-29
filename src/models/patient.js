module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
      },
      contactNumber: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.TEXT,
      },
      insuranceProvider: {
        type: DataTypes.STRING,
      },
      insurancePolicyNumber: {
        type: DataTypes.STRING,
      },
    });
  
    return Patient;
  };
  