import React from 'react';
import {shallow} from 'enzyme';
import Wrapper from '../../../components/Wrapper';

describe('Wrapper', () => {

    const tableHasClassKit = (component: any) => component.find('.data-table').hasClass("data-table-kit");

    it('should have data-table-kit class', () => {
       const component =  shallow(<Wrapper dataList={[]} label='Label' path = ''/>);
       expect(tableHasClassKit(component)).toBeTruthy();
    });

    it('should not have data-table-kit class', () => {
        const component =  shallow(<Wrapper dataList={[]} label={false} path = ''/>);
        expect(tableHasClassKit(component)).toBeFalsy();
    });
});
