import React, { useContext, useState } from 'react';
import { Button, Card, Container, Row, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const loc = useLocation()
    const nav = useNavigate()
    const isLogin = loc.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            nav(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card className='p-5'>
                <Form>
                <h2 className='d-flex m-auto justify-content-center align-items-center mb-3'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                    <Form.Control className='mt-2' placeholder='Введите ваш e-mail...' value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className='mt-2' type='password' placeholder='Введите ваш пароль'value={password} onChange={e => setPassword(e.target.value)}/>
                    <Row className='d-flex justify-content-evenly'>
                    {isLogin ? 
                    <div className='d-flex justify-content-between mt-1 mb-3'>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></div>
                    : 
                    <div className='d-flex justify-content-between mt-1 mb-3'>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                    }
                    <Button variant='outline-success' onClick={click}>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;