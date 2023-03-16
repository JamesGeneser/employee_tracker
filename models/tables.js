const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Departments extends Model {}
Departments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Link to database connection
    sequelize,

    underscored: true,
    modelName: "departments",
  }
);

class Roles extends Model {}

Roles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    depatment_id: {
      type: DataTypes.INTEGER,
    },
  },

  {
    sequelize,

    underscored: true,
    modelName: "roles",
  }
);

class Employees extends Model {}
Employees.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
    },
    manager_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Link to database connection
    sequelize,

    underscored: true,
    modelName: "employees",
  }
);

module.exports = Employees;

module.exports = Roles;

module.exports = Departments;
