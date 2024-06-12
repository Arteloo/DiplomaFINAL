import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { createMachine } from '../../http/RefAPI';

const CreateApparat = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addMachine = () => {
     createMachine({name: value}).then(data => {
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
          Создать агрегат
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={'Введите название'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addMachine}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateApparat;