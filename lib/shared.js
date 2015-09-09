// Router Functions
// =================================================================
Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/customers', function () {
  this.render('customers');
});

Router.route('/addCustomer', function () {
  this.render('addCustomer');
});

// Router.route('/items', function () {
//   this.render('Items');
// });

// JavaScript  Models
// =================================================================
CustomerModel = function(){
  // declare variables
  this.id   = null;
  this.name = null;
  this.address = null;
  this.phone = null;
  this.email = null;
  this.website = null;
  this.projects = null;
}

CustomerProjects = function(){
  // declare variables
  this.name = null;
  this.scope = null;
  this.time = null;
  this.isCompleted = false; // set every project to default false
  this.description = null;

  // Get the time array
  this.billableHours  = function(){
    if(this.isCompleted){
      var totalTime = 0; // int
      var time = this.time;
      // calculate time
      for(var i = 0; i < time.length; i++){
          totalTime = totalTime + time[i];
      }
      return totalTime;
    } else {
      return "Not Completed";
    }
  };
}