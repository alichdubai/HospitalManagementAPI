module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      supplier: {
        type: DataTypes.STRING,
      },
    });
  
    return Inventory;
  };
  