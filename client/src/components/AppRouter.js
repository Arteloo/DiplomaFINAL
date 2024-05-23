import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = false
    return (
        <switch>
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path='*' element={<Navigate replace to={MAIN_ROUTE} /> }/>
        </Routes>
        </switch>
    );
};

export default AppRouter;