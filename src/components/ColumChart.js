import React, { Component } from "react";
import Chart from "react-apexcharts";
import Header from '../includes/header'
import _ from 'lodash';
import ProductApi from "../data/ProductApi";

class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      data: {},
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
  }

  componentDidMount() {
    ProductApi.getAllProducts(productViews => {
      const series = [
        {
          name: productViews[0].productName,
          data: [productViews[0].views]
        },
        {
          name: productViews[1].productName,
          data: [productViews[1].views]
        },
        {
          name: productViews[2].productName,
          data: [productViews[2].views]
        }
      ]
      const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [productViews[0].productName, productViews[1].productName, productViews[2].productName]
        }
      }
      this.setState({ series, options })
    })
    setTimeout(() => {
      this.setState({ isLoaded: false })
    }, 1000);
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.isLoaded ? <div><center><div className="loading-spinner"></div></center></div> :
          <div style={{ marginTop: "3%" }}>
            <center>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              /></center>
          </div>
        }
      </div>
    );
  }
}

export default ColumnChart;