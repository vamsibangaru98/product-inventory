import React from 'react';
import { Bar } from 'react-chartjs-2';
import Header from '../includes/header'
import Footer from '../includes/footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ProductApi from '../data/ProductApi';
import _ from 'lodash'
import './../includes/spinner.css';

export default class TopViewedProductsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoaded: true
        }
    }

    // componentDidMount() {
    //     ProductApi.getAllProducts(productViews => {
    //         console.log("data:::", productViews)
    //         const grouped = _(productViews).groupBy('productName').value()
    //         const value = _(productViews).groupBy('views').value()
    //         let labelArray = productViews.productName
    //         console.log("Data:::", Object.keys(grouped), productViews)

    //         const data = {
    //             labels: labelArray,
    //             datasets: [
    //                 {
    //                     label: `Top Viewd Product is: ${productViews.productName} and views are ${productViews.views}`,
    //                     backgroundColor: 'rgba(75,192,192,1)',
    //                     borderColor: 'rgba(0,0,0,1)',
    //                     borderWidth: 2,
    //                     data: productViews.views,
    //                     //Object.keys(grouped).map(key => grouped[key].length)
    //                 }
    //             ]
    //         }
    //         this.setState({ data })
    //     })
    //     setTimeout(() => {
    //         this.setState({ isLoaded: false })
    //     }, 1000);
    // }

    render() {
        return (
            <div>
                <Header />
                {/* {this.state.isLoaded ? <div><center><div className="loading-spinner"></div></center></div> :
                    <div style={{ backgroundColor: "#CCdabb", height: "700px" }}>
                        <Container className="mt-5">
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Card body>
                                        <Bar
                                            data={this.state.data}
                                            options={{
                                                title: {
                                                    display: true,
                                                    text: 'Top Viewed Products',
                                                    fontSize: 20
                                                },
                                                legend: {
                                                    display: true,
                                                    position: 'right'
                                                }
                                            }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                } */}
                <Footer />
            </div>
        );
    }
}
