import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import CreateUserPage from './pages/User/create'

const router = createBrowserRouter([
    { path: "/", Component: LoginPage },
    { path: "/login", Component: LoginPage },
    { path: "/home", Component: HomePage },
    { path: "/users/create", Component: CreateUserPage },
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}