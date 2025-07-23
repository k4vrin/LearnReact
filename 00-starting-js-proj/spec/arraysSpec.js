import {transformToObjects} from "../assets/scripts/arrays.js";

describe('transformToObjects', function() {
    it('should yield an array of derived objects', function() {
        const vals = transformToObjects([1, 2]);
        expect(vals).toEqual([{val: 1}, {val: 2}])
    });
});