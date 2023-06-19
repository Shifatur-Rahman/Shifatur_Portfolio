import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';

const UpvcModal1 = (props) => {

    const { title, category, code, size  } = props;

    const values = [true];
    const [lgShow, setLgShow] = useState(true);
    const [show, setShow] = useState(false);
    const [pCode, setPCode] = useState("");
  
    function handleShow(breakpoint) {
        setLgShow(breakpoint);
        setShow(true);
        setPCode(code);
    }

 

  return (
    <>

     {values.map((v, idx) => (
    <Button  key={idx} className="me-2 mb-2 upvcBtn" size="sm" onClick={() => handleShow(v)}>
    Product description
    {typeof v === 'string' && `below ${v.split('-')[0]}`}
    </Button>
      ))}
{/* size="lg" */}


<Modal show={show} lgShow={lgShow} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <h4 style={{textTransform:"uppercase"}}>{title}</h4>
        </Modal.Header>
        <Modal.Body>

                <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Code</th>
          <th>Nominal Diameter X Length</th>
        </tr>
      </thead>

      <tbody>
         {pCode.split("/").map((code, index) => (
          <tr key={index}>
            <td>{code}</td>
            <td></td>
          </tr>
          ))}
      </tbody>

      </Table>
          
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UpvcModal1;