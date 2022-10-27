import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
import FAQ from './components/FAQ/FAQ';
import { Toaster } from 'react-hot-toast';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('https://programming-workshop-server.vercel.app/project')
          },
          {
            path:'/courses',
            element:<Courses></Courses>,
            loader:() => fetch('https://programming-workshop-server.vercel.app/courses')
          },
          {
            path:'/courses/:id',
            element:<CourseDetails></CourseDetails>,
            loader:({params}) => fetch(`https://programming-workshop-server.vercel.app/courses/${params.id}`)
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/faq',
            element:<FAQ></FAQ>
          },
          {
            path:'/checkout/:id',
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader:({params}) => fetch(`https://programming-workshop-server.vercel.app/courses/${params.id}`)
          }
        ]
      }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </div>
  );
}

export default App;
