import React from 'react';
import DevList from '../components/DevList';
import { Container } from 'react-bootstrap';
import AgrList from '../components/AgrList';

const Apparatus = () => {
    return (
        <div>
        <h2 align='center' className='mt-2'>Высокотемпературные агрегаты</h2>
        <Container className='d-flex justify-content-between mb-3'>
            <AgrList/>
        </Container>
        </div>
    );
};

export default Apparatus;