/*
var Firebase = require("firebase-admin");
*/

var express = require("express");


// Create HTTP Server
var app = express();
var server = require("http").createServer(app);
// Attach Socket.io server 
var io = require("socket.io")(server);
// Indicate port 3000 as host
var port = process.env.PORT || 3500;
/*
// Create a new firebase reference
var serviceAccount = require('./serviceAccountKey.json');
var admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://conference-41c70.firebaseio.com/'
  });
*/

// Make the server listens on port 3000
server.listen(port, function() {
  console.log("Server listening on port %d", port);
});

// Routing to static files
app.use(express.static(__dirname + "/public"));

// Socket server listens on connection event
io.on("connection", function(socket) {
  console.log("Connected and ready!");
  
  // firebase reference listens on value change, 
  // and return the data snapshot as an object
  firebaseRef.on("value", function(snapshot) {
    var colorChange = snapshot.val();
    
    // Print the data object's values
    console.log("snapshot R: " + colorChange.r);
    console.log("snapshot B: " + colorChange.b);
    console.log("snapshot G: " + colorChange.g);
  });
});








var firebase = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');


var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://conference-41c70.firebaseio.com/'
});




var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Vous êtes bien connecté !');
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
});


server.listen(3000);
