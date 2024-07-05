import '../styles/styles.scss';
import Header from '../components/Header';

export const metadata = {
  title: 'Highlightor',
  description: 'Fc온라인 하이라이트 저장소',
};

export default function RootLayout({ children, modal }) {
  return (
    <html>
      <body>
        <Header />
        {children} {modal}
      </body>
    </html>
  );
}
