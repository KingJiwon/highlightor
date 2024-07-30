import { connectDB } from '@/util/database';

export default async function postDetail(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'GET') {
    try {
      const { league } = req.query;
      const findCursor = db
        .collection('squad_board')
        .find({ league: `${league}` });
      const result = await findCursor.toArray();
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
    }
  }
}
