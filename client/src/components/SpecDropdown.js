import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown } from 'react-bootstrap';

const SpecDropdown = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Dropdown className='mt-5'>
        <Dropdown.Toggle bg='dark' variant='dark'>{Material.selectedSpec.Spec || 'Область применения'}</Dropdown.Toggle>
        <Dropdown.Menu>
            {Material.SpecInfos.map(Inf =>
                <Dropdown.Item variant='dark'
                active={Inf.id === Material.selectedSpec.id} 
                onClick={() => Material.setSelectedSpec(Inf)}
                key={Inf.id}
                >
                    {Inf.Spec}
                </Dropdown.Item>
            )}
        </Dropdown.Menu>
        </Dropdown>
    );
});

export default SpecDropdown;