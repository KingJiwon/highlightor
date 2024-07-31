import { connectDB } from '@/util/database';

export default async function getSessionUser(req, res) {
  const db = (await connectDB).db('highlightor');
  if (req.method === 'PATCH') {
    const { userEmail, postId, isUpPost } = req.body;
    try {
      const result = isUpPost // 게시물 up 상태
        ? await db
            .collection('user_cred')
            .updateOne(
              { email: `${userEmail}` },
              { $pull: { up_post: postId } },
            ) // 게시물 추천 목록에서 삭제
        : await db
            .collection('user_cred')
            .updateOne(
              { email: `${userEmail}` },
              { $addToSet: { up_post: postId } },
            ); // 게시물 추천 목록에 추가
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json('not allowed method');
  }
}
