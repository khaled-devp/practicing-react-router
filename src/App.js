
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Products from './components/Navbar/Products';
import Home from './components/Navbar/Home';
import Main from './layout/main';
import FriendsDetails from './components/Navbar/FriendsDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      {path:'/home', loader: async () =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
       element: <Home></Home>},
       {path:'/home/:friendId', loader: async ({params}) =>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
       element: <FriendsDetails></FriendsDetails>},
      {path: '/about', element: <About></About>},
      {path: '/contact', element: <Contact></Contact>},
    {path: '/Products', element: <Products></Products>},
    {path: '*', element: <div>This route is not found!</div>},
    ]},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
