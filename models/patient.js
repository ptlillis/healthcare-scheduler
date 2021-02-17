module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return Patient;
};
