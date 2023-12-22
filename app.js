const express = require('express');
const app = express();

const names = ['walid', 'ali', 'lyna', 'sifou', 'mahdi', 'yacine', 'mimou', 'Med'];


app.get('/', (req, res) => {
    console.log('Request received'); // Add this line
    const calcule = Math.floor(Math.random() * names.length);
    const randomName = names[calcule];
    res.send(`<h1>Hello</h1> ${randomName}`);
});



app.listen(5000);
