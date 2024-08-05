import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function postDetail(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'DELETE') {
    try {
      const { postId } = req.query;
      const result = await db
        .collection('squad_board')
        .deleteOne({ _id: new ObjectId(postId) });
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
    }
  }
}
