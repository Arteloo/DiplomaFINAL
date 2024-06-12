import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createZone } from '../../http/RefAPI';

const CreateZone = observer(({show, onHide}) => {
    const {Material} = useContext(Context)
    const [Zona, setZona] = useState('')
    const [MachinaId, setMachinaId] = useState(null)
    const [MachinaName, setMachinaName] = useState(null)
    const addZone = () => {
      createZone({name: Zona, MachineId: MachinaId}).then(data => {
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
          Создать зону футеровки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{MachinaName || 'Выберите агрегат'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Machines.map(Mach =>
                        <Dropdown.Item onClick={e => setMachinaId(Mach.id) + setMachinaName(Mach.name)} key={Mach.id}>{Mach.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mb-3'
                value={Zona}
                onChange={e => setZona(e.target.value)}
                placeholder={'Введите зону футеровки'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addZone}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
});

export default CreateZone;