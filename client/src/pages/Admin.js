import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AGR_ROUTE, DEV_ROUTE, OGNE_ROUTE } from '../utils/consts';
import CreateApparat from '../components/modals/createApparat';
import CreateClass from '../components/modals/createClass';
import CreateSpecial from '../components/modals/createSpecial';
import CreateZone from '../components/modals/createZone';
import CreateDev from '../components/modals/createDev';
import CreateRef from '../components/modals/createRef';

const Admin = () => {
    const nav = useNavigate()
    const [ApparatVisible, setApparatVisible] = useState(false)
    const [ClassVisible, setClassVisible] = useState(false)
    const [SpecialVisible, setSpecialVisible] = useState(false)
    const [ZoneVisible, setZoneVisible] = useState(false)
    const [DevVisible, setDevVisible] = useState(false)
    const [RefVisible, setRefVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}} onClick={() => nav(DEV_ROUTE)}>Производители</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}} onClick={() => nav(AGR_ROUTE)}>Агрегаты</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}}>Зоны футеровки</Button>
            <Button variant={'outline-dark'} className='mt-3' style={{fontSize: 28}}>Классы огнеупоров</Button>
            <Button variant={'outline-dark'} className='mt-3 mb-3' style={{fontSize: 28}}>Области применения</Button>
            <hr/>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setDevVisible(true)}>Создать производителя</Button>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setApparatVisible(true)}>Создать агрегат</Button>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setZoneVisible(true)}>Создать зону футеровки</Button>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setClassVisible(true)}>Создать класс</Button>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setSpecialVisible(true)}>Создать область применения</Button>
            <Button variant={'outline-success'} className='mt-3' style={{fontSize: 28}} onClick={() => setRefVisible(true)}>Создать огнеупор</Button>
            <CreateApparat show={ApparatVisible} onHide={() => setApparatVisible(false)}/>
            <CreateClass show={ClassVisible} onHide={() => setClassVisible(false)}/>
            <CreateSpecial show={SpecialVisible} onHide={() => setSpecialVisible(false)}/>
            <CreateZone show={ZoneVisible} onHide={() => setZoneVisible(false)}/>
            <CreateDev show={DevVisible} onHide={() => setDevVisible(false)}/>
            <CreateRef show={RefVisible} onHide={() => setRefVisible(false)}/>
        </Container>
    );
};

export default Admin;