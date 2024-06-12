import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Dropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createRef } from '../../http/RefAPI';

const CreateRef = observer(({show, onHide}) => {
    const {Material} = useContext(Context)
    const [DevaId, setDevaId] = useState(null)
    const [DevaName, setDevaName] = useState(null)
    const [RefName, setRefName] = useState('')
    const [File, setFile] = useState(null)
    const [Ali, setAli] = useState('')
    const [Fer, setFer] = useState('')
    const [Sia, setSia] = useState('')
    const [Zra, setZra] = useState('')
    const [Caa, setCaa] = useState('')
    const [Mga, setMga] = useState('')
    const [Cra, setCra] = useState('')
    const [Cua, setCua] = useState('')
    const [Refra, setRefra] = useState('')
    const [Pressa, setPressa] = useState('')
    const [Poros, setPoros] = useState('')
    const [TKLA, setTKLA] = useState('')
    const [Termos, setTermos] = useState('')
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const AddRef = () => {
        const formData = new FormData()
        formData.append('name', RefName)
        formData.append('Al', Ali)
        formData.append('Fe', Fer)
        formData.append('Si', Sia)
        formData.append('Zr', Zra)
        formData.append('Ca', Caa)
        formData.append('Mg', Mga)
        formData.append('Cr', Cra)
        formData.append('Cug', Cra)
        formData.append('PressPoint', Pressa)
        formData.append('Porosity', Poros)
        formData.append('TKLR', TKLA)
        formData.append('Thermosity', Termos)
        formData.append('InfoId', Material.selectedInfo.id)
        formData.append('SpecialInfoId', Material.selectedSpec.id)
        formData.append('DeveloperId', DevaId)
        formData.append('MachineId', Material.selectedMachine.id)
        formData.append('ZoneId', Material.selectedZone.id)
        formData.append('Refractorisity', Refra)
        formData.append('img', File)
        createRef(formData).then(data => 
            Material.setSelectedMachine = {},
            Material.setSelectedZone = {},
            Material.setSelectedInfo = {},
            Material.setSelectedSpec = {},
            onHide()
        )
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
            <Dropdown className='mb-3 '>
                <Dropdown.Toggle variant='outline-dark'>{DevaName || 'Выберите производителя'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {Material.Developers.map(it => 
                        <Dropdown.Item onClick={e => setDevaId(it.id) + setDevaName(it.Name)} variant='dark' 
                        key={it.id}>
                            {it.Name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                value={RefName}
                onChange={(e) => setRefName(e.target.value)}
                placeholder={'Введите наименование огнеупорного материала'}
            />
            <Form.Control className='mb-3 me-3'
                onChange={selectFile}
                type='file' placeholder='Выберите изображение'
            />
            </div>
            <hr/>
            <h4 align='left' className='mb-3'>Состав</h4>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                value={Ali}
                onChange={(e) => setAli(e.target.value)}
                placeholder={'Оксид алюминия, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Fer}
                onChange={e => setFer(e.target.value)}
                placeholder={'Оксид железа, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Sia}
                onChange={e => setSia(e.target.value)}
                placeholder={'Оксид кремния, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Zra}
                onChange={e => setZra(e.target.value)}
                placeholder={'Оксид циркония, масс. %'}
            />
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
            <Form.Control className='mb-3 me-3'
                value={Caa}
                onChange={e => setCaa(e.target.value)}
                placeholder={'Оксид кальция, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Mga}
                onChange={e => setMga(e.target.value)}
                placeholder={'Оксид магния, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Cra}
                onChange={e => setCra(e.target.value)}
                placeholder={'Оксид хрома, масс. %'}
            />
            <Form.Control className='mb-3 me-3'
                value={Cua}
                onChange={e => setCua(e.target.value)}
                placeholder={'Углерод, масс. %'}
            />
            </div>
            <hr/>
            <h4 align='left' className='mb-3'>Свойства</h4>
            <div className='d-flex flex-row justify-content-evenly'>
                <Form.Control className='mb-3 me-3'
                value={Refra}
                onChange={e => setRefra(e.target.value)}
                placeholder={'Огнеупорность, °C'}
                />
                <Form.Control className='mb-3 me-3'
                value={Pressa}
                onChange={e => setPressa(e.target.value)}
                placeholder={'Предел прочности на сжатие, МПа'}
                />
                <Form.Control className='mb-3 me-3'
                value={Poros}
                onChange={e => setPoros(e.target.value)}
                placeholder={'Открытая пористость, %'}
                />
            </div>
            <div className='d-flex flex-row justify-content-around'>
                <Form.Control className='mb-3 me-5'
                value={TKLA}
                onChange={e => setTKLA(e.target.value)}
                placeholder={'ТКЛР, 1/(°C)'}
                />
                <Form.Control className='mb-3 me-3'
                value={Termos}
                onChange={e => setTermos(e.target.value)}
                placeholder={'Термостойкость, теплосмен'}
                />
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={AddRef}>Сохранить</Button>
        <Button variant='outline-danger'onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreateRef;