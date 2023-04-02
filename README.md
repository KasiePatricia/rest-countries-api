# Frontend Mentor - REST Countries API with color theme switcher solution with ReactJs

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshots

![](/src/screenshots/img/Screenshot1.png)
![](/src/screenshots/img/Screenshot2.png)

### Links

- Solution URL: (https://www.github.com/KasiePatricia/rest-countries)
- Live Site URL: (https://rest-countries-api-topaz-three.vercel.app/)

## My process

Firstly, created a react app using create-react-app. I went further to create components. I implemented the UI frist

For both the search results page and the single country page, I passed in key and value pair of information through their addresses and used that either in the fetch address or to filter the array of all countries.

I also saved a variable to local storage that keeps tabs on the preferred mode (light mode or dark mode) of the user so they don't have to keep switching every time they open a new page.

### Built with

- React
- JavaScript
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind

### What I learned

- This was my first time putting in a loading screen to accomodate for the awkward waiting phase for API fetching. It was fun.
- I learnt how to use props and state.
- I was able to fetch data from an API
- Also my first time implementing a search function in a website.

## Author

- Website - [Github - Kasie](https://www.github.com/KasiePatricia)
- Frontend Mentor - [@kasie](https://www.frontendmentor.io/profile/KasiePatricia)
- linkedin - [@kasie](https://linkedin.com/in/UgwuKasie)
- Twitter - [@ugwukasie](https://www.twitter.com/UgwuKasie)

## Acknowledgments

Thanks to [Ogochukwu](https://github.com/Ogochukwu-ugo) for her timely help at some points during the project.
