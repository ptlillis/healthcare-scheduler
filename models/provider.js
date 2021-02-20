module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('patient', {
      provider_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      provider_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      provider_email: {
      type: Sequelize.STRING,
        allowNull: false,
      validate: {
        isEmail:true
        },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    });
    return Provider;
  };
  
