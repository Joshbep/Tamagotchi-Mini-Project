class Firegotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
  }
}
const pet = new Firegotchi('your pet')
console.log(pet)
