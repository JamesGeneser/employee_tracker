const router = require("express").Router();

const departments = require("../../models/tables");
// const Roles = require("../../models/tables");
// const Employees = require("../../models/tables");

router.use("/departments", departments);

module.exports = router;
