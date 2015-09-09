# Developer Hours Application

This is an application created using the Meteor Framework.  The application was developed
as a test to see if it is possible to use full stack JavaScript to teach an introduction
to web application development.

## Dependencies

- Meteor Js
- Iron Router
- SimpleSchema
- AutoForm

## Routes

The routes are defined in the lib folder.  Meteor by default compiles all JS files.
Files inside of the `/server` directory are compiled and run on the server.  Files inside
the `/client` directory are compiled and run on the server.  JS inside of the lib folder
is compiled for both client and server rendering.

## Databases

The database information for the application is setup entirely from the `/collections` folder.
This will be the area where we pre-fetch information, setup schemas, and work with the MongoDb.

Dependencies have been added for the database.  Using SimpleSchema we can validate information
that goes into the database adding some security to our database.

### AutoForm

Will Use our database schemas to create automatic insert and update forms
to use in our templates, while providing some basic database security.