jqb-router
==========

> basic client router based on "director"

    var router = require('jqb-router');
    
    // register a route
    router.on('/foo', function() {
        // do something
    });
    
    // trigger a route
    router.navigate('/foo');
    