export let count = 0;
export const cc = val => {
	// switch (val) {
	// 	case 2:
	// 	case 3:
	// 	case 4:
	// 	case 5:
	// 	case 6:
	// 		count += 1;
	// 		break;
	// 	case 7:
	// 	case 8:
	// 	case 9:
	// 		break;
	// 	case 10:
	// 	case 'J':
	// 	case 'Q':
	// 	case 'K':
	// 	case 'A':
	// 		count -= 1;
	// 		break;
	// }

	if ([2, 3, 4, 5, 6].includes(val)) {
		count += 1;
	} else if ([10, 'J', 'Q', 'K', 'A'].includes(val)) {
		count -= 1;
	}

	return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
};

export const resetCount = () => (count = 0);
