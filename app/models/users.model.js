module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    lastName: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return Users;
};
