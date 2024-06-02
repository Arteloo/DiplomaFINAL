import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant='dark' className='sticky-top justify-content-between'>
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none', fontSize: 20}} to={MAIN_ROUTE}>RefraMap</NavLink>
                    {user.isAdmin ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Dropdown>
                            <Dropdown.Toggle variant='outline-light'>Админ панель</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Добавить пользователя</Dropdown.Item>
                                <Dropdown.Item href="#">Добавить производителя</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Добавить агрегат</Dropdown.Item>
                                <Dropdown.Item href="#">Добавить зону футеровки</Dropdown.Item>
                                <Dropdown.Item href="#">Добавить класс огнеупора</Dropdown.Item>
                                <Dropdown.Item href="#">Добавить область применения</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink to={MAIN_ROUTE}><Button variant={'outline-light'} className="ms-3" onClick={() => {user.setIsAdmin(false); user.setIsAuth(false)}}>Выйти</Button></NavLink>
                        </Nav>
                    : user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <NavLink to={MAIN_ROUTE}><Button variant={'outline-light'} className="ms-3" onClick={() => {user.setIsAdmin(false); user.setIsAuth(false)}}>Выйти</Button></NavLink>
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