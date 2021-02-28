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
      type:sequelize.BOOLEAN,
      default :false
    },
    tuesday:{
      type:sequelize.BOOLEAN,
      default :false
    },
    wednsday:{
      type:sequelize.BOOLEAN,
      default :false
    },
    thursday:{
      type:sequelize.BOOLEAN,
      default :false
    },
    friday:{
      type:sequelize.BOOLEAN,
      default :false
    },
    saturday:{
      type:sequelize.BOOLEAN,
     default :false
    },
    sunday:{
      type:sequelize.BOOLEAN,
      default :false
    }
    }
     );
        Appointment.associate = (models) => {
        Appointment.belongsTo(models.patient, { foreignKey: 'patient_id', targetKey: 'patient_id', as: 'patient' });
        Appointment.belongsTo(models.provider, { foreignKey: 'provider_id', targetKey: 'provider_id', as: 'provider' });
      }
    return Appointment;
  };