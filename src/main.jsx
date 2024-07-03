import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout'
import Dashboard from './Component/Dashboard/Dashboard'
import StudentList from './Component/StudentList/StudentList'
import AddStudent from './Component/Add_Student/AddStudent'
import Edit from './Component/Edit/Edit'
import SearchPanel from './Component/Search/SearchPanel'
import { LogIn } from './Component/LogIn/LogIn'
import { SignUp } from './Component/SignUp/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "student-list",
        element: <StudentList />
      },
      {
        path: "add-student",
        element: <AddStudent />
      },
      {
        path: "edit/:id",
        element: <Edit />
      },
      {
        path: "search",
        element: <SearchPanel />
      },
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "signup",
        element: <SignUp />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
