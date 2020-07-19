import getJoerak from '../../../lib/scrapping';

export default async (req, res) => {
  if (req.method === 'GET') {
    const joerak = await getJoerak(24);
    res.status(200).json(joerak);
  } else {
    res.status(405).json({ message: 'Only GET method allowed' });
  }
};
