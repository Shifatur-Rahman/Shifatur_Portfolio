import React from 'react'
import {Table} from "react-bootstrap";
import "./Upvc1.css";

const Upvc1 = () => {
  return (
    <>
    <div style={{marginTop:"110px"}}>
    <h1 style={{textAlign:"center"}}>Upvc pipe 1</h1>

    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Code</th>
          <th>Nominal Diameter X Length</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>33490</td>
          <td>4" Plain Bend 90° FF</td>
          
         
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
         
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>

    </div>
    
    </>
  )
}

export default Upvc1