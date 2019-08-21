// new syntax
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
  console.log(this.name, this.voice);
}

const theDogBig = new Animal('dog', 'woof');
const theCatBig = new Animal('cat', 'meow');

theDogBig.say();
theCatBig.say();

// new syntax
class Anim {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
  say() {
    console.log(this.name, this.voice);
  }
}

// duck => Bird.prototype => Animal.prototype => Object.prototype => null
class Birds extends Anim {
  constructor(name, voice, canFly) {
    super(name, voice);
    this.canFly = canFly;
  }
  say() {
    console.log('Bird don\'t like to talk');
  }
}

const duckk = new Birds('duck', 'quack', true);
duckk.say();

