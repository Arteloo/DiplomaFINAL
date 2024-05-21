import { Component } from "react"
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, OGNE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Main from "./pages/Main"
import Auth from "./pages/Auth"
import MaterialPage from "./pages/MaterialPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: OGNE_ROUTE + '/:id',
        Component: MaterialPage
    }
]