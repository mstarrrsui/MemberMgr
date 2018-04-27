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
import members from "../data/property_forms.json";

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

const isNull = function(data) {
  if(data == null || data === 'NULL'){
      return true;
  }else{
      return false;
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
    this.selectionChange = this.selectionChange.bind(this);
  }

  filterChange(event) {
    const filter = event.filter;
    this.setState(() => ({
      data: this.GetProducts(filter),
      filter
    }));
  }

  selectionChange(event) {
    event.dataItem.selected = !event.dataItem.selected;
    this.forceUpdate();
  }

  createFullDocNumber(doc) {
    const num = isNull(doc.DocNumber) ? '' : doc.DocNumber;
    const edition = isNull(doc.Edition) ? '' : doc.Edition;
    return num + ' ' + edition;
  }

  GetProducts(filter) {
    const data = members.slice(0, 500).map( d => ({ NumberPlus: this.createFullDocNumber(d),selected: false, ...d}));
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
          selectedField="selected"
          selectionChange={ this.selectionChange }
          style={{ maxHeight: "720px", minHeight: "400px" }}>
            <Column field="selected" width="50px" />
            <Column field="NumberPlus" title="Doc Number" />
            <Column field="Name" title="Doc Name" />
        </Grid>
      </div>
    );
  }
}

module.exports = DemoGrid;
