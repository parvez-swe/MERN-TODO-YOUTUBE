const ToDoModel = require("../models/ToDoModel");

module.exports.getAllToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  // const text = req.body.text
  ToDoModel.create({ text })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  ToDoModel.findByIdAndUpdate(id, { text })
    .then(() => res.send("updateSuccessfully"))
    .catch((err) => console.log(err));
};

module.exports.completeToDo = async (req, res) => {
  const { id } = req.params;
  const data = await ToDoModel.findById(id);
  data.completed = !data.completed;
  data.save();
  res.json(data);
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete(id).then(() => res.send("delete Successsfully"));
};
