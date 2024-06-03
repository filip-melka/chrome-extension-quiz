async function fetchQuestion() {
	const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
	if (res.ok) {
		const json = await res.json()
		const data = json.results[0]
		console.log(data)
	}
}

fetchQuestion()
