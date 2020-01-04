const express = require('express');
const router = express.Router();
const getArticles = require('./scraper');

const app = express();

app.get('/', (req, res) => {
    const data = getArticles;
    console.log(data)
});


const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on ${port}`);
});


module.exports = router
