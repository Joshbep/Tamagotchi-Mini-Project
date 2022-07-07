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
  }
  feedPet () {
    if (this.hunger > 10) {
      return
    } else if (this.hunger < 1) {
      this.hunger = 0
    } else {
    this.hunger --;
    this.sleep ++;
    this.bored ++;
    updateStats();
    }
  }
  sleepy () {
    if (this.sleep > 10) {
      return
    }else if (this.hunger < 1) {
      this.sleep = 0
    } else {
    this.sleep --;
    this.hunger ++;
    this.bored --;
    }
    updateStats();
  }
  play () {
    if (this.bored > 10) {
      return
    }else if (this.bored < 1) {
      this.bored= 0
    } else {
      this.bored --;
      this.hunger ++;
      this.sleep ++;
    }
    updateStats();
  }
}
// const pet = new Firegotchi(name) //should put inside start game
const pet = new Firegotchi(name)

const updateStats = () => {
  ageStat.innerText = `Age: ${pet.age}`;
  sleepStat.innerText = `Sleepiness: ${pet.sleep}`;
  hungerStat.innerText = `Hunger: ${pet.hunger}`;
  boredStat.innerText = `Boredom: ${pet.bored}`;
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
  console.log(pet.sleepy());
  updateStats();
}

const startGame = () => {
  naming();
  let timer = setInterval (() => {
    pet.ageUp();
    if (pet.hunger > 10 || pet.bored > 10 || pet.sleep > 10) {
      console.log("Gameover");
      hungerStat.innerText = ('Gameover');
      boredStat.innerText = ('Gameover');
      sleepStat.innerText = ('Gameover');
      clearInterval(timer);
    }
 }, 5000);
  updateStats();
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

submitButton.addEventListener('click', startGame)
sleepButton.addEventListener('click', darkMode)
// document.getElementById('feed').addEventListener('click', e => pet.feedPet)
// document.getElementById('lights').addEventListener('click', )
// document.getElementById('bored').addEventListener('click', )
