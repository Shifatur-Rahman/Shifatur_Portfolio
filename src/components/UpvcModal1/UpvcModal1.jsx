import React from 'react'
import { useState } from 'react';
import {Button, Table, Modal} from 'react-bootstrap';

const UpvcModal1 = (props) => {

    const { title, category, code, size  } = props;

    const values = [true];
    const [lgShow, setLgShow] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
        setLgShow(breakpoint);
      setShow(true);
    }

    console.log(code);

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
        <tr>
      <td>
        {
            code.split("/").map((color, index) => (
                 <td> {code} </td>
            ))
        }
          
      </td>
      <td>Mark</td>
      </tr>
      </tbody>

      </Table>
          
        </Modal.Body>
      </Modal>




      {/* <Modal show={show} lgShow={lgShow} onHide={() => setShow(false)}>
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
      </thead> */}

      {/* {item.color.split("/").map((color, index) => (
                                    <td
                                      style={{
                                        //fontSize: "8px",
                                        backgroundColor: color,
                                        cursor: "pointer",
                                        width: "5px"
                                      }}
                                      key={index}
                                    ></td>
                                  ))} */}

      {/* <tbody>
        <tr>
          
            {
            code.map(item=>{
                <td> {item.longCode} </td>
            })
            }
           
          <td>Mark</td>
        </tr>
      </tbody> */}

    {/* </Table>
          
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default UpvcModal1;