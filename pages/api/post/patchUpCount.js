import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function fetchPost(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'PATCH') {
    const { postId, isAlreadyUp } = req.body;
    try {
      const incrementValue = isAlreadyUp ? -1 : 1; // isAlreadyUp에 따라 증감 값을 설정
      const result = await db
        .collection('squad_board')
        .updateOne(
          { _id: new ObjectId(postId) },
          { $inc: { up: incrementValue } },
        );
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
    }
  }
}
