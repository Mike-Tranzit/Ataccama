import {childVisibleInitialState} from '../../../utils/ChildVisibleInitialState';


describe('childVisibleInitialState', () => {
    it('should be true', () => {
        const lastRemovePath = '0.kids.has_relatives.records.0';
        const path = '0.kids.has_relatives';
        expect(childVisibleInitialState(lastRemovePath, path)).toBeTruthy();
    });

    it('should be false', () => {
        const lastRemovePath = '2.kids.has_relatives.records.0';
        const path = '0.kids.has_relatives';
        expect(childVisibleInitialState(lastRemovePath, path)).toBeFalsy();
    });
})
