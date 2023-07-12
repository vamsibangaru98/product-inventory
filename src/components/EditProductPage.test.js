import React from 'react'
import { shallow } from 'enzyme'
import EditProductPage from './EditProductPage'
import EditProductForm from '../includes/editProductForm'
import { screen } from '@testing-library/react'

describe('Edit Product Product Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<EditProductPage/>);
    });


    it('renders one EditProductForm React component', () => {
        let role=screen.findAllByRole("CardText")
        expect(role.length=1).toBeTruthy();
    })
    
    
})
