import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { useParams } from 'react-router-dom';
import {Row} from 'react-bootstrap';


const DevPage = () => {
    
    const {Material} = useContext(Context)
    const {id} = useParams()
    let DevId = Array.from(Material.Developers).filter(it =>
        it.id == id
    );
    DevId = DevId[0]
    const [DevVisible, setDevVisible] = useState(false)
    return (
        <>
        <Container>
            <h2 align='center' className='mt-2'>{DevId.Name}</h2>
            <Row className='d-flex flex-column m-3'> <h2 align='left'>Информация</h2></Row>
            <Row style={{background: 'lightgray', padding: 10}}>{'ID Производителя: ' + DevId.id}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{DevId.link == null ? 'Ссылка на сайт производителя: не указана' : 'Ссылка на сайт производителя: '  + DevId.link}</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{DevId.INN == null ? 'ИНН производителя: не указан' : 'ИНН производителя: ' + DevId.INN }</Row>
            <Row style={{background: 'transparent', padding: 10}}>{DevId.OGRN == null ? 'ОГРН производителя: не указан' : 'ОГРН производителя: ' + DevId.OGRN }</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{DevId.phone == null ? 'Телефон производителя: не указан' : 'Телефон производителя: ' + DevId.phone }</Row>
            <div className='d-flex flex-row'>
                <Button variant='outline-success' className='d-flex m-3'><a style={{textDecoration: 'none'}} href={'https://zachestnyibiznes.ru/company/ul/' + DevId.OGRN}>Проверить по ОГРН</a></Button>
            </div>
        </Container>
        </>
    );
};

export default DevPage;