const request = require('request');
const cheerio = require('cheerio');

request('https://www.bridestory.com/blog', (error, response, html) => {
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
            const date = $(el).find('h4 span.date').text();

            console.log(title, link, image, content, date);
        });
    }
});