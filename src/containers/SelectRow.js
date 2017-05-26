import React from 'react'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

const Root = () => (
  <div>
    <p>
      <a href='http://allenfang.github.io/react-bootstrap-table/docs.html#selectRow'>
        http://allenfang.github.io/react-bootstrap-table/docs.html#selectRow
      </a>
    </p>
    <BootstrapTable
      data={products}
      striped={true}
      hover={true}
      bordered
      selectRow={{
        mode: 'radio',
        clickToSelect: true,
        clickToSelectAndEditCell: true,
        hideSelectColumn: true,
        onSelect: (row, isSelected, e) => {
          alert(JSON.stringify(row));
        }
      }}
    >
        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
    </BootstrapTable>
  </div>
)

export default Root
