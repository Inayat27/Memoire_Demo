import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Layout,Home,About,Crafts,Testimonials,Contact} from './components'




// const router = createBrowserRouter([

//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"/home",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/crafts",
//         element:<Crafts/>
//       }
//       ,
//       {
//         path:"/testimonials",
//         element:<Testimonials/>
//       }
//       ,
//       {
//         path:"/contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ])


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/"  element={<Layout/>}>
      <Route path="/home"  element={<Home/>}></Route>
      <Route path="/about"  element={<About/>}></Route>
      <Route path="/crafts"  element={<Crafts/>}></Route>
      <Route path="/testimonials"  element={<Testimonials/>}></Route>
      <Route path="/contact"  element={<Contact/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
