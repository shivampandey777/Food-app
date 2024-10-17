import './App.css'
import Login from './auth/Login'
// import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import VerifyEmail from './auth/VerifyEmail';
import HeroSection from './components/HeroSection';
import MainLayout from './layout/MainLayout';
import Profile from './components/Profile';

import SearchPage from './components/SearchPage';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';
import Restaurant from './admin/Restaurant';
import AddMenu from './admin/AddMenu';
import Orders from './admin/Orders';
import Success from './components/Success';
import { useUserStore } from './store/useUserStore';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from './components/Loading';
import { useTheme } from 'next-themes';
import { useThemeStore } from './store/useThemeStore';

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />
  }
  return children;
}

const AuthenticatedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if(isAuthenticated && user?.isVerified){
    return <Navigate to="/" replace />
  }
  return children;

}
const AdminRoutes = ({children}:{children: React.ReactNode}) => {
  const {user, isAuthenticated} = useUserStore();
  if(!isAuthenticated){
    return <Navigate to="/login" replace />
  }
  if(!user?.admin){
    return <Navigate to="/" replace />
  }
  return children;
}
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes><MainLayout /></ProtectedRoutes>,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/search/:text",
        element: <SearchPage />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      //admin routes or adim services start from here
      {
        path: "/admin/restaurant",
        element: <AdminRoutes><Restaurant /></AdminRoutes>,
      },
      {
        path: "/admin/menu",
        element: <AdminRoutes><AddMenu /></AdminRoutes>,
      },
      {
        path: "/admin/orders",
        element:<AdminRoutes><Orders /></AdminRoutes> ,
      },
      {
        path: '/order/status',
        element: <Success />,
      }
    ]
  },
  {
    path: '/login',
    element: <AuthenticatedRoutes><Login /></AuthenticatedRoutes>,
  },
  {
    path: '/signup',
    element: <AuthenticatedRoutes><Signup /></AuthenticatedRoutes>,
  },
  {
    path: '/forgot-password',
    element:<AuthenticatedRoutes><ForgotPassword /></AuthenticatedRoutes> ,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
  },

]);

function App() {
  const  initializeTheme = useThemeStore((state:any) =>  state.initializeTheme );
   const  {isCheckingAuth, checkAuthentication} = useUserStore();
   //checking auth every time page loaded
   useEffect(()=>{
    checkAuthentication();
    initializeTheme(); 
   },[checkAuthentication]);
    if(isCheckingAuth){
      return <Loading />
    }
  return (
    <>
      <RouterProvider router={appRoutes}>

      </RouterProvider>
      {/* <Login /> */}

    </>
  )
}

export default App
