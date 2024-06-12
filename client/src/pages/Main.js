import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MachineDropdown from '../components/MachineDropdown';
import ZoneDropdown from '../components/ZoneDropdown';
import ClassDropdown from '../components/ClassDropdown';
import SpecDropdown from '../components/SpecDropdown';
import MainList from '../components/MainList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchClasses, fetchDevs, fetchMachines, fetchProperties, fetchProportions, fetchRefs, fetchSpecial, fetchZones } from '../http/RefAPI';


const Main = observer(() => {
    const {Material} = useContext(Context)
    useEffect(() => {
        fetchMachines().then(data => Material.setMachines(data))
        fetchZones().then(data => Material.setZones(data))
        fetchClasses().then(data => Material.setInfos(data))
        fetchSpecial().then(data => Material.setSpec(data))
        fetchDevs().then(data => Material.setDevelopers(data))
        fetchRefs().then(data => Material.setRefractories(data))
        fetchProportions().then(data => Material.setProportion(data))
        fetchProperties().then(data => Material.setProperties(data))
    })

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
});

export default Main;