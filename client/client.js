// List customers and bind data
Template.customerTemplate.helpers({
    allCustomers:function(){
        return Customers.find();
    },
    fullname:function(){
        return this.firstname +" "+ this.lastname;
    },
    phone:function(){
        return this.phone;
    },
    website:function(){
        return this.website;
    },
    email: function(){
        return this.email;
    },
    company:function(){
        return this.companyName;
    }
});

// Customer CRUD
Template.customerTemplate.events({
    "click .delete": function(event){
        event.preventDefault();
        Customers.remove(this._id);
    },
    'click .edit': function () {
        event.preventDefault();
        Session.set("customerId", this._id);
    }
});

// Get the logged customer id
Template.editCustomer.helpers({
    customerID: function(){
        var id = Session.get('customerId');
        return Customers.findOne(id);
    },
    feedback: function(){
        var id = Session.get('customerId');
        if(!id){
            return "No Customer Id has been provided.  Please go back and try again.";
        }
    }
});


// Logic is to help build a customer menu for
// our new project.  This will allow us to grab
// all customers from the database and dynamically
// insert into the new project to maintain a relationship
// with the customer

Template.registerHelper('customerMenu',function(){
    // declar vars for logic
    var customers = Customers.find().fetch(); // get customer from db
    var menu      = [];

    // loop through the Customers
    // to build links for menu
    for(var i=0; i < customers.length; i++){
       var customer   = customers[i];
       var fullname   = customer['firstname'] +" "+ customer['lastname'];
       var customerID = customer['_id'];
       var company    = customer['companyName'];
       var label      = fullname + " - " + company;
       var listObj    = { label:label, value:customerID };
       menu.push(listObj);
    }

    return menu;
});

// Work on Project Logic
// ====================================================

Template.workOnProject.helpers({
    dropdownCustomer: function(){
        return Customers.find().fetch();
    },
    fullname:function(){
        return this.firstname +" "+ this.lastname;
    },
    id:function(){
        return this._id;
    },
    feedback: function(){
        var id = Session.get('selectedCustomer');
        if(!id){
            return "No customer has been selected.  Please select one from the dropmenu.";
        }
    },
    selectProject:function(){
        var id = Session.get('selectedCustomer');
        if(!id){
            return null;
        }
        else {
            return CustomerProjects.find({customerID:id}).fetch();
        }
    },
});

Template.workOnProject.events({
    "change .customerMenu":function(event){
        var value = $(event.target).val();
        Session.set("selectedCustomer", value);
        $('.selectProject').show();
    },
    "change .projectMenu":function(event){
        var value = $(event.target).val();
        Session.set("selectedProject", value);
        $('.startButton').attr('disabled', false).removeClass('disabled');
    },
    "click .helpToggle":function(event){
        event.preventDefault();
        $('.help').toggle();
    },
    "click .startButton":function(event){
        event.preventDefault();
        var date = new Date();
        var startTime = date.toLocaleTimeString();

        Session.set("startTime", startTime);
        $('.stopButton').attr('disabled', false).removeClass('disabled');
    },
    "click .stopButton":function(event){
        event.preventDefault();
        var date = new Date();
        var endTime = date.toLocaleTimeString();

        Session.set("endTime", endTime);
        $('.projectWork').show();

        // set the data in the form
        $('.projectID').val(Session.get('selectedProject'));
        $('.startTime').val(Session.get('startTime'));
        $('.endTime').val(Session.get('endTime'));
    }
});

Template.workOnProject.rendered = function(){
    console.log('testlog');
    $('.selectProject').hide();
    $('.startButton, .stopButton').attr('disabled', true).addClass('disabled');
}

