import React, { useContext, useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { Context } from '../..';

const CreateDev = ({show, onHides}) => {
    const {Material} = useContext(Context)
    let id = Array.from(Material.Developers).filter(it =>
        it.id == Material.Developers.length
    )
    id = id[0].id + 1

    return (
        <Modal show={show} onHide={onHides} size="lg"centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить производителя
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control className='mb-3' readOnly defaultValue={'Id производителя: ' + id}/>
                <Form.Control className='mb-3' placeholder={'Введите название организации'}/>
                <Form.Control className='mb-3' placeholder={'Введите ссылку на сайт организации (при наличии)'}/>
                <Form.Control className='mb-3' placeholder={'Введите ИНН организации'} maxLength={10}/>
                <Form.Control className='mb-3' placeholder={'Введите ОГРН организации'} maxLength={13}/>
                <Form.Control className='mb-3' placeholder={'Введите телефон организации'} maxLength={15}/>
             </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' onClick={onHides}>Сохранить</Button>
          <Button variant='outline-danger' onClick={onHides}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
};

export default CreateDev;