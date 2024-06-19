import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { registration } from '../../http/userAPI';

const CreateUser = ({show, onHide}) => {

  const [emaila, setEmail] = useState('')
  const [passa, setPass] = useState('')
  const [Rola, setRole] = useState('')
  const [RolaName, setRolaName] = useState('')

  const addUser = () => {
    registration({email: emaila, password: passa, role: Rola}).then(data => onHide())
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
          Создать пользователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control className='mb-3'
                value={emaila}
                onChange={e => setEmail(e.target.value)}
                placeholder={'Введите email пользователя'}
            />
            <Form.Control className='mb-3'
                value={passa}
                onChange={e => setPass(e.target.value)}
                placeholder={'Введите пароль'}
            />
             <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{RolaName || 'Выберите роль'}</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item variant='dark' onClick={() => setRole('ADMIN') + setRolaName('Администратор')}>Администратор</Dropdown.Item>
                <Dropdown.Item variant='dark' onClick={() => setRole('USER') + setRolaName('Технолог')}> Технолог</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addUser}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateUser;