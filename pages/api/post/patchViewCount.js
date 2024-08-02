import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function fetchPost(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'PATCH') {
    const { postId } = req.body;
    try {
      const result = await db
        .collection('squad_board')
        .updateOne({ _id: new ObjectId(postId) }, { $inc: { view: 1 } });
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
    }
  }
}
