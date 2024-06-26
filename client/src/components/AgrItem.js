import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { AGR_ROUTE } from '../utils/consts';

const AgrItem = ({mat}) => {
    const nav = useNavigate()
    return(
        <>
        <Col md={3} className={'mt-3'} >
            <Card style={{width: 300, height: 200}} border={'dark'} className='mt-5 d-flex justify-content-center align-items-center' onClick={() => nav(AGR_ROUTE + '/'+ mat.id)}>
                <div className='d-inline-flex justify-content-center flex-column' align='center' style={{fontSize: 23}}>{'ID пользователя: ' + mat.id}<span>{mat.email}</span></div>
                {/*<Button variant='outline-success' onClick={() => nav(AGR_ROUTE + '/update/' + mat.id)}>Обновить</Button>
                <Button variant='outline-danger' className='mt-2'>Удалить</Button>*/}
            </Card>
        </Col>
        </>
    );
};

export default AgrItem;