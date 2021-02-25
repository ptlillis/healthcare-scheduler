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
    allowNull: false,
    validate: {
      isEmail:true
      },
    unique: {
     args: true,
     msg: 'Email address already in use!'
        }
      },
  });

  Patient.associate = (models) => {
    Patient.belongsToMany(models.provider, { as: 'ProviderInPatient', through: models.appointment, foreignKey: 'patient_id'});
  }
  return Patient;
};

