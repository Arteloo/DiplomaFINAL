import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AGR_ROUTE, DEV_ROUTE, OGNE_ROUTE } from '../utils/consts';

const Admin = () => {
    const nav = useNavigate()
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}} onClick={() => nav(DEV_ROUTE)}>Производители</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}} onClick={() => nav(AGR_ROUTE)}>Агрегаты</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}}>Зоны футеровки</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}}>Классы огнеупоров</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}}>Области применения</Button>
        </Container>
    );
};

export default Admin;