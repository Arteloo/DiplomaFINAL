import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown, DropdownItem } from 'react-bootstrap';

const ZoneDropdown = observer(() => {
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
            return (
                <Dropdown className='mt-5'>
                <Dropdown.Toggle bg='dark' variant='dark'>{Material.selectedZone.name || 'Зона футеровки'}</Dropdown.Toggle>
                <Dropdown.Menu>
                {MatRefs.map(Zona => 
                <DropdownItem variant='dark' 
                active={Zona.id === Material.selectedZone.id}
                onClick={() => Material.setSelectedZone(Zona)}
                key={Zona.name}>
                    {Zona.name}
                </DropdownItem>
                )}
                </Dropdown.Menu>
                </Dropdown>
            ); 
        })
export default ZoneDropdown;