import React from 'react';
import {shallow} from 'enzyme';
import {TheadKidLabel} from '../../../../components/Thead';


describe('TheadKidLabel', () => {
    it('should render th', () => {
        const params = {
            label: 'Test',
            size: 10
        } as any;
        const component = shallow(<TheadKidLabel {...params}/>);
        component.find('.data-table__kit-label th');
        expect(component.length).toBe(1);
    })
});
