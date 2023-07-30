addEventListener('keyup', () => {
  const demoName = document.querySelector('.demo-name');
  const demoNum = document.querySelector('.demo-number');
  const demoExpMM = document.querySelector('.demo-exp-mm');
  const demoExpYY = document.querySelector('.demo-exp-yy');
  const demoCvc = document.querySelector('.demo-cvc');

  const cardName = document.getElementById('cardholder');
  const cardNum = document.getElementById('card-num');
  const cardExpMM = document.getElementById('exp-month');
  const cardExpYY = document.getElementById('exp-year');
  const cardCvc = document.getElementById('cvc');
  
  if (cardName.value){
    demoName.innerText = cardName.value;
  } else {
    demoName.innerText = 'Jane Appleseed';
  };
  
  if (cardNum.value) {
    demoNum.innerText = cardNum.value.padEnd(16, '0').replace(/(.{4})/g, '$1 ');
    
    const cardNumFormat = cardNum.value.replace(/(.{4})/g, '$1 ');
    cardNum.value = cardNumFormat.join(' ');
    
  } else {
    demoNum.innerText = '0000 0000 0000 0000';
  };
  
  if (cardExpMM.value) {
    demoExpMM.innerText = cardExpMM.value;
  } else {
    demoExpMM.innerText = '00';
  };
  
  if (cardExpYY.value) {
    demoExpYY.innerText = cardExpYY.value;
  } else {
    demoExpYY.innerText = '00';
  };
  
  if (cardCvc.value) {
    demoCvc.innerText = cardCvc.value;
  }
});


const successEl = document.querySelector('.success-screen');
const cardFormEl = document.querySelector('.card-form');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', () => {
  cardFormEl.classList.add('hidden');
  successEl.classList.remove('hidden');
});