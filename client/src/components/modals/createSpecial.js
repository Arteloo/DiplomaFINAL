import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { createSpecial } from '../../http/RefAPI';

const CreateSpecial = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addSpecial = () => {
     createSpecial({Spec: value}).then(data => {
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
          Создать область применения
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={'Введите область применения'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addSpecial}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateSpecial;