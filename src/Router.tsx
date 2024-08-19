import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import LoginPage from '@/pages/Login.page';
import AnimalsPage from '@/pages/Animals.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/animals',
    element: <AnimalsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
