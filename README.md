# Investment Sliders

This project is an attempt to mimic + improve the slider component(s) that Homevest currently has in [production](https://homevest.co/homes/St-Louis-MO/5033-Ulena-Avenue-63116/q2GTETisd65WqvfK8BCd7).

## Comparison

Below is a comparison of the sliders in production vs. the sliders in this repo.

### Original Sliders in production

![Production Sliders](https://media.giphy.com/media/WUZzuoD72xl8yG7smn/giphy.gif)

### Improved Sliders

![Improved Sliders](https://media.giphy.com/media/ic0Y0JvF8WhqrXqUPA/giphy.gif)

## Changes

- Add debounce to onChange handler for a smoother UI
- Use semantic HTML for inputs for better accessibility across browsers (vs. using div with roles)

## Installation

In the project directory, install packages using
`npm install`

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
