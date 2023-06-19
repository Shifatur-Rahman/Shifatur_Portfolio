import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';

const UpvcModal1 = (props) => {

    const { title, category, code, size, thickness } = props;

    const values = [true];
    const [lgShow, setLgShow] = useState(true);
    const [show, setShow] = useState(false);
    const [pCode, setPCode] = useState("");
    const [pSize, setPSize] = useState("");
    const [pThickness, setPThickness] = useState("");
  
    function handleShow(breakpoint) {
        setLgShow(breakpoint);
        setShow(true);
        setPCode(code);
        setPSize(size);
        setPThickness(thickness);
    }

    console.log(size);
 

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
          {
            thickness ? <th>Thickness(mm)</th> : ""
          }
        </tr>
      </thead>

<tbody>
          <tr>
<td>
          {pCode.split("/").map((code, index) => (
            <p key={index}>{code}</p>
            ))}
</td>

<td>
          {pSize.split("/").map((size, index) => (
            <p key={index}>{size}</p>
            ))}
</td>
{
  thickness ?   <td>
  {pThickness.split("/").map((thickness, index) => (
    <p key={index}>{thickness}</p>
    ))}
</td>       : ""
}
   
          </tr>
        
      </tbody>

      </Table>
          
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UpvcModal1;