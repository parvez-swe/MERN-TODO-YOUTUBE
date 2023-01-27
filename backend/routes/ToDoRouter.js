const { Router } = require("express");

const {
  getAllToDo,
  saveToDo,
  updateToDo,
  completeToDo,
  deleteToDo,
} = require("../controllers/ToDoController");

const router = Router();

// router.get("/", getAllToDo);
// router.post("/save", saveToDo);

//CR create read
router.route("/").post(saveToDo).get(getAllToDo);

// router.put("/update", updateToDo);
// router.put("/complete", completeToDo);
// router.post("/delete", deleteToDo);

// UD update delete
router.route("/:id").put(updateToDo).delete(deleteToDo);

router.route("/completed/:id").put(completeToDo);

module.exports = router;
