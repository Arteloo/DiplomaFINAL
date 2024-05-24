import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant='dark'>
            <Container>
                <NavLink  style={{color:'white', textDecoration: 'none'}} to={MAIN_ROUTE}>RefraMap</NavLink>
                    {user.isAdmin ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} className="ms-3">Админ панель</Button>
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