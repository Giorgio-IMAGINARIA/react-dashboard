// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var credentials = require('./credentials.js');
var environment = require('./environment.js');
var MemoryStore = expressSession.MemoryStore;
var sessionStore = new MemoryStore();

var PORT = process.env.PORT || 3001;

process.env['API_ADDRESS'] = environment.apiAddress;

var app = express()
app.use(compression())
app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());
app.use(expressSession({

    // PRODUCTION (BETTER THAN MEMORYSTORE - NO MEMORY LEAKS)
    // cookie: {
    //     maxAge: 3600000
    // },
    // PRODUCTION (BETTER THAN MEMORYSTORE - NO MEMORY LEAKS)

    // DEVELOPMENT (USE IT IF PRODUCTION DOES NOT ALLOW THE LOGIN)
    store: sessionStore,
    // DEVELOPMENT (USE IT IF PRODUCTION DOES NOT ALLOW THE LOGIN)
    secret: credentials.cookieSecret,
    resave: false,
    saveUninitialized: false,
    name: 'reactDashboard'

}));

app.post('/credentialsDetails', function(req, res) {
    req.session.loginDetails = req.body;
    req.session.save(function(error) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            status: 'OK'
        }));
    });
});

app.get('/credentialsDetails', function(req, res) {
    console.log('you requested the loginDetails');
    res.json(req.session.loginDetails)
});

app.get('/apiAddress', function(req, res) {
    console.log('you requested the API Address');
    var apiAddressJson = {
        apiAddress: process.env['API_ADDRESS']
    }
    res.json(apiAddressJson)
});

// send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build', 'index.html'))
    if (!req.session.loginDetails) {
        console.log('session not initialised yet');
    } else {
        if (!req.session.loginDetails.token) {
            console.log('session must be refreshed');
            req.session.destroy();
        }
    }
})

app.listen(PORT, function() {
    console.log('The server is running @ PORT:' + PORT + ' and connecting to the API @ URL: ' + process.env['API_ADDRESS']);
})
