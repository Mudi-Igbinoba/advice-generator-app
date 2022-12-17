// initialize the advice state
//Grab all relevant dom elements i.e advice num, advice text and generate btn
//create a promise to generate a random advice
//attach a click event listener to the button

let adviceID;
let adviceText;

const adviceNum = document.querySelector('h2');
const advice = document.querySelector('#advice');
const generateAdviceBtn = document.querySelector('#generateAdviceBtn');

// console.log(adviceNum, advice, generateAdviceBtn);

const getRandomAdvice = async () => {
    let response = await fetch('https://api.adviceslip.com/advice');

    if (response.status !== 200) {
        throw new Error(`'Cannot find advice' ${response.status}`);
    }

    let data = await response.json();

    return data;
};

const random = () => {
    getRandomAdvice()
        // .then((data) => {
        //     adviceID = data.slip.id;
        //     adviceText = data.slip.advice;
        //     adviceNum.textContent = `Advice #${adviceID}`;
        //     advice.textContent = `"${adviceText}"`;
        // })
        .catch((err) => {
            console.log(err);
            adviceID = '';
            adviceText = err;
            adviceNum.textContent = `Advice #${adviceID}`;
            advice.textContent = `"${adviceText}"`;
        });
};

generateAdviceBtn.addEventListener('click', random);
