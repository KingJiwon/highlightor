import { connectDB } from '@/util/database';

export default async function getPosts(req, res) {
  const db = (await connectDB).db('highlightor');

  if (req.method === 'GET') {
    try {
      const topPosts = await db
        .collection('squad_board')
        .find()
        .sort({ up: -1 }) // upvotes로 정렬
        .limit(5) // 상위 5개 포스트 가져오기
        .toArray();

      res.status(200).json(topPosts); // 포스트를 JSON 형식으로 반환
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
