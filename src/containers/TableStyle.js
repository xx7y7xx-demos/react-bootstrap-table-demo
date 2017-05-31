import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Dotdotdot from 'react-dotdotdot';

const products = [
  {
      id: 1,
      name: "Item name 1",
      name2: "Item name 1, item name 1-2, item name 1-3, item name 1-4, item name 1-5",
      name3: "Item name 1, item name 1-2, item name 1-3, item name 1-4, item name 1-5",
      name4: "Item name 1",
      name5: "Item name 1",
      name6: "Item name 1",
      name7: "Item name 1",
      name8: "Item name 1",
      name9: "Item name 1",
      price: 100
  },
  {
      id: 2,
      name: "Item name 2",
      name2: "Item name 2",
      name3: "Item name 2",
      name4: "Item name 2",
      name5: "Item name 2",
      name6: "Item name 2",
      name7: "Item name 2",
      name8: "Item name 2",
      name9: "Item name 2",
      price: 100
  },
];

// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
function longNameFormatter(cell, row){
  return (
    <Dotdotdot clamp={2}>
      <p>{cell}</p>
    </Dotdotdot>
  );
}

const TableStyle = () => (
  <div>
    <h2>Table style</h2>
    <BootstrapTable
      className="table-style"
      data={products}
      striped
      hover
      bordered
    >
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" >Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="name2" dataFormat={longNameFormatter}>Product Name2</TableHeaderColumn>
        <TableHeaderColumn dataField="name3" >Product Name3</TableHeaderColumn>
        <TableHeaderColumn dataField="name4" >Product Name4</TableHeaderColumn>
        <TableHeaderColumn dataField="name5" >Product Name5</TableHeaderColumn>
        <TableHeaderColumn dataField="name6" >Product Name6</TableHeaderColumn>
        <TableHeaderColumn dataField="name7" >Product Name7</TableHeaderColumn>
        <TableHeaderColumn dataField="name8" >Product Name8</TableHeaderColumn>
        <TableHeaderColumn dataField="name9" >Product Name9</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
    </BootstrapTable>
  </div>
)

export default TableStyle;
