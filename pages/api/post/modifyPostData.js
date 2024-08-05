import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function fetchPost(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'PATCH') {
    const { postId, squad, publicId } = req.body;

    // validate postId
    if (!ObjectId.isValid(postId)) {
      res.status(400).json({ error: 'Invalid postId format' });
    }

    try {
      const result = await db
        .collection('squad_board')
        .updateOne(
          { _id: new ObjectId(postId) },
          { $set: { squad, publicId } },
        );

      res.status(200).json({ modifiedCount: result.modifiedCount });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
