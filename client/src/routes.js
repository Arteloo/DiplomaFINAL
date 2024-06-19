
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, AGR_ROUTE, DEV_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, OGNE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Main from "./pages/Main"
import Auth from "./pages/Auth"
import Devs from './pages/Devs'
import DevPage from "./pages/DevPage"
import MaterialPage from "./pages/MaterialPage"
import Apparatus from "./pages/Apparatus"
import { Component } from "react"
import UserPage from "./pages/UserPage"

export const admRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: DEV_ROUTE,
        Component: Devs
    },
    {
        path: DEV_ROUTE + '/:id',
        Component: DevPage
    },
    {
        path: DEV_ROUTE + '/update' + '/:id',
        Component: DevPage
    },
    {
        path: AGR_ROUTE,
        Component: Apparatus
    },
    {
        path: AGR_ROUTE + '/:id',
        Component: UserPage
    }
]
export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: OGNE_ROUTE + '/:id',
        Component: MaterialPage
    },
    {
        path: DEV_ROUTE + '/:id',
        Component: DevPage
    },
]

export const freeRoutes = [
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
    }
]