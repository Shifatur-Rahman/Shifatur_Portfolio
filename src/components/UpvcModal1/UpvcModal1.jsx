import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpvcModal1 = (props) => {

    const { title, category } = props;

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

  return (
    <>
     {values.map((v, idx) => (

    <Button  key={idx} className="me-2 mb-2 upvcBtn" size="sm" onClick={() => handleShow(v)}>
    Product description
    {typeof v === 'string' && `below ${v.split('-')[0]}`}
    </Button>
      ))}

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <h4>Name: {props.title}</h4>
          <br />
          <h5>Category : {props.category}</h5>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    
    
    </>
  )
}

export default UpvcModal1