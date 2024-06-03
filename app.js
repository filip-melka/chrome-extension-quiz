const CATEGORY = document.getElementById('category')
const QUESTION = document.getElementById('question')
const OPTIONS = document.getElementById('options')

async function nextQuestion() {
	const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
	if (res.ok) {
		const data = await res.json()
		const { category, question, correct_answer, incorrect_answers } =
			data.results[0]

		CATEGORY.innerHTML = category
		QUESTION.innerHTML = question

		OPTIONS.innerHTML = '' // remove previous buttons
		// insert incorrect answers
		incorrect_answers.forEach((incorrectAnswer) => {
			OPTIONS.innerHTML += `<button>${incorrectAnswer}</button>`
		})

		// insert correct answer at random position
		const index = Math.round(Math.random() * (incorrect_answers.length + 1))
		const CORRECT_BUTTON = document.createElement('button')
		CORRECT_BUTTON.innerHTML = correct_answer
		index < incorrect_answers.length
			? OPTIONS.insertBefore(CORRECT_BUTTON, OPTIONS.childNodes[index])
			: OPTIONS.appendChild(CORRECT_BUTTON)
	}
}

nextQuestion()
