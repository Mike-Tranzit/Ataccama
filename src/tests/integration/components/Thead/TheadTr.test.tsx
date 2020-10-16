import React from 'react';
import {shallow} from 'enzyme';
import {TheadTr} from '../../../../components/Thead';


describe('TheadTr', () => {
    it('should render th', () => {
        const testChildren = 'Test children';
        const component = shallow(<TheadTr label={true}>{<td>{testChildren}</td>}</TheadTr>);
        expect(component.find('tr').contains(testChildren)).toBeTruthy();
    });
});
