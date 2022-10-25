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

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/courses',
            element:<Courses></Courses>
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
          }
        ]
      }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
