module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('appointment', {

      appointment_start: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      appointment_end: {
          type: DataTypes.INTEGER,
          allowNull: false,
          // validate: {
          //   isDate: true
          //   },
      },
   
      appointment_patient_session: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      provider_id: {
          type: DataTypes.INTEGER(11),
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
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primary_key: false,
        references: {
            model: 'provider',
            key : 'provider_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'unique-patient-per-provider'
    }
    });
    
    Appointment.associate = (models) => {
        Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id', targetKey: 'patient_id', as: 'patient' });

        Appointment.belongsTo(models.Provider, { foreignKey: 'provider_id', targetKey: 'provider_id', as: 'provider' });
      }
    
    return Appointment;
  };
  
