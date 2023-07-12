import React from 'react'
import { shallow } from 'enzyme'
import { screen } from '@testing-library/react'
import CardsDetails from './cardsDetails'

describe('Edit Product Product Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<CardsDetails/>);
    });


    it('renders one carddDetails React component', () => {
        let role=screen.findAllByRole("CardText")
        expect(role.length=1).toBeTruthy();
    })
    it('renders one card links React component', () => {
        let role=screen.findAllByRole("CardLink")
        expect(role.length=2).toBeTruthy();
    })
    it('renders one card body React component', () => {
        let role=screen.findAllByRole("CardBody")
        expect(role.length=2).toBeTruthy();
    })
    
    
})
