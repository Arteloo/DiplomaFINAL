import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { createClass } from '../../http/RefAPI';

const CreateClass = ({show, onHide}) => {
   const [value, setValue] = useState('')
   const addClass = () => {
      createClass({Class: value}).then(data => {
      setValue('')
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
          Создать класс огнеупора
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={'Введите название класса'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addClass}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateClass;