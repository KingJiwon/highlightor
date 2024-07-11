import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const db = (await connectDB).db('highlightor');
    try {
      const user = await db.collection('user_cred').findOne({ email });
      if (!user) {
        return res.status(401).json({ error: '등록되지 않은 이메일입니다.' });
      }

      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        return res
          .status(401)
          .json({ error: '비밀번호를 잘못 입력하셨습니다.' });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: '서버 에러' });
    }
  } else {
    return res.status(405).json({ error: '허용되지 않는 메소드' });
  }
}
