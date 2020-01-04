const request = require('request');
const cheerio = require('cheerio');
const moment = require("moment");


const getArticles = request('https://www.bridestory.com/blog', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.wrapper-white').each((i, el) => {

            const title = $(el)
            .find('.blog-title')
            .text()
            .replace(/\s\s+/g, '');
            const link = $(el).find('a').attr('href');
            const image = $(el).find('.box-pinit a img').attr('data-src');
            const content =$(el).find('p').text();
            // const pictures = $(el).find('box-pinit').text();
            const date = moment.unix($(el).find('h4 span.date').text().slice(3,16), "ll").format('ll');
            // const date = moment(m, 'll').format("ll");
            ;

            

            return {
                title : title,
                link : link,
                image : image,
                content : content,
                date : date
            }

        });
    }
});

console.log(getArticles)

module.exports = {
    getArticles
};