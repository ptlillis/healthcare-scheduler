module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
   
    patient_First_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i, 
    },
    },
    patient_Last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i, 
    },
    },

    patient_Address:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    patient_email: {
    type: DataTypes.STRING,
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
    Patient.belongsToMany(models.Provider, { as: 'ProviderInPatient', through: models.Appointment, foreignKey: 'patient_id'});
  }
  return Patient;
};

