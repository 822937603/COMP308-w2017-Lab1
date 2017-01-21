//server will live here

let connect = require('connect');

let app = connect();

const port = 3000;

app.listen(port);
console.log('server running at http://localhost:3000/');

//routing

//third route is '/contact'
app.use('/contact', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    res.end("this is the contact page");

    next();
});

//second route is '/about'
app.use('/about', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    res.end("this is the about page");

    next();
});

//first route is, root of my website
app.use('/', (req, res, next) => {
    res.setHeader('Context-Type', 'text/plain');
    res.end("welcome to root page!");

    next();
});
