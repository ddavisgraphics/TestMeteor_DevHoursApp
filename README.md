# Developer Hours Application

This is an application created using the Meteor Framework.  The application was developed
as a test to see if it is possible to use full stack JavaScript to teach an introduction
to web application development.

## Dependencies (Found in Atmosphere or Github)

- Meteor JS Base
- Iron Router
- SimpleSchema (Aldeed's)
- AutoForm (Aldeed's)
- Collection 2 (Aldeed's)
- Manuel Schoebels ms-seo
- fourseven:scss

## Routes

The routes are defined in the lib folder.  Meteor by default compiles all JS files.
Files inside of the `/server` directory are compiled and run on the server.  Files inside
the `/client` directory are compiled and run on the server.  JS inside of the lib folder
is compiled for both client and server rendering.

In a sepaerate JS file you have to create a route.  This is under a shared js file,
in most documentation the folder shared js is kept in is called libs or lib.

``` JavaScript
    Router.route('/', function(){
        this.render('home');
    });
```

### SEO

SEO goes hand in hand with iron router.  Using another package we have created a way to
implement better SEO into our application and ammend header information for each route.
It auto magically grabs code from the database that is an under an SeoCollection.

In order for this to work correctly we must rename our routes.  A correctly name route will
use the following syntax.

``` JavaScript
    Router.route('/', function() {
        this.render('home');
    }, {name: 'home'});
```

Which deviates from the original only by a little bit, see above.

## Databases

The database information for the application is setup entirely from the `/collections` folder.
This will be the area where we pre-fetch information, setup schemas, and work with the MongoDb.

Dependencies have been added for the database.  Using SimpleSchema we can validate information
that goes into the database adding some security to our database.

See collections folder for DB styles.

### AutoForm

Will Use our database schemas to create automatic insert and update forms
to use in our templates, while providing some basic database security.

## Note:

This is not a secure application.  Many of the items that could have been rendered on
the server side have been developed on the client side.  This is just a demonstration
and will need ammended for production use.
