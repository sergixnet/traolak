import getJoerak from '../../../lib/scrapping';
import cacheConfig from '../../../lib/cache-config';

let cacheTime = new Date();
const { maxTime } = cacheConfig;
let cacheContent;

export default async (req, res) => {
  const now = new Date();
  if (req.method === 'GET') {
    if (now - cacheTime < maxTime && cacheContent) {
      return res
        .status(200)
        .json({ ...cacheContent, cache_time: cacheTime.getTime() });
    }
    const joerak = await getJoerak(48);
    res.status(200).json({ ...joerak, cache_time: cacheTime.getTime() });
    cacheContent = joerak;
    cacheTime = new Date();
  } else {
    res.status(405).json({ message: 'Only GET method allowed' });
  }
};
