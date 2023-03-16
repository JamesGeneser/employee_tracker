const router = require("express").Router();
const Departments = require("../../models/tables");

router.post("/seed", (req, res) => {
  Departments.bulkCreate([
    {
      id: 001,
      name: "Finance",
    },
    {
      id: 002,
      name: "Marketing",
    },
    {
      id: 003,
      name: "Human Resources",
    },
    {
      id: 003,
      name: "Human Resources",
    },
  ]).then(() => {
    res.send("Database seeded!");
  });
});
module.exports = router;
