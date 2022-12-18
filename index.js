// initialize the advice state
//Grab all relevant dom elements i.e advice num, advice text and generate btn
//create a promise to generate a random advice
//attach a click event listener to the button

const adviceNum = document.querySelector('h2');
const advice = document.querySelector('#advice');
const dice = document.getElementById('diceImg');
const generateAdviceBtn = document.querySelector('#generateAdviceBtn');

const getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            if (!response.ok) {
                throw Error(`Can't find any advice`);
            }
            return response.json();
        })
        .then((data) => {
            advice.innerHTML = `
                <img id='loader' src='images/dice-loader.gif' alt='Loader Gif'/>
            `;

            setTimeout(() => {
                adviceNum.textContent = `Advice #${data.slip.id}`;
                advice.innerHTML = `"${data.slip.advice}"`;
            }, 2000);
        })
        .catch((err) => {
            advice.innerHTML = `
                <img id='loader' src='images/dice-loader.gif' alt='Loader Gif'/>
            `;

            setTimeout(() => {
                adviceNum.textContent = `Advice #`;
                advice.innerHTML = `Can't find any advice! Try again later!`;
            }, 2000);
        });
};

generateAdviceBtn.addEventListener('click', getRandomAdvice);
