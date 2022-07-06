//class for tamagotchi
// set up pet which we are making a class for Firegotchi
//set a name, hunger, sleepiness, boredom and age
// setup fuctions inside the class to age, eat, sleep and play
//create function with for loop to age, eat, sleep and play
// set up funciton to animate pet
//set up functino to play game
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
  this.age++;
  this.hunger++;
  hungerStat.innerText = this.hunger
  boredStat.innerText = this.bored
  sleepStat.innerText = this.sleepy
  ageStat.innerText = this.age
  }
  feedPet () {
    this.hunger --;
    this.sleep ++;
    this.bored ++;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    hungerStat.innerText = this.hunger
    boredStat.innerText = this.bored
    sleepStat.innerText = this.sleepy
    ageStat.innerText = this.age
    }
  sleepy () {
    this.sleep --;
    this.hunger ++;
    this.bored --;
    if (this.sleep < 0) {
      this.sleep = 0;
    }
    hungerStat.innerText = this.hunger
    boredStat.innerText = this.bored
    sleepStat.innerText = this.sleepy
    ageStat.innerText = this.age
  }
  play () {
    this.bored --;
    this.hunger ++;
    this.sleep ++;
    if (this.bored < 0) {
      this.bored = 0;
    }
    hungerStat.innerText = this.hunger
    boredStat.innerText = this.bored
    sleepStat.innerText = this.sleepy
    ageStat.innerText = this.age
  }
}
// const pet = new Firegotchi(name) //should put inside start game
  const pet = new Firegotchi(name)

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

submitButton.addEventListener('click', naming)
sleepButton.addEventListener('click', darkMode)
// document.getElementById('feed').addEventListener('click', e => pet.feedPet)
// document.getElementById('lights').addEventListener('click', )
// document.getElementById('bored').addEventListener('click', )
