import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function signup(req, res) {
  if (req.method === 'POST') {
    const { nickname, email, password } = req.body;
    const db = (await connectDB).db('highlightor');
    try {
      if (
        !nickname ||
        !email ||
        !password ||
        nickname === '' ||
        email === '' ||
        password === ''
      ) {
        return res.status(409).send('빈 항목이 존재합니다.');
      }

      if (
        await db.collection('user_cred').findOne({ nickname: `${nickname}` })
      ) {
        return res.status(409).json({ err: '해당 닉네임은 사용중입니다.' });
      }
      if (await db.collection('user_cred').findOne({ email: `${email}` })) {
        return res.status(409).json({ err: '이미 가입 된 이메일입니다.' });
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      await db.collection('user_cred').insertOne(req.body);
      return res.status(200).send('가입이 완료되었습니다!');
    } catch (err) {
      console.error(err);
      return res.status(500).send('서버 에러');
    }
  }
  return res.status(405).send('Method Not Allowed');
}
