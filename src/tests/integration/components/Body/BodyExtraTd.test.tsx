import React from 'react';
import {shallow} from 'enzyme';
import {BodyExtraTd} from '../../../../components/Body';
import * as jsonData from '../../../fixtures/data.json';
import {BodyExtraTdProps} from '../../../../types';


describe('<BodyExtraTd/>', () => {
    it('should to be true && have one wrapper ~> <td/>', function () {
        // @ts-ignore
        const kidsArray = jsonData[0].kids.has_relatives.records;
        const params = {
            colSpan: 10,
            kidsArray: {
                label: 'test',
                value: kidsArray
            },
            path: '0'
        } as BodyExtraTdProps;
        const component = shallow(<BodyExtraTd {...params}/>);
        expect(component).toBeTruthy();
        expect(component.find('.data-table__td-kit').length).toBe(1);
    });
});
