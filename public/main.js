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
}

const addOneTeamTwo = () => {
	const newTeamTwoScore = ++teamTwoScore
	console.log('New Team 2 Score is:' + newTeamTwoScore)
	document.querySelector('.team-2-score').textContent = newTeamTwoScore
}

const subtractOneTeamOne = () => {
	const newTeamOneScore = --teamOneScore
	console.log('New Team 1 Score is:' + newTeamOneScore)
	document.querySelector('.team-1-score').textContent = newTeamOneScore
}

const subtractOneTeamTwo = () => {
	const newTeamTwoScore = --teamTwoScore
	console.log('New Team 2 Score is:' + newTeamTwoScore)
	document.querySelector('.team-2-score').textContent = newTeamTwoScore
}

const addOneInning = () => {
	const newInningNumber = ++inningNumber
	console.log('New inning is:' + newInningNumber)
	document.querySelector('.inning-number').textContent = newInningNumber
}

const subtractOneInning = () => {
	const newInningNumber = --inningNumber
	console.log('New inning is:' + newInningNumber)
	document.querySelector('.inning-number').textContent = newInningNumber
}

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
