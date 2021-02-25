const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('provider', {
     
      provider_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
            is: /^[a-z]+$/i 
        }},
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

    Provider.associate = (models) => {
      Provider.belongsToMany(models.patient, { as: 'ProviderInPatient', through: models.appointment, foreignKey: 'provider_id'});
    }

    return Provider;
  };
  
