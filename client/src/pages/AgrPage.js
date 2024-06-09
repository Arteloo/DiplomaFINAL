import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { useParams } from 'react-router-dom';
import {Row} from 'react-bootstrap';

const AgrPage = () => {
    
    const {Material} = useContext(Context)
    const {id} = useParams()
    return (
        <>
        </>
    );
};

export default AgrPage;