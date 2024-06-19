import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createRef, searchRefractories } from '../../http/RefAPI';

const SearchRefractories = observer(({show, onHide}) => {
    const {Material} = useContext(Context)
    const SearchRef = () => {
        searchRefractories(Material.selectedMachine.id, Material.selectedZone.id, Material.selectedInfo.id,  Material.selectedSpec.id, 
             Material.searchRef, Material.searchPress, Material.searchPor).then(data => 
                Material.setRefractories(data),
                onHide())
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
            Поиск огнеупоров
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <h4 align='left' className='mb-3'>Область применения</h4>
            <div className='d-flex flex-row justify-content-evenly'>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{Material.selectedMachine.name || 'Выберите агрегат'}</Dropdown.Toggle>
                <Dropdown.Menu>
                {Material.Machines.map(Mach =>
                <Dropdown.Item variant='dark' onClick={() => Material.setSelectedMachine(Mach)}
                key={Mach.id}>
                    {Mach.name}
                </Dropdown.Item>
            )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{Material.selectedZone.name || 'Выберите зону футеровки'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Zones.map(Zona => 
                        <Dropdown.Item variant='dark' 
                        onClick={() => Material.setSelectedZone(Zona)}
                        key={Zona.name}>
                            {Zona.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3'>
                <Dropdown.Toggle variant='outline-dark'>{Material.selectedInfo.Class || 'Выберите класс'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Infos.map(it => 
                        <Dropdown.Item variant='dark' 
                        onClick={() => Material.setSelectedInfo(it)}
                        key={it.id}>
                            {it.Class}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-3 '>
                <Dropdown.Toggle variant='outline-dark'>{Material.selectedSpec.Spec || 'Выберите область прим-я'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.SpecInfos.map(it => 
                        <Dropdown.Item variant='dark' 
                        onClick={() => Material.setSelectedSpec(it)}
                        key={it.id}>
                            {it.Spec}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <hr/>
            <h4 align='left' className='mb-3'>Эксплуатационные свойства</h4>
            <div className='d-flex flex-row justify-content-evenly'>
                <Form.Control className='mb-3 me-3'
                onChange={e => Material.setSelectedRef(e.target.value)}
                placeholder={'Огнеупорность, °C, не более'}
                />
                <Form.Control className='mb-3 me-3'
                onChange={e => Material.setSelectedPress(e.target.value)}
                placeholder={'Предел прочности на сжатие, МПа, не более'}
                />
                <Form.Control className='mb-3 me-3'
                onChange={e => Material.setSelectedPor(e.target.value)}
                placeholder={'Открытая пористость, %, не более'}
                />
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={SearchRef}>Поиск</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default SearchRefractories;