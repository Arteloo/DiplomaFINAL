
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, AGR_ROUTE, DEV_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, OGNE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Main from "./pages/Main"
import Auth from "./pages/Auth"
import Devs from './pages/Devs'
import DevPage from "./pages/DevPage"
import MaterialPage from "./pages/MaterialPage"
import Apparatus from "./pages/Apparatus"
import { Component } from "react"
import AgrPage from "./pages/AgrPage"

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
        path: AGR_ROUTE + '/update' + '/:id',
        Component: AgrPage
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
    }
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
    },
    {
        path: OGNE_ROUTE + '/:id',
        Component: MaterialPage
    } //НАДО БУДЕТ УБРАТЬ ОТСЮДА КОГДА ЗАКОНЧУ РАЗРАБОТКУ, ДОСТУП ТОЛЬКО АВТОРИЗОВАННЫМ
]