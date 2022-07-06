//class for tamagotchi
class Firegotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleep = 1;
    this.bored = 1;
    this.age = 0;
  }
  ageUp () {
  this.age++
  console.log(this.age);
  }
  feedPet () {
    this.hunger --;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    console.log(this.hunger);
    }
  sleepy () {
    this.sleep --;
    console.log(this.sleep);
  }
  bored1 () {
    this.bored --;
    console.log(this.bored);
  }
}
const pet = new Firegotchi('your pet')
// console.log(pet.ageUp());
pet.ageUp();
pet.feedPet();
pet.sleepy();
pet.bored1();
console.log(pet);

// const displayAge = () => {
//
// }

document.getElementById('feed').addEventListener('click', e => pet.feedPet)
// document.getElementById('lights').addEventListener('click', )
// document.getElementById('bored').addEventListener('click', )
