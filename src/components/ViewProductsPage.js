import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../includes/header'
import Container from 'react-bootstrap/Container'
import CardsView from '../includes/cardsView'
import ProductStore from '../stores/ProductStore'
import InitializeActions from '../actions/InitializeProductActions'
import Navbar from 'react-bootstrap/Navbar'
import './../includes/spinner.css';
import ProductApi from '../data/ProductApi'

export default class AllProductsPage extends React.Component {
    constructor(props) {
        super(props)
        this._onChange = this._onChange.bind(this)
        this.state = {
            products: ProductStore.getAllProducts(),
            isLoaded: true
        }

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange)
        InitializeActions.initProducts()

        setTimeout(() => {
            this.setState({ isLoaded: false })
        }, 1000);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({ products: ProductStore.getAllProducts() })
    }


    render() {
        return (
            <div>
                <Header />
                {this.state.isLoaded ? <div><center><div className="loading-spinner"></div></center></div> :
                    <CardsView products={this.state.products} history={this.props.history} />
                }
            </div>
        );
    }
}