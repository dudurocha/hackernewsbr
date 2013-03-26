Meteor.serveHead = function (fn) {
    var Fiber = __meteor_bootstrap__.require('fibers');
    var connect = __meteor_bootstrap__.require("connect");
    __meteor_bootstrap__.app
        .use(connect.query())
        .use(function(req, res, next) {
            if (req.headers['user-agent'].indexOf('facebookexternalhit') !== -1) {
                Fiber(function () {
                    res.end('<head>' + (fn(req) || '') + '</head>');
                }).run();
            } else {
                next();   
            }
        });
};
