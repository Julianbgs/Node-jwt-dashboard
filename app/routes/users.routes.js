module.exports = app => {
  const users = require("../controllers/users.controller.js");

  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/",
    [authJwt.verifyToken],
    users.findAll);

  app.get("/:id", users.findOne);

  app.post("/", users.create);

  app.put("/:id", users.update);

  app.delete("/:id", users.delete);

  app.use("/api/users", router);
};
