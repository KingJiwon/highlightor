import { connectDB } from '@/util/database';

export default async function getSessionUser(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      const result = await db
        .collection('squad_board')
        .find({ author: `${email}` })
        .toArray();
      return res.status(200).json(result);
    } catch (err) {
      return console.error(err);
    }
  } else {
    return res.status(500).json('not allowed method');
  }
}
