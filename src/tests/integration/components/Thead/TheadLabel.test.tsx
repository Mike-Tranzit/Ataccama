import React from 'react';
import {shallow} from 'enzyme';
import {TheadLabel} from '../../../../components/Thead';


describe('TheadLabel', () => {
    it('should render th', () => {
        const testLabel = 'Test label';
        const component = shallow(<TheadLabel label='Test label'/>);
        component.find('th');
        expect(component.length).toBe(1);
        expect(component.html()).toEqual(`<th>${testLabel}</th>`);
        expect(component.text()).toEqual(testLabel);
    });
});
