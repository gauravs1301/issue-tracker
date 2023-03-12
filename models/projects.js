const express = require("express");
const mongoose = require("mongoose");
const issues = require("./issues");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  issues: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Issue",
    },
  ],
});
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
