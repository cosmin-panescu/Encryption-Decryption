const formEl = document.querySelector('form');
const outputEl = document.querySelector('#output');
const inputEl = document.querySelector('#input');
const switchEl = document.querySelector('.switch');
const convertEl = document.querySelector('.convert');
const title = document.querySelector('.title');

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    const inputType = e.target.input.getAttribute('data-type');

    convert(inputType, inputValue);
});

switchEl.addEventListener('click', e => {
    const type = e.target.getAttribute('data-type');
    inputEl.value = '';
    outputEl.value = '';

    if (type === 'binary') {
        e.target.setAttribute('data-type', 'text');
        inputEl.setAttribute('data-type', 'text');
        inputEl.setAttribute('placeholder', 'Introduceți mesajul pentru a fi criptat...');
        title.innerText = "Din TEXT în BINAR";
        convertEl.innerText = 'CRIPTEAZĂ';
    } else if (type === 'text') {
        e.target.setAttribute('data-type', 'binary');
        inputEl.setAttribute('data-type', 'binary');
        inputEl.setAttribute('placeholder', 'Introduceți mesajul pentru a fi decriptat...');
        title.innerText = "Din BINAR în TEXT";
        convertEl.innerText = 'DECRIPTEAZĂ';
        outputEl.innerText = "";
    }
})

function convert(type, value) {
    let output = '';

    if (type === 'binary') {
        output = binarInText(value);
    } else if (type === 'text') {
        output = textInBinar(value);
    }

    outputEl.innerText = output;
}

function binarInText(input) {
    let output = '';
    output = input
        .split(' ') // luam fiecare numar cod binar
        .map(number => parseInt(number, 2))
        .map(number => String.fromCharCode(number))
        .join('');

    return output;
}

function textInBinar(input) {
    let output = '';
    output = input
        .split('') // luam fiecare caracter
        .map(letter => letter.charCodeAt(0))
        .map(letter => letter.toString(2))
        .join(' ');

    return output;
}
