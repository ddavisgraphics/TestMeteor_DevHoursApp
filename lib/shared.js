// Router Functions
// =================================================================
Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function() {
    this.render('home');
}, {name: 'home'});

Router.route('/customers', function() {
    this.render('customerTemplate');
}, {name: 'customers'});

Router.route('/addCustomer', function() {
    this.render('addCustomer');
}, {name: 'addCustomers'});

Router.route('/editCustomer', function(){
    this.render('editCustomer');
}, {name: 'editCustomers'});

Router.route('/addProject', function() {
    this.render('newProject');
}, {name: 'addProject'});

Router.route('/editProject', function() {
    this.render('editProject');
}, {name: 'editProject'});

Router.route('/projectList', function(){
    this.render('projectList');
}, {name: 'projectList'});

Router.route('/work', function(){
    this.render('workOnProject');
}, {name: 'work'});