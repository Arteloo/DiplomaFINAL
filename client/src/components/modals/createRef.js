import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';

const CreateRef = ({show, onHide}) => {
    const {Material} = useContext(Context)
    let Abobius = []
    let MatRefs = []
    if(Material.selectedMachine.id) {
        for(let i=0; i < Material.Refs.length; i++){
            if(Material.Refs[i].MachineId === Material.selectedMachine.id) {
                Abobius.push(Material.Refs[i].ZoneId)
            }
        }
    }
    for(let i=0; i < Abobius.length; i++) {
        if(Abobius[i] === Material.Zones[i].id) {
            MatRefs.push(Material.Zones[i])
        }
    }
    return(
    <Modal
        show={show}
        onHide={onHide}
        size='xl'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создать огнеупор
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <div className='d-flex flex-row justify-content-evenly'>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{'Выберите агрегат'}</Dropdown.Toggle>
                <Dropdown.Menu>
                {Material.Machines.map(Mach =>
                <Dropdown.Item variant='dark'
                key={Mach.id}>
                    {Mach.name}
                </Dropdown.Item>
            )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>Выберите зону футеровки</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Zones.map(Zona => 
                        <Dropdown.Item variant='dark' 
                        key={Zona.name}>
                            {Zona.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>Выберите класс</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Infos.map(it => 
                        <Dropdown.Item variant='dark' 
                        key={it.id}>
                            {it.Class}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3 '>
                <Dropdown.Toggle variant='outline-dark'>Выберите область прим-я</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Infos.map(it => 
                        <Dropdown.Item variant='dark' 
                        key={it.id}>
                            {it.Class}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3 '>
                <Dropdown.Toggle variant='outline-dark'>Выберите производителя</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Developers.map(it => 
                        <Dropdown.Item variant='dark' 
                        key={it.id}>
                            {it.Name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                placeholder={'Введите наименование огнеупорного материала'}
            />
            <Form.Control className='mb-3 me-3'
                type='file' placeholder='Выберите изображение'
            />
            </div>
            <hr/>
            <h4 align='left' className='mb-3'>Состав</h4>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                placeholder={'Оксид алюминия, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Оксид железа, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Оксид кремния, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Оксид циркония, масс. %'}
            />
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                placeholder={'Оксид кальция, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Оксид магния, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Оксид хрома, масс. %'}
            />
                        <Form.Control className='mb-3 me-3'
                placeholder={'Углерод, масс. %'}
            />
            </div>
            <hr/>
            <h4 align='left' className='mb-3'>Свойства</h4>
            <div className='d-flex flex-row justify-content-evenly'>
                <Form.Control className='mb-3 me-3'
                placeholder={'Огнеупорность, °C'}
                />
                <Form.Control className='mb-3 me-3'
                placeholder={'Предел прочности на сжатие, МПа'}
                />
                <Form.Control className='mb-3 me-3'
                placeholder={'Открытая пористость, %'}
                />
            </div>
            <div className='d-flex flex-row justify-content-around'>
                <Form.Control className='mb-3 me-5'
                placeholder={'ТКЛР, °C'}
                />
                <Form.Control className='mb-3 me-3'
                placeholder={'Термостойкость, МПа'}
                />
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateRef;