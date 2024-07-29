import '../styles/styles.scss';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Highlightor',
  description: 'Fc온라인 하이라이트 저장소',
};

export default async function RootLayout({ children, modal }) {
  return (
    <html>
      <body>
        <Provider>
          <Header />
          {children} {modal}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
