const got = require('got');
const cheerio = require('cheerio');
const UMAP_URL = 'https://umap.eus/joerak/azkenak';

export default async function getJoerak(hours) {
  try {
    const response = await got(`${UMAP_URL}/${hours}`);
    const html = await response.body;
    const $ = cheerio.load(html);
    const joerak = $('ul.unstyled.cloud')
      .find('a')
      .map(function () {
        const joera = {
          url: $(this).attr('href'),
          name: $(this).text()
        };

        return joera;
      })
      .get();
    return {
      joerak,
      hours,
      error: false
    }
  } catch (error) {
    return {
      joerak: [],
      error: true
    };
  }
}
