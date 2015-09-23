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


Customers.attachSchema(new SimpleSchema({
  companyName: {
    type: String,
    label: "Company Name",
    max: 200
  },
  firstname: {
    type: String,
    label: "First Name",
    max: 200
  },
  lastname: {
    type: String,
    label: "Last Name",
    max: 200
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
  },
  phone: {
    type: String,
    max: 15,
    label: "Phone Number"
  },
  website: {
    type: String,
    max: 100,
    label: "Website",
    optional: true,
    regEx: SimpleSchema.RegEx.Url,
  },
  address:{
    type: Object,
    optional: false
  },
  'address.street': {
      type: String,
      label: "Street Address",
  },
  'address.city' :{
      type: String,
      label: "City",
  },
  'address.state': {
      type: String,
      label: "State",
  },
  'address.postalcode': {
      type: Number,
      label: "Zip Code",
  }
}));


CustomerProjects.attachSchema(new SimpleSchema({
  customerID: {
    type: String,
    label: "CustomerID"
  },
  projectName:{
    type:String,
    label:"Project Name",
    max:50
  },
  scope:{
    type:String,
    label:"What is the project",
    max:100
  },
  completed:{
    type:Boolean,
    label:"Is the project complete?"
  },
  description:{
    type:String,
    label:"What is the project",
    max:400
  }
}));

TimeTracker.attachSchema(new SimpleSchema({
  projectID: {
    type:String,
    label: "Project Id"
  },
  startTime: {
    type:String,
    label: "Time Started",
     max:200
  },
  endTime: {
    type:String,
    label: "Time Finished",
    max:200
  },
  completed: {
    type: Boolean,
    label: "Is the project Completed?"
  },
  author: {
    type: String,
    label: "Your Name / Employee Name",
    max:200,
  },
  description: {
    type:String,
    label: "Description of Work"
  }
}));

// ======================================================================
// SEO Stuff
// ======================================================================

SeoCollection.insert({
    "route_name" : "home",
    "title" : "Time Tracker | Home " ,
    "meta" : [
        // seo
        {"keywords": "Time Tracker, Hours Tracking, Work Time Tracking, Project Management, time, hours, database, workflow"},
        {"description": "Time tracking application built as test project for meteor as a means to teach intro to web app development."},
        // ownership and author
        {"author":"David J. Davis"}
    ]
  });


SeoCollection.insert({
    "route_name" : "customers",
    "title" : "Customers | Time Tracker" ,
    "meta" : [
        // seo
        {"keywords": "Time Tracker customers, time, tracking, customer, customer application, service, public"},
        {"description": "Customer listing for the time tracker application."},
        // ownership and author
        {"author":"David J. Davis"}
    ]
});


SeoCollection.insert({
    "route_name" : "addCustomers",
    "title" : "Add Customers | Time Tracker" ,
    "meta" : [
        // seo
        {"keywords": "Time Tracker customers, time, tracking, customer, customer application, service, public"},
        {"description": "Customer listing for the time tracker application."},
        // ownership and author
        {"author":"David J. Davis"}
    ]
});


SeoCollection.insert({
  "route_name" : "editCustomers",
  "title" : "Edit Customers | Time Tracker" ,
  "meta" : [
      // seo
      {"keywords": "Time Tracker customers, time, tracking, customer, customer application, service, public"},
      {"description": "Customer listing for the time tracker application."},
      // ownership and author
      {"author":"David J. Davis"}
  ]
});


SeoCollection.insert({
  "route_name" : "addProject",
  "title" : "Create New Project | Time Tracker" ,
  "meta" : [
      // seo
      {"keywords": "Time Tracker, projects, creation, customer editing, production, task manager"},
      {"description": "Projects page allows users to add projects to exsisting customers."},
      // ownership and author
      {"author":"David J. Davis"}
  ]
});


SeoCollection.insert({
  "route_name" : "work",
  "title" : "Tracking Work | Time Tracker" ,
  "meta" : [
      // seo
      {"keywords": "Time Tracker, work, progression, timeclock, employee page, customer time tracker, project manager"},
      {"description": "Is the page that employees spend the most of their time on working on clients projects."},
      // ownership and author
      {"author":"David J. Davis"}
  ]
});
