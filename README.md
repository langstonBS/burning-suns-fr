<!-- The name of the project
Names of the team members
A description of the project

The overall problem domain and how the project solves those problems
Semantic versioning, beginning with version 1.0.0 and incremented as changes are made

A list of any libraries, frameworks, or packages that your application requires in order to properly function

Instructions that the user may need to follow in order to get your application up and running on their own computer

Clearly defined API endpoints with sample responses

Clearly defined database schemas -->

# Burning Suns

Burning Suns is a simple web app for the cosmically curious, designed and built over a five-day sprint as a part of [Alchemy Code Lab](https://www.alchemycodelab.com/)'s curriculum.

This app was built in **Node** and **React**, with heavy dependence on the **Material UI** library for front-end rendering.

This repository contains the React app only. The deployed Node server is available on [Heroku](https://stark-mesa-84010.herokuapp.com/), and the code can be viewed on its separate [repository](https://github.com/PeepTheMoon/burning-suns-be).

The deployed application can be viewed at [https://burningsuns.herokuapp.com/](https://burningsuns.herokuapp.com/).

## Development Team

🌠 Langston Beckwith-Stanley [@langstonBS](https://github.com/langstonBS)

🌠 Rachel Donahue [@PeepTheMoon](https://github.com/PeepTheMoon)

🌠 Nikki Kiga [@nikki-kiga](https://github.com/nikki-kiga)

🌠 Melissa Smoot [@smooto](https://github.com/smooto)

## Description

Burning Suns was designed as a companion app for stargazers. Once registered and logged in, users are able to find up-to-date astronomical and weather data for a given location through a search, and save locations to their profile for ongoing reference. Users can also write notes and shooting-star wishes, save them to their profile, and reference them later by location or date.

This app was built for educational and demonstrative purposes, and isn't intended for serious public use. User profile data, including saved locations and journal entries, will persist between sessions, but aren't guaranteed to persist long-term.

## Setup

To download the React app and install dependencies:

```bash
git clone https://github.com/langstonBS/burning-suns-fr.git
cd burning-suns-fr
npm i
```

Simple as that. To view the app locally, use `npm run start`. Other scripts can be found in `package.json`.

Note that the Node server isn't included in this repo -- you can find its code on a [separate repository](https://github.com/PeepTheMoon/burning-suns-be).

## Dependencies

```json
"@material-ui/core": "^4.9.14",
"@material-ui/icons": "^4.9.1",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.5.0",
"@testing-library/user-event": "^7.2.1",
"jest-enzyme": "^7.1.2",
"moment": "^2.25.3",
"react": "^16.13.1",
"react-calendar": "^3.1.0",
"react-date-picker": "^8.0.1",
"react-datepicker": "^2.16.0",
"react-dom": "^16.13.1",
"react-router-dom": "^5.2.0",
"react-scripts": "3.4.1",
"superagent": "^5.2.2"
```
