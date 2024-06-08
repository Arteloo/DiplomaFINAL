import React from 'react';
import DevList from '../components/DevList';
import { Container } from 'react-bootstrap';

const Devs = () => {
    return (
        <div>
        <h2 align='center' className='mt-2'>Производители</h2>
        <Container className='d-flex justify-content-between mb-3'>
            <DevList/>
        </Container>
        </div>
    );
};

export default Devs;