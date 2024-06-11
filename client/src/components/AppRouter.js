import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, admRoutes, freeRoutes } from '../routes';
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAdmin && admRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {freeRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path='*' element={<Navigate replace to={MAIN_ROUTE} /> }/>
        </Routes>
    );
});

export default AppRouter;