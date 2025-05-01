import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        {/* Der <Outlet /> wird ersetzt durch die passende untergeordnete Seite – z.B. LandingPage, PortfolioPage, usw., je nachdem, welche Route aktiv ist. */}
        <Outlet />
      </main>
    </>
  );
}
