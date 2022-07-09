//class for tamagotchi
// set up pet which we are making a class for Firegotchi
//set a name, hunger, sleepiness, boredom and age
// setup fuctions inside the class to age, eat, sleep and play
//create function with for loop to age, eat, sleep and play
// set up funciton to animate pet
//set up functino to play game
// const timer = time = 0, isNightTime = false;
// console.log(timer);
const hungerStat = document.querySelector('.hungerStat');
const sleepStat = document.querySelector('.sleepStat');
const boredStat = document.querySelector('.boredStat');
const ageStat = document.querySelector('.age');
const foodButton = document.querySelector('#feed');
const sleepButton = document.querySelector('#lights');
const playButton = document.querySelector('#bored');
const nameField = document.querySelector('.inputName');
const submitButton = document.querySelector('.submit');
const character = document.querySelector('.character');
const characterName = document.querySelector('.characterName');
const egg = document.querySelector('#egg');
const charmanderpic = document.querySelector('#charmander');
const apple = document.querySelector('#apple');

class Firegotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleep = 1;
    this.bored = 1;
    this.age = 0;
  }
  ageUp () {
  this.age ++;
  this.hunger++;
  updateStats();
  pictureChange();
  }
  feedPet () {
    if (this.hunger > 10) {
      return
    } else if (this.hunger < 1) {
      this.hunger = 0
    } else {
    this.hunger --;
    }
    updateStats();
  }
  sleepy () {
    if (this.sleep > 10) {
      return
    }else if (this.hunger < 1) {
      this.sleep = 0
    } else {
    this.sleep --;
    }
    updateStats();
  }
  play () {
    if (this.bored > 10) {
      return
    }else if (this.bored < 1) {
      this.bored = 0
    } else {
      this.bored --;
    }
    updateStats();
  }
  addHunger() {
    setInterval(() => {
      this.hunger++;
      if (this.hunger < 1) {
        this.hunger = 0
      }
      updateStats();
    }, 5000)
  }
  addSleep() {
    setInterval(() => {
      this.sleep++;
      if (this.sleep < 1) {
        this.sleep = 0
      }
      updateStats();
    }, 6000)
  }
  addBoredom() {
    setInterval(() => {
      this.bored++;
      updateStats();
    }, 4000)
  }
}
// const pet = new Firegotchi(name) //should put inside start game
const pet = new Firegotchi(name)

const updateStats = () => {
  ageStat.innerText = `Age: ${pet.age}`;
  sleepStat.innerText = `Sleepiness: ${pet.sleep}`;
  hungerStat.innerText = `Hunger: ${pet.hunger}`;
  boredStat.innerText = `Boredom: ${pet.bored}`;
  if (pet.hunger > 10 || pet.bored > 10 || pet.sleep > 10) {
    console.log("Gameover");
    hungerStat.innerText = ('Gameover');
    boredStat.innerText = ('Gameover');
    sleepStat.innerText = ('Gameover');
    ageStat.innerText = ('Gameover');
  }
}

const naming = () => {
  nameField.disabled = true
  submitButton.disabled = true;
  let name = nameField.value.toUpperCase()
  pet.name = name
  console.log(name);
  characterName.innerText = (`Name: ${name}`);
  return name
}

const darkMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode")
  document.querySelector(".stats").style.color = "black";
  pet.sleepy();
  updateStats();
  setTimeout(lightMode, 1000);
}
const lightMode = () => {
  let element = document.body;
  element.classList.toggle("light-mode")
}

const pictureChange = () => {
  if (pet.age === 1) {
    alert('Your egg is finally hatching!')
    document.querySelector('#egg').src = "./images/imgur.gif";
    const charma = document.querySelector('#egg').src = "./images/imgur.gif";
    charma.height = 550;
    charma.width = 350;
  } else if (pet.age === 3) {
    alert('Your pet is evolving!')
    document.querySelector('#egg').src = "./images/charm.gif";
  } else if (pet.age === 6) {
    alert('Your pet is evolving again!')
    const chari = document.querySelector('#egg').src = "./images/charizard.webp"
    chari.height = 850;
    chari.width = 750;
  }
}

const startGame = () => {
  naming();
  setInterval (() => {
    pet.ageUp();
    if (pet.hunger > 10 || pet.bored > 10 || pet.sleep > 10) {
      console.log("Gameover");
      hungerStat.innerText = ('Gameover');
      boredStat.innerText = ('Gameover');
      sleepStat.innerText = ('Gameover');
      clearInterval();
    }
 }, 5000);
  pet.addHunger();
  pet.addSleep();
  pet.addBoredom();
  updateStats();
  sleepButton.addEventListener('click', () => {darkMode();})
  foodButton.addEventListener('click', () => {pet.feedPet();})
  playButton.addEventListener('click', () => {pet.play();})
}
// console.log(pet.ageUp());
// pet.ageUp();
// pet.feedPet();
// pet.sleepy();
// pet.play();
// console.log(pet);

// const displayAge = () => {
//
// }

submitButton.addEventListener('click', () => {startGame();})
