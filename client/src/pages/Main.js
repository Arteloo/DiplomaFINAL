import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MainList from '../components/MainList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchClasses, fetchDevs, fetchMachines, fetchProperties, fetchProportions, fetchRefs, fetchSpecial, fetchZones } from '../http/RefAPI';
import { checkUsers } from '../http/userAPI';

const Main = observer(() => {
    const {Material, user} = useContext(Context)
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
    if(user.isAdmin == true) {
        checkUsers().then(data => Material.setUsers(data))
    }
    return (
        <Container style={{height: window.innerHeight - 54}}>
            <h2 className='d-flex justify-content-center'>Огнеупорные материалы</h2>
        <Container className='d-flex justify-content-center'>
            <MainList/>
        </Container>
        </Container>
    );
});

export default Main;