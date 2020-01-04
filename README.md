# asianfoodlegit
UW Web Development Bootcamp - Final Group Project #3

# Overview
TBD

# Technologies Used

# Deployment
* Enter GitHub pages link
* Enter Heroku link

# Requirements
* Must use ReactJS in some way (even if minimal)
* Must use a Node and Express Web Server
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least two libraries, packages, or technologies that we haven’t discussed
* Must have a polished frontend/UI
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server
(Optional Bonus) Allow for or involve the authentication of users in some way

## Backend API

You might want to document the backend API before creating it (optional). Either way it would be good do document the routes and their input and output so that other team members know how to use the backend.

You also want to document how other team members can run the backend. That is, if I'm working on the front end, I need to know how I can run the backend so that I can connect to it and test my React project.

Give the commands and instructions. For example:
 * Install MySQL
 * Create the schema named `asianfoodlegit` and give the root user the password `fakeDevPassword111` (it's OK to check-in fake development passwords that are only used on your local machine).
 * run `npm run do:db:migrations` (create a script that will run the sequalize command line program and run the db migrations)
 * run `npm run server:local:dev`

 The above are just an example. The idea is that you tell your teammates how to run the server for local development.

##### `/user/{userID}`

This returns the user information for user "userID".
Example GET /user/8947 might return:

```json
{
	"username": "candice",
	"userID": "8947",
	"sdfg": "dfgkj"
}
```

PUT /user takes the following input:

```json
{
    "username": "candice",
	"sdfg": "dfgkj"
}
```
And returns the full user like a GET would return.

### Sequelize Workflow

The purpose of Sequelize is to generate the SQL and JavaScript code necessary such that all team members can have the exact same database locally when developing, and that exact same database can be automatically created in production. This is done by creating 'migrations' and mapping them to JavaScript code for selecting/updating/inserting/deleting things from/to the database, and automatically 'serializing' and 'deserializing' these from/to JavaScript objects.

The database schema is created and altered by **Database Migrations**. A Database Migration is a set of Data Definition Language (DDL) changes to the schema that will take alter the database from a previous version.

For example, if you run database migrations 1, 2, and 3. Then the database schema is in "Version 3". If you then need to add a column to the Users table, you can create database migration 4 which will create that new column in the database.

When you tell Sequalize to 'run the database migrations', it will check the database's current version, and run only those migrations necessary. So if your database is in version 3, then only version 4 will run.  But if your database is in version 1, then 2, 3 and 4 will run.

In general, the workflow for using this type of system is as follows.

##### Use the command line program to 'stub out' the files for a new database migration.

You run some command, like `npx sequalize create:migration` (not the real command, read the documentation). the Sequelize program will create several files. These files represent a database migration. So in our example above, if we needed to add a user column, we would create a migration for that, and some files would be stubbed out.

##### Edit the stubbed out files

You go to the appropriate files that were created by sequelize, and you edit them. In our example above, we would go to some stubbed out file, and write the code necessary to add a field (i.e. column) to the User 'model'.

##### Run the database migrations

Once we made the change to the stubbed out files, we would run the database migrations with the sequelize program, e.g. `npx sequelize run:migrations` (again, made up, see documentation). The command will connect to the database and run the necessary DDL SQL to alter the database schema as you desired.

## Directory Structure

Be careful. As things currently exist, you have database stuff inside of a top-level directory called 'client'. This seems wrong. You actually have two very separate projects, the Frontend (React) and the Backend (Node.js). These should probably live in two separate top level directories. (Client means frontend, i.e. React)

```
client
  - package.json (for the react project)
backend
  - package.json (for the backend project)
```

## Installation
TBD

## Usage
TBD

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
