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
//import { sampleProducts } from './sample-products.js';
import members from "../data/members.json";

class CustomCell extends GridCell {
  render() {
    return (
      <td>
        <input
          disabled
          type="checkbox"
          checked={this.props.dataItem[this.props.field]}
        />
      </td>
    );
  }
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
    this.setState({
      data: this.GetProducts(event.filter),
      filter: event.filter
    });
  }

  GetProducts(filter) {
    var data = members.slice();
    if (filter) return filterBy(data, filter);
    else return data;
  }

  render() {
    return (
      <div>
        <Grid
          data={this.state.data}
          filterable={true}
          filter={this.state.filter}
          filterChange={this.filterChange}
          style={{ maxHeight: "720px", minHeight: "400px" }}
        >
          <Column field="MemberFirstName" title="First Name" />
          <Column field="MemberLastName" title="Last Name" />
          <Column field="StreetAddress" title="Address" />
        </Grid>
      </div>
    );
  }
}

module.exports = DemoGrid;
