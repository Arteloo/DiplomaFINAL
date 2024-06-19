import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { DEV_ROUTE } from '../utils/consts';

const DevItem = ({mat}) => {
    const navigata = useNavigate()
    return(
        <Col md={3} className={'mt-3'} >
            <Card style={{width: 200, height: 200, cursor: 'pointer'}} border={'dark'} className='mt-5 d-flex justify-content-center align-items-center' onClick={() => navigata(DEV_ROUTE + '/' + mat.id)}>
            <div className='d-flex justify-content-center align-items-center'>
                        <a href={'http://'+ mat.link} style={{textDecoration: 'none'}}>{mat.link}</a>
                    </div>
                <div className='d-flex justify-content-center align-items-center' align='center'  >{mat.Name}</div>
                {/*<Button variant='outline-success' onClick={() => navigata(DEV_ROUTE + '/update/' + mat.id)}>Обновить</Button>*/}
            </Card>
        </Col>
    );
};

export default DevItem;