import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';

const UpvcModal1 = (props) => {

    const { title, category } = props;

    const values = [true];
    // const [fullscreen, setFullscreen] = useState(true);
    const [lgShow, setLgShow] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
        setLgShow(breakpoint);
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

      <Modal show={show} lgShow={lgShow} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <h4 style={{textTransform:"uppercase"}}>{title}</h4>
          {/* <br />
          <h5>{category}</h5> */}
        </Modal.Header>
        <Modal.Body>

        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>code</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
       
      </tbody>
    </Table>
          
           

        </Modal.Body>
      </Modal>
    </>
  )
}

export default UpvcModal1;