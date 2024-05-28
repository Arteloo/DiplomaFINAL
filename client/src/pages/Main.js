import React from 'react';
import { Container } from 'react-bootstrap';
import MachineDropdown from '../components/MachineDropdown';
import ZoneDropdown from '../components/ZoneDropdown';
import ClassDropdown from '../components/ClassDropdown';
import SpecDropdown from '../components/SpecDropdown';

const Main = () => {
    return (
        <Container className='d-flex justify-content-between' style={{border:'1px solid black'}}>
            <MachineDropdown/>
            <ZoneDropdown/>
            <ClassDropdown/>
            <SpecDropdown/>
        </Container>
    );
};

export default Main;