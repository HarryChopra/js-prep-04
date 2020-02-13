import * as index from '../index.js';

describe('Switch Statements', () => {
	describe('Selecting with many options', () => {
		test('1 should have a value of alpha', () => {
			expect(index.caseInSwitch(1)).toEqual('alpha');
		});
		test('2 should have a value of beta', () => {
			expect(index.caseInSwitch(2)).toEqual('beta');
		});
		test('3 should have a value of gamma', () => {
			expect(index.caseInSwitch(3)).toEqual('gamma');
		});
		test('4 should have a value of delta', () => {
			expect(index.caseInSwitch(4)).toEqual('delta');
		});
	});

	describe('Adding a Default Option in Switch Statements', () => {
		// switchOfStuff("a") should have a value of "apple"
		test('a should have a value of apple', () => {
			expect(index.switchOfStuff('a')).toBe('apple');
		});
		test('b should have a value of bird', () => {
			expect(index.switchOfStuff('b')).toBe('bird');
		});
		test('c should have a value of cat', () => {
			expect(index.switchOfStuff('c')).toBe('cat');
		});
		test('a should have a value of apple', () => {
			expect(index.switchOfStuff('d')).toBe('stuff');
		});
		test('a should have a value of apple', () => {
			expect(index.switchOfStuff(4)).toBe('stuff');
		});
	});

	describe('Multiple Identical Options in Switch Statements', () => {
		test('sequentialSizes(1, 2 ,3) should return "Low"', () => {
			expect(
				index.sequentialSizes(1) || index.sequentialSizes(2) || index.sequentialSizes(3)
			).toEqual('Low');
		});
		test('sequentialSizes(4, 5, 6) should return "Mid"', () => {
			expect(
				index.sequentialSizes(4) || index.sequentialSizes(5) || index.sequentialSizes(6)
			).toEqual('Mid');
		});
		test('sequentialSizes(7, 8, 9) should return "High"', () => {
			expect(
				index.sequentialSizes(7) || index.sequentialSizes(8) || index.sequentialSizes(9)
			).toEqual('High');
		});
	});
});
