//server will live here

//create a reference to the express module, store a pointer to the express module
let express = require('express');

//create a instance of the express server
let app = express();

let path = require('path');

const port = 3000;

app.listen(port);
console.log('server listening at http://localhost/$(port)');

//app.use(express.static('COMP308-Lab1'))
//app.use('/', express.static('COMP308-Lab1'))
app.use(express.static(path.join(html_Folder, 'root.html')));

//routing

//third route is '/contact' change to use if nodemon
app.get('/contact', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    //res.end("this is the contact page");
    res.send("this is the express contact page");
    next();
});

//second route is '/about'
app.get('/about', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    res.send("this is the express about page");

    next();
});

//first route is, root of my website
app.get('/', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    res.send("welcome to expres root page!");

    next();
});
