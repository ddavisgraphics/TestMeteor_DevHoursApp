Template.customerTemplate.helpers({
    // customers loop will loop through all customers
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