const {DataTypes} =require('sequelize')


const ColorModel = (sequelize) => {
    const Task = sequelize.define(
        'Color',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            color: {
                type: DataTypes.STRING,
                unique:false,
                allowNull: false,
            },
        },
        {
            timestamps: true, 
        }
    );

    return Task;
};

module.exports = ColorModel;