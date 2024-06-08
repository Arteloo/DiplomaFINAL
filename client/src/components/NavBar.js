import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
const NavBar = observer(() => {
    const loc = useNavigate()
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant='dark' className='sticky-top justify-content-between'>
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none', fontSize: 20}} to={MAIN_ROUTE}>RefraMap</NavLink>
                    {user.isAdmin ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Dropdown className='me-5'>
                            <Dropdown.Toggle variant='outline-light'>Создать</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                <Dropdown.Item>Создать пользователя</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant='outline-light' onClick={()=> loc(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={'outline-light'} className="ms-3" onClick={() => loc(LOGIN_ROUTE)}>Выйти</Button>
                        </Nav>
                    : user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} className="ms-3"  onClick={() => loc(LOGIN_ROUTE)}>Выйти</Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <NavLink to={REGISTRATION_ROUTE}>
                        <Button variant={'outline-light'} onClick={() => {user.setIsAdmin(true)}} className="ms-3">Авторизация</Button></NavLink>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;