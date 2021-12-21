let buttons = document.querySelectorAll('label');

let easyButton = buttons[0];
let averageButton = buttons[1];
let intenseButton = buttons[2];

function difficultySelectBehavior() {
  console.log(this);
  //for easy select
  if (this.id === 'easy') {
    easyButton.className = 'selected-difficulty';
    averageButton.className = '';
    intenseButton.className = '';
    console.log('easy selected');
  }
  //for average selected
  else if (this.id === 'average') {
    easyButton.className = '';
    averageButton.className = 'selected-difficulty';
    intenseButton.className = '';
    console.log('average selected');
    //for intense selected
  } else {
    easyButton.className = '';
    averageButton.className = '';
    intenseButton.className = 'selected-difficulty';
    console.log('intense');
  }
}

easyButton.addEventListener('click', difficultySelectBehavior);
averageButton.addEventListener('click', difficultySelectBehavior);
intenseButton.addEventListener('click', difficultySelectBehavior);
