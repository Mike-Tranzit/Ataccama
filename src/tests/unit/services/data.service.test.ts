import {DataService} from '../../../services';


describe('DataService', () => {
    const dataService = new DataService();
    const result = dataService.getData();

    it('getData should return object', () => {
       expect(typeof result).toBe('object');
    });

    it('result array gr. than one', () => {
        expect(result.length).toBeGreaterThan(0);
    });
});
