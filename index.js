const lowValueInput = document.getElementById('low-value');
const highValueInput = document.getElementById('high-value');
const numResultsInput = document.getElementById('num-results');
const uniqueResults = document.getElementById('uniqie-res');
const getNumbersBtn = document.getElementById('get-numbers');
const resultsEl = document.querySelector('.results');
const errorEl = document.querySelector('.error');

function renderResults(numArray) {
    errorEl.textContent = "";
    numArray.sort(function(a, b){return a - b});
    numArray.forEach(number => {
        let numberEl = document.createElement("h4");
        numberEl.textContent = number;
        resultsEl.appendChild(numberEl);
    });
}
function getResults(min, max) {
    const numArray = [];
    const numRange = max - min;
    const numResults = numResultsInput.value;
    if(uniqueResults.checked) {
        resultsEl.innerHTML = "";
        for(let i = 0; i < numResults; i++) {
            const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            numArray.push(randNum);
        };
        renderResults(numArray);
    } else if(!uniqueResults.checked  && numRange > numResults) {
        resultsEl.innerHTML = "";
        while(numArray.length < numResults){
            const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!numArray.includes(randNum)) {
                numArray.push(randNum);          
            };
        }
        renderResults(numArray);
    } else {
        resultsEl.innerHTML = "";
        errorEl.textContent = "Not enough unique numbers available";
    };
};

function verifyNumbers() {
    const min = Math.ceil(lowValueInput.value);
    const max = Math.floor(highValueInput.value);
    if(max > min) {
        getResults(min, max);
    } else {
        resultsEl.innerHTML = "";
        errorEl.textContent = "High value should be greater than low value"
    };
}

getNumbersBtn.addEventListener("click" , verifyNumbers);