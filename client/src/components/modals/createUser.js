import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { UpdateOneUser} from '../../http/userAPI';
import {useParams } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';

const UpdateUser = ({show, onHide}) => {
  const {id} = useParams()
  const [emaila, setEmail] = useState('')
  const [passa, setPass] = useState('')
  const [Rola, setRole] = useState('')
  const [RolaName, setRolaName] = useState('')

  const addUser = () => {
    UpdateOneUser(id, emaila, passa, Rola).then(data => onHide())
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
                type='password'
                onChange={e => setPass(e.target.value)}
                placeholder={'Введите пароль'}
            />
             <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{'Выберите роль'}</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item variant='dark' onClick={() => setRole('ADMIN')}>Администратор</Dropdown.Item>
                <Dropdown.Item variant='dark' onClick={() => setRole('USER')}> Технолог</Dropdown.Item>
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

export default UpdateUser;