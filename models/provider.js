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
        wednsday:{
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
})
    Provider.associate = (models) => {
      Provider.belongsToMany(models.patient, { as: 'ProviderInPatient', through: models.appointment, foreignKey: 'provider_id'});
    }
    return Provider;
  };