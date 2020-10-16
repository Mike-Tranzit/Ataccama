import React from 'react';
import {shallow} from 'enzyme';
import {BodyTd} from '../../../../components/Body';

describe('BodyTd', () => {
    const params = {
        value: 'test',
        firstElement: true,
        firstElementClassNames: ['data-table__td--empty', "data-table__td--open"],
        handleRemove: jest.fn()
    } as any;

   it('component should be true', () => {
       const component = shallow(<BodyTd {...params}/>);
       expect(component).toBeTruthy();
   });

    it('component should have button remove', () => {
        const component = shallow(<BodyTd {...params}/>);
        expect(component.find('button').length).toBe(1);
    });

    it('click remove button should call remove function', () => {
        const component = shallow(<BodyTd {...params}/>);
        const button = component.find('button');
        button.simulate('click');
        expect(params.handleRemove).toHaveBeenCalled();
        expect(params.handleRemove).toHaveBeenCalledTimes(1);
    });

    it('component should not have button remove', () => {
        params.firstElement = false;
        const component = shallow(<BodyTd {...params}/>);
        expect(component.find('button').length).toBe(0);
    });


});
