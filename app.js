const CATEGORY = document.getElementById('category')
const QUESTION = document.getElementById('question')
const OPTIONS = document.getElementById('options')
const NEXT_BTN = document.getElementById('next-btn')

let correctAnswerIndex

async function nextQuestion() {
	// hide 'next' button
	NEXT_BTN.className = 'hidden'

	const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
	if (res.ok) {
		const data = await res.json()
		const { category, question, correct_answer, incorrect_answers } =
			data.results[0]

		CATEGORY.innerHTML = category
		QUESTION.innerHTML = question

		const options = [...incorrect_answers]

		// insert correct answer at random position
		correctAnswerIndex = Math.round(Math.random() * incorrect_answers.length)
		options.splice(correctAnswerIndex, 0, correct_answer)

		// remove classes from all option buttons
		removeClassesFromOptions()
		// enable option buttons
		OPTIONS.className = ''

		// insert the text into the option buttons and add event listeners
		for (let i = 0; i < options.length; i++) {
			const optionBtn = document.getElementById(`option-${i}`)
			optionBtn.innerHTML = options[i]
			optionBtn.addEventListener('click', () => handleClick(i))
		}
	}
}

function handleClick(index) {
	// disable option buttons
	OPTIONS.className = 'disabled'

	if (index === correctAnswerIndex) {
		document.getElementById(`option-${index}`).className = 'correct'
	} else {
		document.getElementById(`option-${index}`).className = 'incorrect'
		document.getElementById(`option-${correctAnswerIndex}`).className =
			'correct'
	}

	// show 'next' button
	NEXT_BTN.className = ''
}

function removeClassesFromOptions() {
	for (let i = 0; i < OPTIONS.childNodes.length; i++) {
		OPTIONS.childNodes[i].className = ''
	}
}

nextQuestion()
