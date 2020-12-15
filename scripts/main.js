
let beginButton = document.querySelector('#begin_button');
let quizStart = document.querySelector('#quiz_q1');
let introduction = document.querySelector('#intro');

quizStart.style.display = 'none';

beginButton.onclick = () => {
  if (quizStart.style.display === 'none') {
    quizStart.style.display = 'block';
    introduction.style.display = 'none';
}
};

let question2 = document.querySelector('#quiz_q2');
let vegNo = document.querySelector('#veg_no');

question2.style.display = 'none';

vegNo.onclick = () => {
  if (question2.style.display === 'none') {
    question2.style.display = 'block';
  }
};

let sweetQuestion3 = document.querySelector('#quiz_q3A');
let chooseSweet = document.querySelector('#prefer_sweet');
let savoryQuestion3 = document.querySelector('#quiz_q3B');
let chooseSavory = document.querySelector('#prefer_savory');


sweetQuestion3.style.display = 'none';

chooseSweet.onclick = () => {
  if (sweetQuestion3.style.display === 'none') {
    sweetQuestion3.style.display = 'block';
    savoryQuestion3.style.display = 'none';
  }
};


savoryQuestion3.style.display = 'none';

chooseSavory.onclick = () => {
  if (savoryQuestion3.style.display === 'none') {
    savoryQuestion3.style.display = 'block';
    sweetQuestion3.style.display = 'none';
  }
};
