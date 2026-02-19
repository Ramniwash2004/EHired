import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Button} from './components/ui/Button'
import AppLayout from './layouts/app-layout'
import { Landing } from './pages/Landing'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Landing/>
      }
    ]
  }
])

function App() {

  return (
      <RouterProvider router={router} />
   
  )
}

export default App
