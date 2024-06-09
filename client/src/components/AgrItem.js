import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { AGR_ROUTE } from '../utils/consts';

const AgrItem = ({mat}) => {
    const navigata = useNavigate()
    return(
        <Col md={3} className={'mt-3'} >
            <Card style={{width: 200, height: 200}} border={'dark'} className='mt-5 d-flex justify-content-center align-items-center '>
            <div className='d-flex justify-content-center align-items-center'>
                    </div>
                <div className='d-flex justify-content-center align-items-center' align='center' style={{fontSize: 24, cursor: 'pointer'}} onClick={() => navigata(AGR_ROUTE + '/' + mat.id)}>{mat.name}</div>
            </Card>
        </Col>
    );
};

export default AgrItem;