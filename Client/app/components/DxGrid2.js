import * as React from 'react';
import { Card } from 'reactstrap';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4';

import { generateRows } from '../utils/generator';

export default class DxGrid2 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({ length: 8 }),
    };
  }
  render() {
    const { rows, columns } = this.state;

    return (
      <Card>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SortingState
            defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Card>
    );
  }
}