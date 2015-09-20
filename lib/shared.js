// Router Functions
// =================================================================
Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', function() {
    this.render('home');
});

Router.route('/customers', function() {
    this.render('customerTemplate');
});

Router.route('/addCustomer', function() {
    this.render('addCustomer');
});

Router.route('/editCustomer/', function(){
    this.render('editCustomer');
});

Router.route('/addProject', function() {
    this.render('newProject');
});

Router.route('/work', function(){
    this.render('workOnProject');
});