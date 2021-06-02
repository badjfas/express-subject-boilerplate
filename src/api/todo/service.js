import { Todo } from "../../sequelize";

export default {
  create: async (req, res, next) => {
    try {
      const { title, subtitle } = req.body;
      await Todo.create({ title: title, subtitle: subtitle });
      res.json("success");
    } catch {
      res.status(404).send("not found");
    }
  },
  read: async (req, res, next) => {
    try {
      const list = await Todo.findAll({});
      res.json(list);
    } catch (e) {
      console.log(e);
      res.status(404).send("not found");
    }
  },
  complete: async (req, res, next) => {
    const { id } = req.body;

    try {
      const isExistTodo = await Todo.findOne({ where: { id: id }, raw: true });
      if (!isExistTodo) {
        res.status(400).send("not exist todo");
        return false;
      }

      await Todo.update({ done: 1 }, { where: { id: id } }).then((result) => {
        res.status(200).send("success");
      });
    } catch {
      res.status(404).send("not found");
    }
  },
};
