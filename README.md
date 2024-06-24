# Trivia Quiz Chrome Extension

A fun and engaging quiz game that uses the Open [Trivia Database API](https://opentdb.com/api_config.php) to generate random questions from various categories. Built as a Chrome extension, it offers a seamless trivia experience directly in your browser.

https://github.com/filip-melka/chrome-extension-trivia/assets/173664063/97eb6dca-67ed-4812-8356-305655196019

## To run the extension tests

1. Download the Repository:
   - Clone or download this repository to your local machine
2. Load the Extension:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top right corner
   - Click on the "Load unpacked" button and select the folder containing the downloaded repository
3. Launch the Extension:
   - Click on the extension icon next to your search bar
   - Select the "Trivia Quiz" extension to start playing

## Rate limit

Please note that the Open Trivia Database API enforces a rate limit of one request per IP address every 5 seconds. As each question is fetched separately, navigating to the next question before this time limit may temporarily cause the extension to "freeze".


Enjoy your trivia quiz experience!
