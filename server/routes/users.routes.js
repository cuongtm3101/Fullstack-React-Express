const express = require("express");
const router = express.Router();
const db = require("../utils/database");

// require các controllers cần thiết
const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/users.controller"); // { findAll: func }

const { isAuth } = require("../middlewares/auth.middleware");

// Khởi tạo route (endpoint) theo đúng các vụ C/R/U/D
router.get("/", isAuth, findAll);

router.get("/:id", findOne);

router.post("/", isAuth, create);

router.patch("/:id", isAuth, update);

router.delete("/:id", isAuth, remove);

module.exports = router;
