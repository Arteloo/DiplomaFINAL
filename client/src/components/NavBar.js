import React, { useContext, useState } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { searchRefs } from '../http/RefAPI';
import SearchRefractories from './modals/searchRefractories';

const NavBar = observer(() => {
    const loc = useNavigate()
    const {Material} = useContext(Context)
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setAuth(false)
        user.setAdmin(false)
        localStorage.clear()
    }
    const [searchRefs, setSearchRefs] = useState('')
    return(
        <Navbar bg="dark" variant='dark' className='sticky-top justify-content-between'>
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none', fontSize: 20}} to={MAIN_ROUTE} onClick={window.location.reload} >{'RefraMap'}</NavLink>
                    {user.isAdmin ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant='outline-light' className='me-3' onClick={()=> setSearchRefs(true)}>Поиск</Button>
                        <Button variant='outline-light' onClick={()=> loc(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={'outline-light'} className="ms-3" onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                    : user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant='outline-light' className='me-3' onClick={()=> setSearchRefs(true)}>Поиск</Button>
                        <Button variant={'outline-light'} className="ms-3"  onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => loc(LOGIN_ROUTE)} className="ms-3">Авторизация</Button>
                        </Nav>
                    }
                    <SearchRefractories show={searchRefs} onHide={() => setSearchRefs(false)}/>
            </Container>
        </Navbar>
    );
});

export default NavBar;