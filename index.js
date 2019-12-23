const express = require('express');
const scraper = require('./scraper')

const app = express();

app.get('scaper', (req, res) => {
    scraper
    .getdata(req.params.title)
    .then( articles => {
        res.json(articles)
    })
});


const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on $(port)`);
});