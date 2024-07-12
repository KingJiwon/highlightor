import '../styles/styles.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Header from '../components/Header';

export const metadata = {
  title: 'Highlightor',
  description: 'Fc온라인 하이라이트 저장소',
};

export default async function RootLayout({ children, modal }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <html>
      <body>
        <Header user={user} />
        {children} {modal}
      </body>
    </html>
  );
}
