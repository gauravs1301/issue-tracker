const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.homepage);
router.post("/", indexController.createProject);
router.get("/project-detail-open", indexController.projectDetail);
router.get("/project-detail-delete", indexController.deleteProject);
router.get("/created-issue", indexController.IssuePage);
router.post("/created-issue", indexController.newIssue);
router.get("/delete-issue", indexController.deleteIssue);

module.exports = router;
