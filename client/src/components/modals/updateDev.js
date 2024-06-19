import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';
import { createDev, updateDev } from '../../http/RefAPI';
import { useParams } from 'react-router-dom';

const UpdateDev = ({show, onHide}) => {
  const {id} = useParams()
  const [infVal, setInf] = useState('')
  const [linkVal, setLink] = useState('')
  const [INNVal, setINN] = useState('')
  const [OGRNVal, setOGRN] = useState('')
  const [phoneVal, setPhone] = useState('')
  const updDeveloper = () => {
     updateDev(id, infVal, linkVal, INNVal, OGRNVal, phoneVal).then(data => {
     onHide()
     })
  }
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
          Обновить информацию о производителе
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control className='mb-3'
                value={infVal}
                onChange={e => setInf(e.target.value)}
                placeholder={'Введите наименование организации'}
            />
            <Form.Control className='mb-3'
                value={linkVal}
                onChange={e => setLink(e.target.value)}
                placeholder={'Введите сокращенную ссылку на сайт'}
            />
            <Form.Control className='mb-3'
                value={INNVal}
                 onChange={e => setINN(e.target.value)}
                placeholder={'Введите ИНН'} maxLength={12}
            />
            <Form.Control className='mb-3'
                value={OGRNVal}
                onChange={e => setOGRN(e.target.value)}
                placeholder={'Введите ОГРН'} maxLength={13}
            />
            <Form.Control className='mb-3'
                value={phoneVal}
                onChange={e => setPhone(e.target.value)}
                placeholder={'Введите телефон'} maxLength={15}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={updDeveloper}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UpdateDev;