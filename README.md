# Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- See a rolling dice loader before each advice is generated
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![download](https://user-images.githubusercontent.com/65790714/208311430-cca97f5c-4bad-4817-999f-ed484bbd1f0c.jpg)


### Links

- Solution URL: [https://github.com/Mudi-Igbinoba/advice-generator-app](https://github.com/Mudi-Igbinoba/advice-generator-app)
- Live Site URL: [https://mudi-igbinoba.github.io/advice-generator-app/](https://mudi-igbinoba.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Plain JS



### What I learned

I learned how to make use of the catch method to handle promise rejections

```js
.catch((err) => {
    advice.innerHTML = `
        <img id='loader' src='images/dice-loader.gif' alt='Loader Gif'/>
    `;

    setTimeout(() => {
        adviceNum.textContent = `Advice #`;
        advice.innerHTML = `Can't find any advice! Try again later!`;
    }, 2000);
})
```

### Continued development

I want to focus on building more projects in the future that make use of API calls


## Author

- Website - [Mudi Igbinoba](https://www.mudee.netlify.app)
- Frontend Mentor - [@mudi-igbinoba](https://www.frontendmentor.io/profile/mudi-igbinoba)
- Twitter - [@Mudi_Igbinoba](https://www.twitter.com/mudi_igbinoba)
- Github - [@mudi-igbinoba](https://github.com/mudi-igbinoba)
- LinkedIn - [Osamudiame Igbinoba](https://www.linkedin.com/in/osamudiame-igbinoba/)



