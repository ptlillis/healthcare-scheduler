module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    patient_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patient_email: {
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
  return Patient;
};
