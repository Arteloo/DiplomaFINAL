import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { DEV_ROUTE } from '../utils/consts';

const DevItem = ({mat}) => {
    const navigata = useNavigate()
    return(
        <Col md={3} className={'mt-3'} >
            <Card style={{width: 200, height: 200}} border={'dark'} className='mt-5 d-flex justify-content-center align-items-center '>
            <div className='d-flex justify-content-center align-items-center'>
                        <a href={'http://'+ mat.link} style={{textDecoration: 'none'}}>{mat.link}</a>
                    </div>
                <div className='d-flex justify-content-center align-items-center' align='center' style={{fontSize: 24, cursor: 'pointer'}} onClick={() => navigata(DEV_ROUTE + '/' + mat.id)}>{mat.Name}</div>
            </Card>
        </Col>
    );
};

export default DevItem;