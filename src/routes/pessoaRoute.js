const router = require("express").Router();
const controller = require("../controllers/pessoaController");

router.post("/", (req, res) => {
    controller.save(req, res);
});

router.get("/", (req, res) => {
    controller.getAll(req, res);
});

router.get("/:id", (req, res) => {
    controller.getOne(req, res);
});

router.put("/:id", (req, res) => {
    controller.update(req, res);
});

router.delete("/:id", (req, res) => {
    controller.delete(req, res);
});

module.exports = router;