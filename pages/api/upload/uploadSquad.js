import { connectDB } from '@/util/database';

export default async function upload(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('highlightor');
    const { squad, publicId, author, nickname, league, team } = req.body;
    const teamName = decodeURIComponent(team);
    const postInfo = {
      squad,
      publicId,
      author,
      nickname,
      league,
      teamName,
      up: 0,
      view: 0,
    };
    try {
      const result = await db.collection('squad_board').insertOne(postInfo);
      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: '서버 에러', err });
    }
  } else {
    return res.status(405).json({ error: '허용되지 않는 메소드' });
  }
}
