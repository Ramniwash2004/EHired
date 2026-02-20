import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/App-layout'
import Onboarding from './pages/Onboarding'
import Landing from "./pages/landing";
import PostJob from "./pages/PostJob";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import SavedJobs from "./pages/SavedJobs";
import JobPage from "./pages/Job";
import { ThemeProvider } from "./components/theme-provider";

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/post-job',
        element:<PostJob/>
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>
      },
      {
        path:'/saved-jobs',
        element:<SavedJobs/>
      },
      {
        path: "/job/:id",
        element: (
          <JobPage />
        ),
      },
    ],
  },
]);

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
