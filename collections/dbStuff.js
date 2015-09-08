// Create the databases that mongo will need
Customers        = new Mongo.Collection('customers');
CustomerProjects = new Mongo.Collection('projects');
TimeTracker      = new Mongo.Collection('timeTracker');

// Base structure of the Databases will be something like this
/*
Customers
------------------------------
id - Unique Id for each customer
company name
firstname
lastname
email
phone
website

Projects
------------------------------
projectId  - Unique for each
customerId - to tag who the project belongs too
projectName
scope
type
completed
description


TimeTracker
------------------------------
timeId
projectId
startTime
endTime
totalHours
workerName
workDescription
*/


