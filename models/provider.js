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
        contact_email: {
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
})
    Provider.associate = (models) => {
      Provider.belongsToMany(models.patient, { as: 'ProviderInPatient', through: models.appointment, foreignKey: 'provider_id'});
    }
    return Provider;
  };