module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('appointment', {
      appointment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      appointment_start: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      appointment_end: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      appointment_patient_name: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      appointment_patient_session: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      provider_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
    });
    return Appointment;
  };
  
