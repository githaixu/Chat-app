const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

// class User extends Model {}
// User.init({
//     name: DataTypes.TEXT,
//     favoriteColor: {
//       type: DataTypes.TEXT,
//       defaultValue: 'green'
//     },
//     age: DataTypes.INTEGER,
//     cash: DataTypes.INTEGER
// })

// save the instance
// User.create({name: jin, favoriteColor: 'blue', age: 30, cash: 'infinit'})
User.build({name: jin, favoriteColor: 'blue', age: 30, cash: 'infinit'})
const jin = await User.save();
jin.name = 'li';
User.save();
//delete the instance
await jin.destroy()


console.log(123);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();