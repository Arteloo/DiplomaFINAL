import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom'
import { OGNE_ROUTE } from '../utils/consts';

const MainItem = ({mat}) => {
    const navigata = useNavigate()
    return(
        <Col md={3} className={'mt-3'} onClick={() => navigata(OGNE_ROUTE + '/' + mat.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className='mt-3'>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL +'/'+ mat.img}/>
                    <div className='d-flex justify-content-center align-items-center'>{mat.name}</div>
            </Card>
        </Col>
    );
};

export default MainItem;