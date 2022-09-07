'use strict';

const adviceUrl = 'https://api.adviceslip.com/advice';

const adviceIdLocation = document.getElementById('advice-id');
const adviceTextLocation = document.getElementById('advice-text');

const uusiNeuvo = document.getElementById('newAdvice');

uusiNeuvo.addEventListener('click', updateQuote);

// let advice;

(function () {
    updateQuote();
})();

async function updateQuote() {
    let data = await fetch(adviceUrl)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

    adviceIdLocation.textContent = data.slip.id;
    adviceTextLocation.textContent = `"${data.slip.advice}"`;

    return;
}
