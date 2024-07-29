module.exports = (sequelize, DataTypes) => {
    const LabResult = sequelize.define('LabResult', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      result: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    return LabResult;
  };
  