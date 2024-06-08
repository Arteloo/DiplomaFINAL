import React from 'react';
import { Container } from 'react-bootstrap';
import MachineDropdown from '../components/MachineDropdown';
import ZoneDropdown from '../components/ZoneDropdown';
import ClassDropdown from '../components/ClassDropdown';
import SpecDropdown from '../components/SpecDropdown';
import MainList from '../components/MainList';


const Main = () => {
    return (
        <Container style={{height: window.innerHeight - 54}}>
        <Container className='d-flex justify-content-between mb-3'>
            <MachineDropdown/>
            <ZoneDropdown/>
            <ClassDropdown/>
            <SpecDropdown/>
            </Container>
        <Container className='d-flex justify-content-around'>
            <MainList/>
        </Container>
        </Container>
    );
};

export default Main;