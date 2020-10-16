import StateCreator from '../../../utils/StateCreator';
import * as jsonFile from '../../fixtures/data.json';

describe('StateCreator', () => {
    const path = '0.kids.has_relatives.records.0';
    let stateCreator: StateCreator;
    beforeEach(() => {
        stateCreator = new StateCreator(jsonFile, path);
    });

    it('records should be empty', () => {
        stateCreator.omitByPath();
        const result = stateCreator.getNewStateAsArray() as any;
        const resultByPath = result[0].kids.has_relatives.records[0];
        expect(resultByPath).toBeFalsy();
    });

    it('kids should be empty', () => {
        stateCreator.omitByPath();
        stateCreator.checkLastPath();
        const result = stateCreator.getNewStateAsArray() as any;
        const lengthOfResult = Object.keys(result[0].kids).length;
        expect(lengthOfResult).toBe(0);
    })
});
