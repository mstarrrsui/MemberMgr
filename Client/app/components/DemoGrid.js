import React from "react";

import {
  Grid,
  GridColumn as Column,
  GridCellProps,
  GridCell,
  GridToolbar,
  GridDetailRow
} from "@progress/kendo-react-grid";

import { filterBy } from "@progress/kendo-data-query";
import members from "../data/members.json";

const CustomCell = ({dataItem, field}) => {
  (
    <td>
      <input
        disabled
        type="checkbox"
        checked={dataItem[field]}
      />
    </td>
  );
}

class DemoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.GetProducts(null),
      filter: null
    };
    this.filterChange = this.filterChange.bind(this);
  }

  filterChange(event) {
    const filter = event.filter;
    this.setState(() => ({
      data: this.GetProducts(filter),
      filter
    }));
  }

  GetProducts(filter) {
    var data = members.slice();
    return filter ? filterBy(data, filter) : data;
  }

  render() {

    const { data, filter } = this.state;

    return (
      <div>
        <Grid
          data={ data }
          filterable={ true }
          filter={ filter }
          filterChange={ this.filterChange }
          style={{ maxHeight: "720px", minHeight: "400px" }}>
            <Column field="MemberFirstName" title="First Name" />
            <Column field="MemberLastName" title="Last Name" />
            <Column field="StreetAddress" title="Address" />
        </Grid>
      </div>
    );
  }
}

module.exports = DemoGrid;
