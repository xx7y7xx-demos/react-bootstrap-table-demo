import React from 'react'

import CellEdit from './CellEdit';
import CellEditBlurToSave from './CellEditBlurToSave';
import SelectRow from './SelectRow';
import SimpleTable from './SimpleTable';
import TableStyle from './TableStyle';

const Root = () => (
  <div>
    <SimpleTable />
    <SelectRow />
    <CellEdit />
    <CellEditBlurToSave />
    <TableStyle />
  </div>
);

export default Root;
