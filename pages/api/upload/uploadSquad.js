import { connectDB } from '@/util/database';

export default async function upload(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('highlightor');
    const { squad, publicId, author, nickname } = req.body;
    try {
      const result = await db
        .collection('squad_board')
        .insertOne({ squad, publicId, author, nickname });
      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: '서버 에러', err });
    }
  } else {
    return res.status(405).json({ error: '허용되지 않는 메소드' });
  }
}
