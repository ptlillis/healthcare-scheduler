const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('appointment', {
      
      appointment_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      appointment_start: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
      },
      appointment_end: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          validate: {
            isDate: true
            }
      },
      appointment_session: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
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
    }
    }
     );
    
        Appointment.associate = (models) => {
        Appointment.belongsTo(models.patient, { foreignKey: 'patient_id', targetKey: 'patient_id', as: 'patient' });

        Appointment.belongsTo(models.provider, { foreignKey: 'provider_id', targetKey: 'provider_id', as: 'provider' });
      }
    
    return Appointment;
  };
  
