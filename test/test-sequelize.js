const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class Users extends Model {}

Users.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: Users,
    freezeTableName: true
})

console.log(`is the defined model the class itself ${Users === sequelize.model.Users}`)
await Users.sync({ force: true })