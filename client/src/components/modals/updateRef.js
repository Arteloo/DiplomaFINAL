import React, { useContext, useState } from 'react';
import {Modal, Button, Form, Dropdown} from 'react-bootstrap'
import { Context } from '../..';
import { useParams } from 'react-router-dom';

const UpdateRef = ({show, onHides}) => {
    const {Material} = useContext(Context)
    const {id} = useParams()
    let ThisMat = Array.from(Material.Refractories).filter(it =>
        it.id == id
    )
    ThisMat = ThisMat[0]
    const {SpecialInfoId, InfoId, DeveloperId} = ThisMat
    let ThisClass = Array.from(Material.Infos).filter(it =>
        it.id == InfoId
    )
    ThisClass = ThisClass[0]
    console.log(ThisMat)
    let Specia = Array.from(Material.SpecInfos).filter(it =>
        it.id == SpecialInfoId
    )
    let ThisDev = Array.from(Material.Developers).filter(it =>
        it.id = DeveloperId
    )
    ThisDev = ThisDev[0]
    Specia = Specia[0]
    return (
        <Modal show={show} onHide={onHides} size="lg"centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Обновить информацию об огнеупоре
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control className='mb-3' defaultValue={ThisMat.name} placeholder='Введите наименование'/>
                <Form.Control className='mb-3' type='file' />
                <div className={'d-flex flex-row mb-3'}>
                    <Dropdown className='me-5'>
                        <Dropdown.Toggle variant='light'>{ThisClass.Class ? ThisClass.Class : 'Выберите класс'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {Material.Infos.map(it =>
                            <Dropdown.Item key={it.id}>{it.Class}</Dropdown.Item>
                        )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant='light'>{Specia.Spec ? Specia.Spec : 'Выберите область прим-я'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {Material.SpecInfos.map(it =>
                            <Dropdown.Item key={it.id}>{it.Spec}</Dropdown.Item>
                        )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant='light'>{ThisDev.Name ? ThisDev.Name : 'Выберите произодителя'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {Material.Developers.map(it =>
                            <Dropdown.Item key={it.id}>{it.Name}</Dropdown.Item>
                        )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' onClick={onHides}>Сохранить</Button>
          <Button variant='outline-danger' onClick={onHides}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
};

export default UpdateRef;