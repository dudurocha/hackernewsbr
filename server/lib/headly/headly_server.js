(function () {
    if (!Meteor.headly) {        
        Meteor.headly = {};
    }
    
    if (!Meteor.headly._options) {
        Meteor.headly._options = {};
    }
    
    Meteor.headly.config = function(options) {
        Meteor.headly._options = options || Meteor.headly._options;
    };
    
    var connect = __meteor_bootstrap__.require("connect");
    __meteor_bootstrap__.app
    .use(connect.query())
    .use(function(req, res, next) {
        if (req.headers['user-agent'].indexOf('facebookexternalhit') !== -1) {
            res.writeHead(200, {'Content-Type': 'text/html'});
                
            if (!Meteor.headly._options.tagsForRequest) {
                throw Error('headly was not configured with tagsForRequest function.');
            }

            var head = Meteor.headly._options.tagsForRequest(req);
            
            if (head) {
                res.write('<head>');
                res.write(head);
                res.write('</head>');
            }
            res.end();
        }
         else {
            next();   
        }
    });
})();