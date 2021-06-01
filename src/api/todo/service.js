import { Todo } from "../../sequelize";

export default {
  bulkCreate: async (res, req, next) => {
    try {
      const result = await Todo.bulkCreate([
        { title: "title 1", subtitle: "subtitle 1", done: 1 },
        { title: "title 2", subtitle: "subtitle 2", done: 1 },
        { title: "title 3", subtitle: "subtitle 3", done: 0 },
        { title: "title 4", subtitle: "subtitle 4", done: 0 },
        { title: "title 5", subtitle: "subtitle 5", done: 0 },
        { title: "title 6", subtitle: "subtitle 6", done: 1 },
      ]);
      res.json("true");
      next();
    } catch (e) {
      console.log(e);
      throw Error("허접");
    }
  },
  read: async (req, res, next) => {
    try {
      const list = await Todo.findAll({});
      res.json(list);
    } catch (e) {
      console.log(e);
    }
  },
};
