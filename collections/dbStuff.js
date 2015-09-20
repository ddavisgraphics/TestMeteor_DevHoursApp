// Create the databases that mongo will need
Customers        = new Mongo.Collection('customers');
CustomerProjects = new Mongo.Collection('projects');
TimeTracker      = new Mongo.Collection('timeTracker');

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


