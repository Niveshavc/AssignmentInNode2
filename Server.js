const express = require('express');
const app = express();

app.use( (req, res, next) => {
    console.log('Global middleware 1');
    next()
});

app.use( (req, res, next) => {
    console.log('Global middleware 2');
    next()
});

app.use('/user', (req, res, next) => {
    console.log('1st middleware: /user');
    res.send('Hello from /user');
});



app.use('/', (req, res, next) => {
    console.log('2nd middleware: /');
    res.send('Hello from /');
});


app.listen(3000,()=>{
    console.log('localhost3000')
})
