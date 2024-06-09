import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';

const CreateZone = ({show, onHide}) => {
    const {Material} = useContext(Context)
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
          Создать зону футеровки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>Выберите агрегат</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Machines.map(Mach =>
                        <Dropdown.Item key={Mach.id}>{Mach.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mb-3'
                placeholder={'Введите область применения'}
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

export default CreateZone;