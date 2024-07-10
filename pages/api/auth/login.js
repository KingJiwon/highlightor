import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const db = (await connectDB).db('highlightor');
    try {
      const user = await db.collection('user_cred').findOne({ email });
      if (!user) {
        return res.status(401).send('해당 아이디가 존재하지 않음');
      }

      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        return res.status(401).send('비밀번호 틀림');
      }

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send('서버 에러');
    }
  } else {
    return res.status(405).send('허용되지 않는 메소드');
  }
}
