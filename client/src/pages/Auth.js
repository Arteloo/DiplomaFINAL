import React from 'react';
import { Button, Card, Container, Row, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const loc = useLocation()
    const isLogin = loc.pathname === LOGIN_ROUTE
    console.log(loc)
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card className='p-5'>
                <Form>
                <h2 className='d-flex m-auto justify-content-center align-items-center mb-3'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form.Control className='mt-2' placeholder='Введите ваш e-mail...'/>
                    <Form.Control className='mt-2' placeholder='Введите ваш пароль'/>
                    <Row className='d-flex justify-content-evenly'>
                    {isLogin ? 
                    <div className='d-flex justify-content-between mt-1 mb-3'>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></div>
                    : 
                    <div className='d-flex justify-content-between mt-1 mb-3'>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                    }
                    <Button variant='outline-success'>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;