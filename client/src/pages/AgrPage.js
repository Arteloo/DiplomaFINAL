import React, { useContext, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { Context } from '..';
import { Form, useNavigate, useParams } from 'react-router-dom';
import {Row} from 'react-bootstrap';

const AgrPage = ({show, onHide}) => {
    
    const {Material} = useContext(Context)
    const {id} = useParams()
    const nav = useNavigate()
    let AgrId = Array.from(Material.Machines).find(it =>
        it.id == id
    );
    return (
        <>
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    );
};

export default AgrPage;