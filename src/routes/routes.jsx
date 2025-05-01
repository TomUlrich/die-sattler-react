import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import LandingPage from '../pages/LandingPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import ShopPage from '../pages/ShopPage';

// router (= Object) beschreibt, welche Komponente bei welcher URL angezeigt werden soll:
const router = createBrowserRouter([
  {
    path: '/',
    // Hier ist MainLayout der Eltern-Wrapper für alle Unterseiten:
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'kontakt', element: <ContactPage /> },
      { path: 'shop', element: <ShopPage /> },
    ],
  },
]);

export default router;
