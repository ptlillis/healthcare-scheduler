const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
      patient_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      patient_First_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i, 
    },
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
    email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail:true
      },
    unique: {
     args: true,
     msg: 'Email address already in use!'
        }
      },
    medical_needs:{
      type:sequelize.STRING,
      allowNull: true,
    },
    insurance_Type:{
      type:sequelize.BOOLEAN,
      allowNull: false,
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
  });
  Patient.associate = (models) => {
    Patient.belongsToMany(models.provider, { as: 'ProviderInPatient', through: models.appointment, foreignKey: 'patient_id'});
  }
  return Patient;
};