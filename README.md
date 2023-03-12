# Issue Tracker

This is an issue tracking application built using Node.js and Express.js. It allows users to create projects, add issues to the project, and delete projects/issues as needed.

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Install dependencies by running the command `npm install`.
4. Start the server by running the command `npm start`.
5. Open http://localhost:3000 in your browser to access the application.

## Usage

### Homepage

The homepage displays all of the created projects.

### Create a New Project

To create a new project, click the "Create New Project" button on the homepage. Fill out the project name, description, and author and click the "Submit" button.

### Delete a Project

To delete a project, click the "Delete" button next to the project on the homepage.

### Project Detail Page

Clicking on a project name on the homepage will take you to the project detail page. Here you can view all of the issues for the project and create a new issue.

### Create a New Issue

To create a new issue, click the "Create New Issue" button on the project detail page. Fill out the issue details and click the "Submit" button.

### Delete an Issue

To delete an issue, click the "Delete" button next to the issue on the project detail page.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
