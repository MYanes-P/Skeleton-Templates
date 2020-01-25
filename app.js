const express = require("express");
const app = express();

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => {
    console.log('Server ready on ', app.settings.port);
})

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('Welcome! /nEnjoy the Skeleton resources.')
})