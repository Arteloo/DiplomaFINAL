import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown } from 'react-bootstrap';

const ClassDropdown = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Dropdown className='mt-5' >
        <Dropdown.Toggle bg='dark' variant='dark'>{Material.selectedInfo.Class || 'Класс огнеупора'}</Dropdown.Toggle>
        <Dropdown.Menu>
            {Material.Infos.map(Inf =>
                <Dropdown.Item variant='dark'
                active={Inf.id === Material.selectedInfo.id} 
                onClick={() => Material.setSelectedInfo(Inf)}
                key={Inf.id}
                >
                    {Inf.Class}
                </Dropdown.Item>
            )}
        </Dropdown.Menu>
        </Dropdown>
    );
});

export default ClassDropdown;