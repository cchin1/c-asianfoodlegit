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

### Sequelize

Use the CLI to create "migrations".
Migrations are things that alter the database schema.
You use the CLI to RUN the migrations.

When you create a migration, a file will be "stubbed out".

## Installation
TBD

## Usage
TBD

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
