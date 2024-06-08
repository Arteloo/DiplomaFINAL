import React, { useContext} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { Context } from '../..';
import { useParams } from 'react-router-dom';

const UpdateDev = ({show, onHides}) => {
    const {Material} = useContext(Context)
    const {id} = useParams()
    let ThisDev = Array.from(Material.Developers).filter(it =>
        it.id == id
    )
    ThisDev = ThisDev[0]
    console.log(ThisDev)
    return (
        <Modal show={show} onHide={onHides} size="lg"centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Обновить информацию о производителе
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control className='mb-3' readOnly defaultValue={'Id производителя: ' + id}/>
                <Form.Control className='mb-3' placeholder={'Введите название организации'} defaultValue={ThisDev.Name}/>
                <Form.Control className='mb-3' placeholder={'Введите ссылку на сайт организации (при наличии)'} defaultValue={ThisDev.link}/>
                <Form.Control className='mb-3' placeholder={'Введите ИНН организации'} defaultValue={ThisDev.INN} maxLength={10}/>
                <Form.Control className='mb-3' placeholder={'Введите ОГРН организации'} defaultValue={ThisDev.OGRN} maxLength={13}/>
                <Form.Control className='mb-3' placeholder={'Введите телефон организации'} defaultValue={ThisDev.phone} maxLength={15}/>
             </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-success' onClick={onHides}>Сохранить</Button>
          <Button variant='outline-danger' onClick={onHides}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
};

export default UpdateDev;