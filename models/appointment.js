const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
      appointment_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      provider_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primary_key: false,
          references: {
              model: 'provider',
              key : 'provider_id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
          unique: 'unique-patient-per-provider'
      },
      patient_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primary_key: false,
        references: {
            model: 'provider',
            // changed from provider to patient
            key : 'patient_id',  
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'unique-patient-per-provider'
    },
    monday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    tuesday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    wednesday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    thursday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    friday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    saturday:{
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    sunday:{
      type: Sequelize.BOOLEAN, 
          allowNull: false, 
          defaultValue: false
    }
    }
     );
        Appointment.associate = (models) => {
        Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id', targetKey: 'patient_id', as: 'patient' });
        Appointment.belongsTo(models.Provider, { foreignKey: 'provider_id', targetKey: 'provider_id', as: 'provider' });
      }
    return Appointment;
  };