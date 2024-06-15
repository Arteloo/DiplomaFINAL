import React, { useContext} from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Context } from '..';
import { useNavigate, useParams, } from 'react-router-dom';
import { deleteRef } from '../http/RefAPI';
import { MAIN_ROUTE } from '../utils/consts';

const MaterialPage = () => {
    let {Material} = useContext(Context)
    let {id} = useParams()
    const loc = useNavigate()
    let mat = Array.from(Material.Refractories).find(it =>
        it.id == id
    )
    let props = Array.from(Material.Proportions).find(it => 
        it.id == mat.ProportionId
    )
    let propers = Array.from(Material.Properties).find(it =>
        it.id == mat.PropertyId
    )
    let classicName = Array.from(Material.Infos).find(it =>
        it.id == mat.InfoId
    )
    let Specia = Array.from(Material.SpecInfos).find(it =>
        it.id == mat.SpecialInfoId
    )
    const {DeveloperId} = mat
    let Deva = Array.from(Material.Developers).find(it=> 
        it.id == DeveloperId
    )
    const deleteRefa = () => {
        deleteRef(id).then(data => {})
    }
    return (
        <>
        <Container>
        <h2 align='center' className='mt-2'>{mat.name}</h2>
            <Row className='d-flex justify-content-between align-items-center'>
            <Col md={4} className='d-flex align-items-center'>
                <Image height={300} width={300} src={process.env.REACT_APP_API_URL +'/'+ mat.img}/>
            </Col>
            <Col md={4} className='d-flex align-items-center'>
                <Card className='d-flex flex-column align-items-left justify-content-center p-4'style={{width: 450, height: 225, fontSize: 20}}>
                <Row>Класс огнеупора: {classicName.Class}</Row>
                <Row>Область применения: {Specia.Spec}</Row>
                </Card>
            </Col>
            <Col md={4} className='d-flex align-items-center'>
                <Card className='d-flex flex-column align-items-left justify-content-center p-4' style={{width: 500, height: 350, fontSize: 20}}>
                <Row><p>{propers.TKLR == 0 ? 'ТКЛР: не указан' : "ТКЛР: " + propers.TKLR +' [1/(°C)]'}</p></Row>
                <Row><p>{propers.Thermosity == 0 ? 'Термостойкость: не указана' : 'Термостойкость: ' + propers.Thermosity + ' теплосмен'} </p></Row>
                <Row><p>{propers.PressPoint == 0 ? 'Предел прочности на сжатие: не указан' : 'Предел прочности на сжатие: ' + propers.PressPoint + ' МПа'} </p></Row>
                <Row><p>{propers.Porosity == 0 ? 'Открытая пористость: не указана' : 'Открытая пористость: ' + propers.Porosity + ' %'} </p></Row>
                <Row><p>{propers.Refractorisity == 0 ? 'Огнеупорность: не указана' : 'Огнеупорность: ' + propers.Refractorisity + ' °C'} </p></Row>
                <Row><p>Производитель: {Deva.Name}, {Deva.link}</p></Row>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'> <h2 align='left'>Химико-минеральный состав</h2>
            <Row style={{background: 'lightgray', padding: 10}}>{props.Al == 0 ? 'Оксид алюминия: не указан' : 'Оксид алюминия: '  + props.Al + ' %'}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{props.Fe == 0 ? 'Оксид железа: не указан' : 'Оксид железа: '  + props.Fe + ' %'}</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{props.Si == 0 ? 'Оксид кремния: не указан' : 'Оксид кремния: '  + props.Si + ' %'}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{props.Zr == 0 ? 'Оксид циркония: не указан' : 'Оксид циркония: '  + props.Zr + ' %'}</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{props.Ca == 0 ? 'Оксид кальция: не указан' : 'Оксид кальция: '  + props.Ca + ' %'}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{props.Mg == 0 ? 'Оксид магния: не указан' : 'Оксид магния: '  + props.Mg + ' %'}</Row>
            <Row style={{background: 'lightgray', padding: 10}}>{props.Cr == 0 ? 'Оксид хрома: не указан' : 'Оксид хрома: '  + props.Cr + ' %'}</Row>
            <Row style={{background: 'transparent', padding: 10}}>{props.Cug == 0 ? 'Углерод: не указан' : 'Углерод: '  + props.Cug + ' %'}</Row>
            </Row>
            <Button variant='outline-danger' onClick={deleteRefa}>удалить</Button>
        </Container>

        </>
    );
};

export default MaterialPage;