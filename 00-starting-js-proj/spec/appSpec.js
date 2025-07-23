import {greet, combine} from "../assets/scripts/app.js";

describe('greet() function', function() {
    it('should return the correct greeting message', function() {
        const result = greet('Alice');
        expect(result).toBe('Alice');
    });
});

describe('combine() function', function() {
    it('should return the correct result', function() {
        const result = combine(2, 10, 2);
        expect(result).toBe(10);
    });

    it('should handle division by zero', function() {
        expect(() => combine(2, 10, 0)).toThrow();
    });
});