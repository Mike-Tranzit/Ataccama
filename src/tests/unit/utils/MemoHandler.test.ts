import {propsIsEqual} from "../../../utils/MemoHandler";


describe('MemoHandler', () => {
    it('Objects is equal', () => {
        const testObject1 = {id: 1};
        const testObject2 = {id: 1};
        expect(propsIsEqual()(testObject1, testObject2)).toBeTruthy();
    });

    it('Objects is not equal', () => {
        const testObject1 = {id: 1};
        const testObject2 = {id: 2};
        expect(propsIsEqual()(testObject1, testObject2)).toBeFalsy();
    });

    it('item in objects is equal', () => {
        const testObject1 = {id: 1, item: { id: 3}};
        const testObject2 = {id: 2, item: { id: 3}};
        expect(propsIsEqual('item')(testObject1, testObject2)).toBeTruthy();
    });

    it('item in objects is not equal', () => {
        const testObject1 = {id: 1, item: { id: 3}};
        const testObject2 = {id: 2, item: { id: 4}};
        expect(propsIsEqual()(testObject1, testObject2)).toBeFalsy();
    });
});

