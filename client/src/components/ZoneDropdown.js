import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown, DropdownItem } from 'react-bootstrap';

const ZoneDropdown = observer(() => {
    const {Material} = useContext(Context)
            return (
                <Dropdown className='mt-5'>
                <Dropdown.Toggle bg='dark' variant='dark'>{Material.selectedZone.name || 'Зона футеровки'}</Dropdown.Toggle>
                <Dropdown.Menu>
                {Material.Zones.map(Zona => 
                <DropdownItem variant='dark' 
                active={Zona.id === Material.selectedZone.id}
                onClick={() => Material.setSelectedZone(Zona)}
                key={Zona.id}>
                    {Zona.name}
                </DropdownItem>
                )}
                </Dropdown.Menu>
                </Dropdown>
            ); 
        })
export default ZoneDropdown;