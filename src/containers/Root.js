import React from 'react'

import SimpleTable from './SimpleTable';
import SelectRow from './SelectRow';
import CellEdit from './CellEdit';
import CellEditBlurToSave from './CellEditBlurToSave';

const Root = () => (
  <div>
    <SimpleTable />
    <SelectRow />
    <CellEdit />
    <CellEditBlurToSave />
  </div>
);

export default Root;
