//STATE - INITIALIZE ARRAY OF FREELANCERS WITH NAME, OCCUPATIONS, AND STARTING PRICES
const names = ['Sandy', 'Bob', 'Charlie', 'Tom', 'Grace', 'Tiffany'];
const occupations = [
	'Programmer',
	'Writer',
	'Driver',
	'Gardener',
	'Baker',
	'Singer',
];

const freelancers = [
	{ name: 'Dr. Slice', price: 25, occupation: 'gardener' },
	{ name: 'Dr. Pressure', price: 51, occupation: 'programmer' },
];

// REFERENCES
const average = document.getElementById('average');
const tableBody = document.querySelector('#table-body');

// INTERVAL TO ADD FREELANCER
const addFreelancerInt = setInterval(addRandomFreelancer, 2000);
// RENDER INITIAL DATA
render();

//FUNCTION TO RENDER INITIAL FREELANCER DATA
function render() {
	const newRows = freelancers.map((freelancer) => {
		const newRow = document.createElement('tr');

		const name = document.createElement('td');
		name.innerText = freelancer.name;

		const occupation = document.createElement('td');
		occupation.innerText = freelancer.occupation;

		const price = document.createElement('td');
		price.innerText = `$${freelancer.price}`;

		newRow.append(name, occupation, price);
		return newRow;
	});

	tableBody.replaceChildren(...newRows);

	// UPDATE AVERAGE RATE + ROUNDING TO NEAREST WHOLE NUMBER
	const newAverage = Math.floor(calcAveragePrice());
	average.innerText = newAverage;
}

function addRandomFreelancer() {
	const name = names[Math.floor(Math.random() * names.length)];
	const occupation =
		occupations[Math.floor(Math.random() * occupations.length)];
	const price = Math.floor(Math.random() * 250);

	freelancers.push({ name, occupation, price });

	render();
	//CODE TO STOP INTERVAL AFTER A CERTAIN AMOUNT
	if (freelancers.length === 12) {
		clearInterval(addFreelancerInt);
	}
}

// CALCULATE AVERAGE FREELANCER PRICE

function calcAveragePrice() {
	// AVERAGE = TOTAL AMOUNT/ TOTAL ELEMENTS
	const total = freelancers.reduce(
		(accum, current) => accum + current.price,
		0
	);
	return total / freelancers.length;
}
