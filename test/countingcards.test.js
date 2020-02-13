import * as cards from '../countingcards.js';

describe('Card counting feature', () => {
	test('Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet', () => {
		[2, 3, 4, 5, 6].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('5 Bet');
	});

	test('Cards Sequence 7, 8, 9 should return 0 Hold', () => {
		cards.resetCount();
		[7, 8, 9].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('0 Hold');
	});

	test('Cards Sequence 10, J, Q, K, A should return -5 Hold', () => {
		cards.resetCount();
		[10, 'J', 'Q', 'K', 'A'].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('-5 Hold');
	});

	test('Cards Sequence 3, 7, Q, 8, A should return -1 Hold', () => {
		cards.resetCount();
		[3, 7, 'Q', 8, 'A'].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('-1 Hold');
	});

	test('Cards Sequence 2, 2, 10 should return 1 Bet', () => {
		cards.resetCount();
		[2, 2, 10].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('1 Bet');
	});

	test('Cards Sequence 3, 2, A, 10, K should return -1 Hold', () => {
		cards.resetCount();
		[3, 2, 'A', 10, 'K'].forEach(num => cards.cc(num));
		expect(cards.cc(7)).toBe('-1 Hold');
	});
});
