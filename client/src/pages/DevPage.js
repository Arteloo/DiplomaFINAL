import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '..';
import { useParams } from 'react-router-dom';

const DevPage = () => {
    
    const {Material} = useContext(Context)
    const {id} = useParams()
    let DevId = Array.from(Material.Developers).filter(it =>
        it.id == id
    );
    DevId = DevId[0]
    return (
        <Container>
            <h2 align='center' className='mt-2'>{DevId.Name}</h2>
        </Container>
    );
};

export default DevPage;