module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('provider', {
     
      provider_First_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z]+$/i, 
      },
        provider_last_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            is: /^[a-z]+$/i 
        }},
        provider_email: {
        type: DataTypes.STRING,
          allowNull: false,
        validate: {
          isEmail:true
          },
        unique: {
          args: true,
          msg: 'Email address already in use!'
        }

      }

    },

    });

    // Provider.associate = (models) => {
    //   Provider.belongsToMany(models.Patient, { as: 'ProviderInPatient', through: models.Appointment, foreignKey: 'provider_id'});
    // }
    return Provider;
  };
  
