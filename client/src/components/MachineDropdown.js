import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown } from 'react-bootstrap';

const MachineDropdown = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Dropdown className='mt-5'>
        <Dropdown.Toggle bg='dark' variant='dark'>{Material.selectedMachine.name || 'Высокотемпературный агрегат'}</Dropdown.Toggle>
        <Dropdown.Menu>
            {Material.Machines.map(Mach =>
                <Dropdown.Item variant='dark'
                active={Mach.id === Material.selectedMachine.id} 
                onClick={() => Material.setSelectedMachine(Mach)}
                key={Mach.id}
                >
                    {Mach.name}
                </Dropdown.Item>
            )}
        </Dropdown.Menu>
        </Dropdown>
    );
});

export default MachineDropdown;