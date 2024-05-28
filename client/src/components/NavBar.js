import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant='dark' className='sticky-top'>
            <Container>
                <NavLink  style={{color:'white', textDecoration: 'none'}} to={MAIN_ROUTE}>RefraMap</NavLink>
                    {user.isAdmin ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <div className='dropdown'>
                            <Button className='btn dropdown-toggle' bg='dark' variant={'outline-light'} id='dropDownMenu1' data-bs-toggle="dropdown" aria-expanded="false">Админ панель</Button>
                            <ul className='dropdown-menu'>
                                <li><a href='#' className='dropdown-item'>Добавить огнеупор</a></li>
                                <li><a href='#' className='dropdown-item'>Добавить агрегат</a></li>
                            </ul>
                        </div>
                        <Button variant={'outline-light'} className="ms-3">Выйти</Button>
                        </Nav>
                    : user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} className="ms-3">Выйти</Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAdmin(true)} className="ms-3">Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;