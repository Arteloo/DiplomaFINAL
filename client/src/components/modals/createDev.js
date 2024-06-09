import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';

const CreateDev = ({show, onHide}) => {
    return(
    <Modal
        show={show}
        onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создать производителя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control className='mb-3'
                placeholder={'Введите наименование организации'}
            />
            <Form.Control className='mb-3'
                placeholder={'Введите сокращенную ссылку на сайт'}
            />
            <Form.Control className='mb-3'
                placeholder={'Введите ИНН'} maxLength={12}
            />
            <Form.Control className='mb-3'
                placeholder={'Введите ОГРН'} maxLength={13}
            />
            <Form.Control className='mb-3'
                placeholder={'Введите телефон'} maxLength={15}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateDev;