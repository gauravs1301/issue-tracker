const express = require("express");
const mongoose = require("mongoose");
const Issue = require("../models/issues");
const Project = require("../models/projects");

//Render HomePage on Browser with Updates included
module.exports.homepage = async (req, res) => {
  const project = await Project.find();
  if (project) {
    res.render("home", {
      title: "Issue-Tracker",
      project,
    });
  }
};
//Creating a new Project
module.exports.createProject = async (req, res) => {
  try {
    Project.create(
      {
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
      },
      function (err, newProject) {
        if (err) {
          console.log(err);
          return;
        }
        // console.log('########',newProject);
        return res.redirect("/");
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Project cannot be created",
      error: err.message,
    });
  }
};

//Deleting the Particular project

module.exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.query.id);
    for (const issue of project.issues) {
      await Issue.remove(issue);
    }
    await project.remove();
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Project cannot be deleted",
      error: err.message,
    });
  }
};

//If project exists in the database it will go to issue page
module.exports.IssuePage = async (req, res) => {
  try {
    const id = req.query.id;
    const project = await Project.findById(id);
    if (project) {
      return res.render("issue", {
        name: project.name,
        project_id: project.id,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "No Project Exist",
      error: err.message,
    });
  }
};

//Create Issue and saving update issue and project database collection with the new issue
module.exports.newIssue = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const project = await Project.findById(id);

    if (project) {
      const newIssue = new Issue({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        labels: req.body.labels,
      });
      await newIssue.save();
      await project.issues.push(newIssue);

      await project.save();

      return res.redirect(`/project-detail-open/?id=${project.id}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Issue cannot be created",
      error: err.message,
    });
  }
};
//Delete the Particular Issue from Database
module.exports.deleteIssue = async (req, res) => {
  try {
    const id = req.query.id;
    const project = await Project.findOne({ issues: { $in: id } });

    const issue = await Issue.findById(id);

    await Project.updateOne(
      { issues: { $in: id } },
      { $pull: { issues: { $eq: id } } }
    );

    await issue.remove();
    return res.redirect(`/project-detail-open/?id=${project._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Issue Cannot be Deleted",
      error: err.message,
    });
  }
};
//update the project Detail Page with issues
module.exports.projectDetail = async (req, res) => {
  try {
    const id = req.query.id;
    const project = await Project.findById(id).populate({ path: "issues" });

    if (project) {
      const issues = project.issues;
      return res.render("projectdetail", {
        project: project,
        issues: issues,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "There were some error at Server Side",
      error: err.message,
    });
  }
};
