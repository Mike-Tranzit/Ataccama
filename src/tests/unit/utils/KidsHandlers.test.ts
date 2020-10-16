import {kidsIsNotEmpty} from "../../../utils/KidsHandlers";

describe("kidsIsNotEmpty", () => {
   it('should return false', () => {
      const testObject = {};
      expect(kidsIsNotEmpty(testObject)).toBeFalsy();
   });

   it('should return true and have label && value properties', () => {
      const testObject = {data: {
            records: [{
               id: 1
            }]
         }};
      const result = kidsIsNotEmpty(testObject) as {label: string, value: []};
      expect(result).toBeTruthy();
      expect('label' in result).toBeTruthy();
      expect('value' in result).toBeTruthy();
   })
});
