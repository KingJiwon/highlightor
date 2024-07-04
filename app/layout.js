import '../styles/styles.scss';
import Header from '../components/Header';

export const metadata = {
  title: 'Highlightor',
  description: 'Fc온라인 하이라이트 저장소',
};

export default function RootLayout({ children, auth }) {
  return (
    <html>
      <body>
        {auth}
        <Header />
        {children}
      </body>
    </html>
  );
}
