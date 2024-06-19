import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { useParams } from 'react-router-dom';
import {Row} from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import UpdateUser from '../components/modals/createUser';
import { DeleteUser } from '../http/userAPI';


const UserPage = () => {
    
    const {Material, user} = useContext(Context)
    const {id} = useParams()
    let UseId = Array.from(Material.Users).filter(it =>
        it.id == id
    );
    UseId = UseId[0]
    const [UpdUser, setUpdUser] = useState('')
    return (
        <>
        <Container>
            <h2 align='center' className='mt-2'>ID пользователя: {UseId.id}</h2>
            <Row className='d-flex flex-column m-3'> <h2 align='left'>Информация</h2></Row>
            <Row style={{background: 'lightgray', padding: 10}}>{UseId.email == null ? 'Почта пользователя: не указана' : 'Почта пользователя: '  + UseId.email}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{UseId.password == null ? 'Пароль пользователя: неуказан' : 'Пароль пользователя: ' + UseId.password}</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{UseId.role == 'ADMIN' ? 'Роль пользователя: Администратор' : 'Роль пользователя: Технолог-исследователь'}</Row>
            {user.isAdmin ? <Button variant='outline-danger' className='mb-5 mt-3' onClick={() => DeleteUser(id).then(data => alert('Пользователь удален!'))}>Удалить</Button> : <div></div>}
            {user.isAdmin ? <Button variant='outline-success' className='mb-5 ms-5 mt-3' onClick={() => setUpdUser(true)}>Обновить</Button> : <div></div>}
            <UpdateUser show={UpdUser} onHide={() => setUpdUser(false)}/>
        </Container>
        </>
    );
};

export default UserPage;