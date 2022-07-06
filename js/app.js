//class for tamagotchi
const totalCount = document.querySelector('#total-count');
class Firegotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
  }
  ageUp () {
    let age = this.age
    if (age < 30) {
      console.log('ageup')
      age++
      return age
    }
    setTimeout(ageUp, 2000);
  }
  feedPet () {
    this.hunger--;
    console.log(this.hunger);
    }
  sleep() {
    this.sleepiness --
  }
  bored1() {
    this.bored --
  }
}
const pet = new Firegotchi('your pet')
// console.log(pet.ageUp());

// const displayAge = () => {
//
// }
  const count = pet.hunger;
  totalCount.innerText = count;
  document.getElementById('feed').addEventListener("click", pet.feedPet())
// document.getElementById('lights').addEventListener('click', )
// document.getElementById('bored').addEventListener('click', )
