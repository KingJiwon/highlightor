import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function signup(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const db = (await connectDB).db('highlightor');
    try {
      if (!email || !password || email === '' || password === '') {
        res.status(409).send('빈 항목이 존재합니다.');
      }
      if (await db.collection('user_cred').findOne({ email: `${email}` })) {
        res.status(409).send('이미 존재하는 이메일입니다.');
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      await db.collection('user_cred').insertOne(req.body);
      res.status(200).send('가입이 완료되었습니다!');
    } catch (err) {
      console.error(err);
      res.status(500).send('서버 에러');
    }
  }
}
