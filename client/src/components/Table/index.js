import React from "react";
import {Table} from "react-bootstrap";
import "./style.css"


const recordTable = (props) =>{
    console.log(props.auth.times.recordedtime);
return (
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Record of Time</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{props.auth.times}</td>
      <td>Table cell</td>
   
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>

    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
  
    </tr>
  </tbody>
</Table>
)
}

export default recordTable;