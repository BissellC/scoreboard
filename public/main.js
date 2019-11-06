const main = () => {
	if (teamOneScore === 0) {
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
	if (teamTwoScore === 0) {
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
	if (inningNumber === 1) {
		document
			.querySelector('.inning-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const updateTeamOne = () => {
	const teamOneName = document.querySelector('.team-1-input').value
	console.log('team 1 value is:' + teamOneName)

	document.querySelector('.team-1-name').textContent = teamOneName
}

const updateTeamTwo = () => {
	const teamTwoName = document.querySelector('.team-2-input').value
	console.log('team 2 value is:' + teamTwoName)

	document.querySelector('.team-2-name').textContent = teamTwoName
}
let teamOneScore = 0
let teamTwoScore = 0
let inningNumber = 1

const addOneTeamOne = () => {
	const newTeamOneScore = ++teamOneScore
	console.log('New Team 1 Score is:' + newTeamOneScore)
	document.querySelector('.team-1-score').textContent = newTeamOneScore
	if (newTeamOneScore === 21) {
		document
			.querySelector('.team-1-add-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-add-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document.querySelector('.result-text-1').textContent = 'Wins!'
		document.querySelector('.result-text-2').textContent = 'Loses...'
		document.querySelector('.result-text-1').classList.add('winning-team')
		document.querySelector('.result-text-2').classList.add('losing-team')
		document.querySelector('.team-1-score').classList.add('winning-team')
		document.querySelector('.team-2-score').classList.add('losing-team')
		document
			.querySelector('.inning-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.inning-add-1-button')
			.setAttribute('disabled', 'disabled')
	}
	if (newTeamOneScore >= 1) {
		document
			.querySelector('.team-1-subtract-1-button')
			.removeAttribute('disabled')
	}
	if (newTeamOneScore === 21) {
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const addOneTeamTwo = () => {
	const newTeamTwoScore = ++teamTwoScore
	console.log('New Team 2 Score is:' + newTeamTwoScore)
	document.querySelector('.team-2-score').textContent = newTeamTwoScore
	if (newTeamTwoScore === 21) {
		document
			.querySelector('.team-1-add-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-add-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document.querySelector('.result-text-2').textContent = 'Wins!'
		document.querySelector('.result-text-1').textContent = 'Loses...'
		document.querySelector('.result-text-2').classList.add('winning-team')
		document.querySelector('.result-text-1').classList.add('losing-team')
		document.querySelector('.team-2-score').classList.add('winning-team')
		document.querySelector('.team-1-score').classList.add('losing-team')
		document
			.querySelector('.inning-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.inning-add-1-button')
			.setAttribute('disabled', 'disabled')
	}
	if (newTeamTwoScore >= 1) {
		document
			.querySelector('.team-2-subtract-1-button')
			.removeAttribute('disabled')
	}
	if (newTeamTwoScore === 21) {
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const subtractOneTeamOne = () => {
	const newTeamOneScore = --teamOneScore
	console.log('New Team 1 Score is:' + newTeamOneScore)
	document.querySelector('.team-1-score').textContent = newTeamOneScore
	if (newTeamOneScore === 0) {
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const subtractOneTeamTwo = () => {
	const newTeamTwoScore = --teamTwoScore
	console.log('New Team 2 Score is:' + newTeamTwoScore)
	document.querySelector('.team-2-score').textContent = newTeamTwoScore
	if (newTeamTwoScore === 0) {
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const addOneInning = () => {
	const newInningNumber = ++inningNumber
	console.log('New inning is:' + newInningNumber)
	document.querySelector('.inning-number').textContent = newInningNumber
	if (newInningNumber >= 1) {
		document
			.querySelector('.inning-subtract-1-button')
			.removeAttribute('disabled')
	}
}

const subtractOneInning = () => {
	const newInningNumber = --inningNumber
	console.log('New inning is:' + newInningNumber)
	document.querySelector('.inning-number').textContent = newInningNumber
	if (newInningNumber === 1) {
		document
			.querySelector('.inning-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
}

const reset = () => {
	document.querySelector('.team-1-add-1-button').removeAttribute('disabled')
	document
		.querySelector('.team-1-subtract-1-button')
		.removeAttribute('disabled')
	document.querySelector('.team-2-add-1-button').removeAttribute('disabled')
	document
		.querySelector('.team-2-subtract-1-button')
		.removeAttribute('disabled')
	document.querySelector('.team-1-score').textContent = 0
	teamOneScore = 0
	if (teamOneScore === 0) {
		document
			.querySelector('.team-1-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
	document.querySelector('.team-2-score').textContent = 0
	teamTwoScore = 0
	if (teamTwoScore === 0) {
		document
			.querySelector('.team-2-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}
	document.querySelector('.result-text-2').textContent = ''
	document.querySelector('.result-text-1').textContent = ''
	document.querySelector('.inning-number').textContent = 1
	inningNumber = 1
	if (inningNumber === 1) {
		document
			.querySelector('.inning-subtract-1-button')
			.setAttribute('disabled', 'disabled')
	}

	document.querySelector('.inning-add-1-button').removeAttribute('disabled')
	document.querySelector('.team-1-score').classList.remove('winning-team')
	document.querySelector('.team-2-score').classList.remove('losing-team')
	document.querySelector('.team-2-score').classList.remove('winning-team')
	document.querySelector('.team-1-score').classList.remove('losing-team')
}

document.addEventListener('DOMContentLoaded', main)

document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateTeamOne)

document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateTeamTwo)

document
	.querySelector('.team-1-add-1-button')
	.addEventListener('click', addOneTeamOne)

document
	.querySelector('.team-2-add-1-button')
	.addEventListener('click', addOneTeamTwo)

document
	.querySelector('.team-1-subtract-1-button')
	.addEventListener('click', subtractOneTeamOne)

document
	.querySelector('.team-2-subtract-1-button')
	.addEventListener('click', subtractOneTeamTwo)

document
	.querySelector('.inning-add-1-button')
	.addEventListener('click', addOneInning)

document
	.querySelector('.inning-subtract-1-button')
	.addEventListener('click', subtractOneInning)

document.querySelector('.reset-button').addEventListener('click', reset)
