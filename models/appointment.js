module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('appointment', {
      patientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      providerID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
    });
    return Appointment;
  };
  