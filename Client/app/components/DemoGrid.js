import React from 'react';

import { Grid, GridColumn as Column, GridCellProps, GridCell, GridToolbar, GridDetailRow } from '@progress/kendo-react-grid';

import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products.js';

class CustomCell extends GridCell {
    render() {
        return (
            <td>
                <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
            </td>
        );
    }
}

class DemoGrid extends React.Component {
    constructor(props) {
        super(props);
        var initialFilter = {
            logic: "and",
            filters: [{ field: "ProductName", operator: "contains", value: "Chef" }]
        };
        this.state = {
            data: this.GetProducts(initialFilter),
            filter: initialFilter
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
        var data = sampleProducts.slice();
        return filterBy(data, filter);
    }

    render() {
        return (
            <div>
                <Grid
                    data={this.state.data}
                    filterable={true}
                    filter={this.state.filter}
                    filterChange={this.filterChange}
                    style={{ maxHeight: '420px' }}
                >
                    <Column field="ProductID" title="ID" filterable={false} width="40px" />
                    <Column field="ProductName" title="Product Name" />
                    <Column field="FirstOrderedOn" title="First Ordered On" width="240px" filter="date" format="{0:d}" />
                    <Column field="UnitPrice" title="Unit Price" width="180px" filter="numeric" format="{0:c}" />
                    <Column field="Discontinued" title="Discontinued" width="130px" filter='boolean' cell={CustomCell} />
                </Grid>
            </div>
        );
    }
}

module.exports = DemoGrid
