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