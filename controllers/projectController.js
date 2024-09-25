const projectModel = require("../models/projectModel");

function getAllProjects(req, res) {
    const projects = projectModel.getAllProjects();
    if(projects.lenght>0)
        res.status(200).json(projects);
    else
        res.status(404).json(projects)
}

function createProjects(req, res) {
    const newProject = projectModel.createProjects(req.body);

    res.status(201).json(newProject);
}

module.exports = {
    getAllProjects,
    createProjects
}