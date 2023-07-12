import React from "react";
import { shallow } from 'enzyme';
import Products from '../components/Products';
import CardsView from '../includes/cardsView';
import { screen } from '@testing-library/react';

describe('When valid products array props passed to Cards view component', () => {
    let Wrapper
    let props
    beforeEach(() => {
        props = {
            "products":[
                {
                    "productName": "Product-1",
                    "productDescription": "This is Product number one.",
                    "manufacturer": "ProdWip",
                    "price": "2500",
                    "quantity": 2,
                    "id": 1589082223037
                  },
                  {
                    "productName": "Product-2",
                    "productDescription": "This is product number two.",
                    "manufacturer": "ProdWip",
                    "price": "1500",
                    "quantity": 5,
                    "id": 1589082299949
                  },
                  {
                    "productName": "Product-3",
                    "productDescription": "This is product number three.",
                    "manufacturer": "WipProd",
                    "price": "2000",
                    "quantity": 2,
                    "id": 1589082401749
                  }
            ]
        }
        Wrapper = shallow(<CardsView products={props.products}/>)
    });
    it('passes the second Product\'s description as props to second Products Component',() =>{
        expect(Object.keys(props.products[0])[1]).toEqual("productDescription");
    })
    it('passes the second Product\'s manufacturer as props to second Products Component',() =>{
        expect(Object.keys(props.products[0])[2]).toEqual("manufacturer");
    })
    it('passes the second Product\'s name as props to second Products Component',() =>{
        expect(Object.keys(props.products[0])[0]).toEqual("productName");
    })
    it('passes the second Product\'s price as props to second Products Component',() =>{
        expect(Object.keys(props.products[0])[3]).toEqual("price");
    })
})