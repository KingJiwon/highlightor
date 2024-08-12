import '../styles/styles.scss';
import AlertContext from '@/hooks/AlertContext';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Highlightor',
  description: 'Fc온라인 하이라이트 저장소',
  icons: {
    icon: '/images/icon.svg',
  },
};

export default async function RootLayout({ children, modal }) {
  return (
    <html>
      <body>
        <Provider>
          <AlertContext>
            <Header />
            {children} {modal}
            <Footer />
          </AlertContext>
        </Provider>
      </body>
    </html>
  );
}
