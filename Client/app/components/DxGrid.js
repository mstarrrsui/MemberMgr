import * as React from 'react';
import { Card } from 'reactstrap';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4';

import {
  generateRows,
  globalSalesValues,
} from '../utils/generator';

const styles = {
  banking: {
    backgroundColor: '#f5f5f5',
  },
  health: {
    backgroundColor: '#a2e2a4',
  },
  telecom: {
    backgroundColor: '#b3e5fc',
  },
  energy: {
    backgroundColor: '#ffcdd2',
  },
  insurance: {
    backgroundColor: '#f0f4c3',
  },
};

const TableRow = ({ row, ...restProps }) => (
  <Table.Row
    {...restProps}
    // eslint-disable-next-line no-alert
    onClick={() => alert(JSON.stringify(row))}
    style={{
      cursor: 'pointer',
      ...styles[row.sector.toLowerCase()],
    }}
  />
);

export default class DxGrid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'channel', title: 'Channel' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
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
          <Table rowComponent={TableRow} />
          <TableHeaderRow />
        </Grid>
      </Card>
    );
  }
}