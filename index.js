/**
 * jQbrick Router Wrapper
 */

var director = require('director');

var router;
var isExternal = /^http/;

exports.init = function(routeTable) {
    router = director.Router(routeTable || {}).init();
};

exports.on = function() {
    router.on.apply(router, arguments);
};

exports.navigate = function(path) {
    if (isExternal.test(path)) {
        window.location.assign(path);
    } else {
        path = path.replace(/\/#\//g, '').replace(/#\//g, '');  // clean
        path = ['/', path].join('').replace(/\/\//g, '/');      // add root and clean again
        window.location.hash = path;
    }
    return path;
};
