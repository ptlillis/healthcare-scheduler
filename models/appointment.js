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
    patient_First_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i, 
     }
     },
     patient_Last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i, 
    }
    },
    
  patient_Address:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  medical_needs:{
    type:Sequelize.STRING,
    allowNull: true,
  },
  insurance_Type:{
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  provider_First_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-z]+$/i, 
  }},
  
  provider_last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-z]+$/i, 
  }
},
email: {
  type: Sequelize.STRING,
    allowNull: true,
  validate: {
    isEmail:true
    }},
  license:{
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: /^[a-z]+$/i 
  }},
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